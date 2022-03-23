
export type User2 = {
  name: string;
  hobbies?: Array<string>; // 趣味がない場合もあるので（?）、複数ある場合もあるので配列で定義
};