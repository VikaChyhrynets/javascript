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

let new1Text = 'Hi hi, I am Vika';
console.log(new1Text.lastIndexOf('Stasik'));

let text1 = 'Hi hi, I am Vika';
console.log(text1.search('Vika'));

let fruits = 'Banana, apple, orange'
console.log(fruits.slice(8,13));

let minusFruits = 'Kiwi, apricot, strawberry'
console.log(minusFruits.slice(-11));

let cars = 'BMV, Audi, Lexus'
console.log(cars.substring(5,9));

let car = 'BMV, Audi, Lexus'
console.log(car.substr(11,5));

let carModel = 'BMV, Audi, Lexus'
console.log(carModel.substr(5));

let name = "Hi everyone, I am Vika and Vika";
console.log(name.replace("Vika", "Stasik"));

let newName = "Hi everyone, I am Vika";
console.log(newName.replace("VIKA"/i, "Stasik"));