import { type } from "os";

type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export const User = (props: UserType) => {
  const { id, name, username, email } = props;

  return (
    <>
      <p>{`id:${id}　name:${name}　username:${username}　email:${email}`}</p>
    </>
  );
};