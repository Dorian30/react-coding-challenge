import { IUser } from 'interfaces/IUser';

export const login = async ({
  email,
  password
}: {
  email: string;
  password: string;
}) => {
  const { users } = await fetch('./db.json').then(res => res.json());
  const user = (users as Array<IUser>).find(
    user => user.email === email && user.password === password
  );

  if (!user) {
    throw new Error('Invalid credentials');
  }

  localStorage.setItem('user', JSON.stringify(user));
  return user;
};

export const getProfile = () => {
  const user = JSON.parse(localStorage.getItem('user') || '');

  if (!user) {
    throw new Error('No user is logged');
  }

  return Promise.resolve<IUser>(user);
};
