import React from "react";

export const Practice3 = () => {
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };
  
  const getString = (str: string): string => {
    const totalString = str + 'さん';
    return totalString;
  };

  const onClickPracticeA = () => {
    // useStateなどで型を指定しておくと、
    // 使用するコンポーネントで間違った型の設定を防げる
    let total: number = 0;
    total = getTotalFee(1000);
    console.log(total);
  };
  
  const onClickPracticeB = () => {
    let total: string = '';
    total = getString('山本');
    console.log(total);
  };
  return (
    <div>
      <p>練習問題：変数の型指定</p>
      <button onClick={onClickPracticeA}>練習問題3を実行</button>
      <button onClick={onClickPracticeB}>練習問題3-1を実行</button>
    </div>
  )
};