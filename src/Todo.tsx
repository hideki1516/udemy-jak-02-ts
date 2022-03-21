
type TodoType = {
  userId: number;
  title: string;
  completed?: boolean;// ?を付けることで必須ではない値を明示できる
};

export const Todo = (props: TodoType) => {
  // ?を付ける代わりにcompletedの初期値を設定しておく
  // → completedにundefinedが渡ってくる可能性もあるため
  const { title, userId, completed = false } = props;
  // 三項演算子：completedがfalseの場合は[未]を代入
  const completeMark = completed ? '[完]' : '[未]';
  return <p>{`${completeMark} ${title}（ユーザー：${userId}）`}</p>
};