/* 
console.log(10);
alert(20);

let age = 29;
let user = "Vika";
let message = "Hello";
console.log(age);
console.log(user);
console.log(message);

var name = "Funtik";
name = "Basya"
console.log(name);

'use strict';
COLOR_RED = "f00";
let color = COLOR_RED;
console.log(color);

const city = "Bialystok";
console.log(city);

let Poland = "nice";

let n = 1;
n = 1.23;
console.log(1/0);
console.log(Infinity);
console.log(n);
console.log(Infinity/1);

let str1 = "Hello";
let str2 = 'Hi';
console.log(str1);

let dot;
console.log(dot);

typeof undefined // тип undefined
typeof 0         // number
typeof 10n       // bigint
typeof true      // boolean
typeof "Hello"   // String

typeof null      // object => error of JS

"use strict";
alert("hello");


"use strict";
// let result = prompt('Text');
let myAge = prompt("How old are you?", 28);
alert(`You are ${myAge} !`);

"use strict";
let result = confirm('question');
*/

console.log(2*3);

let i = 2;
i = -2;
console.log(i);

let x = 2, y = 3;
console.log(x-y);

console.log(5%2);
console.log(2**3);
console.log(4**(1/2));
console.log(16**(1/2));
console.log(125**(1/3));

let text = "Vika" + " Chigrinets";
console.log(text);

let textNew = "Vika" + 28;
console.log(textNew);

let textNew1 = "Vika" + 28 + 1;
console.log(textNew1);

//BUT!!! ORDER AFFECTS:
let textNew2 = 28+1+"Vika"+" will be older in a week";
console.log(textNew2);

let magic = 3 * "2";
console.log(magic);


let a = 2;
console.log(+a);

let ab = -2;
console.log(+ab);

let abc = true;
console.log(+true);
let abcd = true;
console.log(-true);
let abce = true;
console.log(+false);
let abcf = true;
console.log(-false);


let ax = "1";
let ay = "2";
console.log(ax+ay);


let bx = "1";
let by = "2";
console.log(+bx + +by);

let ba = 1, bb = 2;
let c = 2 - (ba = bb+1);
console.log(ba);
console.log(c);


let n = 2;
n+=5; // n = n + 5
n*=2; // n = n * 2
console.log(n);

// right part always works first
let am = 3;
am*=3+5;
console.log(am);

let counter = 2;
counter ++;
console.log(counter);

let minimizer = 10;
minimizer ++;
console.log(minimizer);

