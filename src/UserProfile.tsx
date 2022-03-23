import { VFC } from 'react';
import { User2 } from './types/user2';

type Props = {
  user: User2;
}

// join()：引数の文字列を使って配列を連結する

export const UserProfile: VFC<Props> = (props) => {
  const { user } = props;

  return (
    <dl>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>趣味</dt>
      <dd>{user.hobbies?.join(' / ')}</dd>
      {/* オプショナルチェイニング「?.」を付けることで、それ以降の記述を読まない */}
    </dl>
  );
};