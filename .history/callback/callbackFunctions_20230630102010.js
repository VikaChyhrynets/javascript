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
function test(subject, callback) {
    console.log(`Start time of the exam: ${subject}`);
    callback();
}

test('physics', function() {
    console.log('Test ends')
}
);

