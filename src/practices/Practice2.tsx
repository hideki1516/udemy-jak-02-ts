import React from "react";

export const Practice2 = () => {
  // 明示的に返却値の型を指定することでチーム開発でのエラーを防ぐ
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };

  const getString = (str: string): string => {
    const totalString = str + 'さん';
    return totalString;
  };

  const onClickPracticeA = () => {
    console.log(getTotalFee(1000));
  };

  const onClickPracticeB = () => {
    console.log(getString('山本'));
  };

  return (
    <div>
      <p>練習問題：返却値の型指定</p>
      <button onClick={onClickPracticeA}>練習問題2を実行</button>
      <button onClick={onClickPracticeB}>練習問題2-1を実行</button>
    </div>
  )
};