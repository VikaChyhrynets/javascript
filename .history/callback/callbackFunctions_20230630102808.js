'use strict'

function one() {
    setTimeout(function() {
    console.log('one');
}, 5000);
}

function two() {
    console.log('two');
}
one();
two();


// example 2
function testStart(subject, callback) {
    console.log(`Start time of the exam: ${subject}`);
    callback();
}

function testFinish() {
    console.log('Test ends');
}
testStart('physics', testFinish);

