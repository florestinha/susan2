import test from 'tape';
import createTestClient from '../../../../__tests__/integration/createTestClient';
import GET_ENTITY_MEMBER_QUERY from '../queries/GET_ENTITY_MEMBER_QUERY';
import DELETE_ENTITY_MEMBER_MUTATION from '../mutations/DELETE_ENTITY_MEMBER_MUTATION';

test('delete entityMember', async (t) => {
  const { mutate, query, clean } = await createTestClient();

  const entityMembers = await query({
    query: GET_ENTITY_MEMBER_QUERY,
    variables: null,
  });

  const firstEntityMemberId = entityMembers.data.entityMembers[0].id;

  t.notEqual(
    firstEntityMemberId,
    null,
    'should return a entityMember id',
  );

  clean();

  const deleteResult = await mutate({
    mutation: DELETE_ENTITY_MEMBER_MUTATION,
    variables: {
      input: {
        id: firstEntityMemberId,
      },
    },
  });

  if (typeof (deleteResult.errors) !== 'undefined') {
    t.notEqual(
      deleteResult.errors[0].message.search('foreign'),
      -1,
      'should return error if foreign key',
    );
  } else {
    t.equal(deleteResult.data.deleteEntityMember.count, 1, 'should return 1');

    clean();

    const emptyResult = await mutate({
      mutation: DELETE_ENTITY_MEMBER_MUTATION,
      variables: {
        input: {
          id: firstEntityMemberId,
        },
      },
    });

    t.equal(emptyResult.data.deleteEntityMember.count, 0, 'should return 4');
  }

  t.end();
  test.onFinish(() => process.exit(0));
});
