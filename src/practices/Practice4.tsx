import React from "react";

export const Practice4 = () => {
  // "strict": true にすることで型を設定を求められる
  const calcTotalFee = (num) => {
    const total = num * 1.1;
    console.log(total);
  };

  const onClickPracticeA = () => {
    // JSは暗黙のルールで文字列を数字に自動変換してくれる
    // 逆にこのゆるさが危ういので引数に型を指定してエラーを出す
    calcTotalFee(1000)
  };

  return (
    <div>
      <p>練習問題：設定ファイルを触ってみる</p>
      <button onClick={onClickPracticeA}>練習問題4を実行</button>
    </div>
  )
};