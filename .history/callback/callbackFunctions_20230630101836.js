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

function TextDecoderStream(subject, callback) {
    console.log(`Start time of the exam: ${subject}`);
    callback();
}
