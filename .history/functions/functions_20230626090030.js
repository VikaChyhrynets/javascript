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