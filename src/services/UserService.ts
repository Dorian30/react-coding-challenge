import { IUser } from 'interfaces/IUser';

export const login = ({
  email,
  password
}: {
  email: string;
  password: string;
}) =>
  new Promise<IUser>((resolve, reject) =>
    setTimeout(() => {
      fetch('./db.json')
        .then(res => res.json())
        .then(({ users }) => {
          const user = (users as Array<IUser>).find(
            user => user.email === email && user.password === password
          );

          if (!user) {
            return reject('Invalid credentials');
          }

          localStorage.setItem('user', JSON.stringify(user));
          return resolve(user);
        });
    }, 1000)
  );

export const logout = () =>
  new Promise(resolve =>
    setTimeout(() => resolve(localStorage.removeItem('user')), 1000)
  );

export const getProfile = () =>
  new Promise<IUser>((resolve, reject) =>
    setTimeout(() => {
      const user = JSON.parse(localStorage.getItem('user') as string) as IUser;
      console.log({ user });

      if (!user) {
        reject('User not found');
      }

      resolve(user);
    }, 1000)
  );
