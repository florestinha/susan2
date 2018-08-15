import bcrypt from 'bcrypt';
import db from '../../db';

export default async ({
  name,
  password,
  email,
}) => {
  console.log(`Add user ${name} with password ${password}`);
  const user = {
    name,
    password: bcrypt.hashSync(password, 10),
    email,
  };

  const result = await db('user').insert(user, 'id');
  user.id = result[0];
  return user;
};
