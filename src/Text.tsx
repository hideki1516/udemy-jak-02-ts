import { VFC } from 'react';

type Props = {
  color: string;
  fontSize: string;
};

// コンポーネントの型定義
// const Text: VFC<Props> = (props) => {};

// コンポーネント名の後に指定する
// 関数コンポーネントの型指定はpropsに指定するよりも、
// コンポーネント名に指定する方が推奨されている。

// VFC：暗黙的にchildrenを受け取らない
// FC：暗黙的にchildrenを受け取れる
// 今後、Ver.18でFCもchildrenを受け取らなくなる予定。
// 暫定的にVFCを使用して、今後はFCを使用する。

export const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;

  return <p style={{ color, fontSize }}>テキストです</p>
};