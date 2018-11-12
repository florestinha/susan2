import React from 'react';
import { storiesOf } from '@storybook/react';
import { MockedProvider } from 'react-apollo/test-utils';
import gardenerCreateMutation from './GardenerCreateMutation';

import apolloDecorator from '../../../../.storybook/apolloDecorator';
import GardenerCreateFormContainer from './GardenerCreateFormContainer';


storiesOf('Gardener/Create/Form', module)
  .addDecorator(apolloDecorator)
  .add('empty form', () => <GardenerCreateFormContainer />)
  .add('mockedProvider', () => (
    <MockedProvider
      mocks={[{
        request: {
          query: gardenerCreateMutation,
          variables: {
            password: 'senha',
            email: 'mock@mock.com',
            name: 'mock',
            description: 'mock',
          },
        },
        result: {
          data: {
            createUser: {
              id: 1,
              email: 'mocked',
              gardener: {
                name: 'mocked',
              },
            },
          },
        },
      }]}
      addTypename={false}
    >
      <GardenerCreateFormContainer />
    </MockedProvider>
  ));
