/** eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';

/** TypeScriptの基本の型 */

// boolean
let bool: boolean = true;

// number 数値
let num: number = 0;

// string 文字
let str: string = 'A';

// Array 配列
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

// tuple あまり使わない
let tuple: [number, string] = [0, 'A'];

// any どんな型でもエラーにならない
// 型を指定する意味もない型なので可能な限り使用しない開発がbetter
let any1: any = false;

// void 何も返却値がない型
const funcA = () => {
  const test = 'TEST';
};

// null
let null1: null = null;

// undefined
let undefined1: undefined = undefined;

// object あまり使う機会はない
let obj1: object = {};
let obj2: { id: number, name: string } = {id: 0, name: 'AAA'};