import React from "react";

export const Practice1 = () => {
  const calcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };

  const string = (str: string) => {
    console.log(str);
  }

  const onClickPracticeA = () => {
    // JSは暗黙のルールで文字列を数字に自動変換してくれる
    // 逆にこのゆるさが危ういので引数に型を指定してエラーを出す
    calcTotalFee(1000)
  };

  const onClickPracticeB = () => {
    string('ひでき');
  };

  return (
    <div>
      <p>練習問題：引数の型指定</p>
      <button onClick={onClickPracticeA}>練習問題1を実行</button>
      <button onClick={onClickPracticeB}>練習問題1-1を実行</button>
    </div>
  )
};