import { VFC } from 'react';
import { TodoType } from './types/todo';

// props: Pick<T, 'aaa' | 'bbb'>
// 型「T」から使用する要素'aaa'と'bbb'を抜き出す

// props: Omit<T, 'ccc'>
// 型「T」から使用しない要素'ccc'を省略する

export const Todo: VFC<Omit<TodoType, 'id'>> = (props) => {
  // ?を付ける代わりにcompletedの初期値を設定しておく
  // → completedにundefinedが渡ってくる可能性もあるた
  const { title, userId, completed = false } = props;
  // 三項演算子：completedがfalseの場合は[未]を代入
  const completeMark = completed ? '[完]' : '[未]';
  return <p>{`${completeMark} ${title}（ユーザー：${userId}）`}</p>
};