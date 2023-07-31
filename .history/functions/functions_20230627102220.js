'use strict'

//example 1
function work(hour, minute) {
    console.log(`I finished work at ${hour}:${minute}`);
}
work(17, 20);



// example 2
let a = 2;
let b = 3;

function rest(a,b) {
    a = a + b;
    console.log(a);
}
rest(a,b);
console.log(a);


// example 3
function sum (a, b) {
    return a + b;
}
const result = sum(4,3);
console.log(result);


// example 4
function sum1 (a, b) {
    return a + b;
    //console.log('no');
}
sum1(5,6);
console.log(sum1);


// example 5
function js (a = 3) {
    console.log(a);
}
js();


// example 6
// стрелочные функции
'use strict'
let workHard = (a)=>console.log(a);
workHard('Hohohoho');


// example 7
let rock = (a,b)=> a + b;
console.log(rock(4,8));


// example 8
let dance = (a)=> {
    let result = a*a;
    console.log(result);
}
dance(30);


// Methods
console.log('27.06.2023');
let txt = 'ABCDE';
console.log(txt.length);

let text = 'Hi hi, I am Vika';
console.log(text.indexOf('Vika'));

let newText = 'Hi hi, I am Vika';
console.log(newText.lastIndexOf('Vika'));

let newText = 'Hi hi, I am Vika';
console.log(newText.lastIndexOf('Stasik'));