'use strict';
// examples

// example 1
let a1 = 7+2;
let a2 = 7-3;
let a3 = 2*4;
let a4 = 4/2;

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);

// example 2
let height = 23;
let width = 10;
let s;
s = height*width;

console.log(`S = ${s}`);

// example 3
let str = 'qwerty';
console.log(str[0]);
console.log(str[1]);
console.log(str[2]);

// example 4
let minutes = 60;
let seconds = 60;
let secondsInHour = minutes * seconds;
console.log(`SecondsInHour = ${secondsInHour}`);

// example 5
// let num = 1;
// num = num + 12;
// num = num - 14;
// num = num * 5;
// num = num / 7;
// num = num + 1;
// num = num - 1;
// console.log(num);

let num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num ++;
num --;
console.log(num);


// Homework
// task 1
// Создайте переменные b1, b2, b3, b4, b5. Поместите в них результат выражений:
// 5 % 3,
// 3 % 5,
// 5 + '3',
// '5' - 3,
// 75 + 'кг'
// Результаты переменных вывести в console.log();

let b1 = 5 % 3;
let b2 = 3 % 5;
let b3 = 5 + '3';
let b4 = '5' - 3;
let b5 = 75 + 'кг';
let b6 = '100' + 75;
console.log(b1);
console.log(b2);
console.log(b3);
console.log(b4);
console.log(b5);
console.log(b6);

// task 2
// Напиши скрипт, который находит объем цилиндра высотой 10м (переменная heightC) и 
// диаметром основания 4м (dC), результат поместите в переменную v.
let heightC = 10;
let dC = 4;
const p = 3.14;
let v = p*(dC/2)**2*10;

console.log(`v = ${v} м3`);

// task 3 
// Создайте переменные a=10 и b=2. Выведите на экран их сумму, разность, произведение и частное (результат деления).
let a = 10;
let b = 2;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

// task 4
//  Создайте переменные c=15 и d=2. Просуммируйте их, а результат присвойте переменной result. 
//  Выведите на экран значение переменной result.
let c = 15;
let d = 2;
let sum = c + d;
let result = sum;
console.log(result);

// task 5
// Создайте переменные a=10, b=2 и c=5. Выведите на экран их сумму.
let anew = 10;
let bnew = 2;
let cnew = 5;
console.log(anew + bnew + cnew);

// task 6
//  Создайте переменные a=17 и b=10. Отнимите от a переменную b и результат присвойте переменной c. 
//  Затем создайте переменную d, присвойте ей значение 7. Сложите переменные c и d, а результат 
//  запишите в переменную result. Выведите на экран значение переменной result.
let aa = 17;
let bb = 10;
let cc = aa - bb;
let dd = 7;
let resultNew = cc + dd;
console.log(resultNew);

// task 7
// Создайте переменную name и присвойте ей ваше имя. Выведите на экран фразу 'Привет, (Имя)!'.
let name = "Vika";
console.log(`Hello, (${name})!`);

// task 8
// Создайте переменную age и присвойте ей ваш возраст. Выведите на экран 'Мне (Возраст) лет!'.
let age = "28";
console.log(`I am ${age} years old!`);

// task 9 
// Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки выведите 
// на экран символ 'a', символ 'c', символ 'e'.
let str1 = 'abcde';
console.log(str1[0]);
console.log(str1[2]);
console.log(str1[4]);

// task 10
// Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце.
let min = 60;
let sec = 60;
let day = 24;
let month = 31;
let secsInH = min * sec;
let secsInD = secsInH * day;
let secsInM = secsInD * month;
console.log(`SecondsInHour = ${secsInH}`);
console.log(`SecondsInDay = ${secsInD}`);
console.log(`SecondsInMonth = ${secsInM}`);