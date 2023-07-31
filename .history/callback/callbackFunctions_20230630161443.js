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



// Objects

let BMW = {
    make: 'BMW',
    model: 'X5',
    year: 2010,
    color: 'red',
    mileage: 1000
};
BMW.model = 'X7';
BMW.weignt = 5000;
delete BMW.color;
//console.log(BMW.make, BMW.model);
console.log(BMW);


// example 2
let taxi={
    make: 'Renault',
    model: 'Taxi',
    year: 2015,
    color: 'yellow',
    passenger: 4,
    mileage: 28000
};

function prequal (newCar) {
    if (newCar.mileage > 10000) {
        return false;
    } else if (newCar.year > 2000) {
        return false;
    }
    return true;
}