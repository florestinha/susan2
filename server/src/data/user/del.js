import UserDB from '../../db/queryBuilders/user';

export default async id => UserDB.delete(id);
