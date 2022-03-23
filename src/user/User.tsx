import { UserType } from '../types/user';

export const User = (props: Pick<UserType, 'name' | 'username' | 'email'>) => {
  const { name, username, email } = props;

  return (
    <>
      <p>{`name:${name}　userName:${username}　email:${email}`}</p>
    </>
  );
};