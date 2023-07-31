'use strict'
/*
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
    mileage: 28000,
    started: true,
    start: function(){
        this.started = true;
    },
    stop: function(){
        this.started = false;
    },
    drive: function() {
        if(this.started) {
        console.log('Wrum wrum');
        } else {
            console.log('Start your engine');
        }
    }
};
taxi.drive(); */

/* function prequal (newCar) {
    if (newCar.mileage > 10000) {
        return false;
    } else if (newCar.year > 2000) {
        return false;
    }
    return true;
}
let worthLook = prequal(taxi);
if(worthLook) {
    console.log(`You should check: ${taxi.make}, ${taxi.model}`)
} else {
    console.log(`You REALLY should check: ${taxi.make}, ${taxi.model}`)
} */



// ARRAYS

let cars = ['BMW', 'Volvo', 'Toyota'];
console.log(cars[1]);
console.log(cars);

// typeOf() - элемент массива

let user = ['Vika', 'Chigrinets', 28];
let user1 = {
    firstName: 'Vika',
    lastName: 'Chigrinets',
    age: 28
};
//console.log(user.length);
user.push(170);
console.log(user);

console.log(user.toString());
console.log(user.join("+"));

// pop() - delete the last array element
user.pop();
console.log(user);

user.push('nice');
console.log(user);

// shift - все сдвигает на -1, удаление 1го эл-та
user.shift();
console.log(user);

// unshift - create new array element
user.unshift('Victoria');
console.log(user);

// delete does not change array length, empty space
delete user[0];
console.log(user);

// splice - new element to array
user.splice(2,0,180,8);
console.log(user);

// concat - uny several arrays
let userNew = ['Stas', 'Chigrinets', 180];
let userNew1 = ['Basya'];
let family = user.concat(userNew, userNew1);
console.log(family);

// slice - new array from sliced parts of another
let use = ['PUY', 18, 'Hoho']
let us = use.slice(1,2);
console.log(us);

// sort array elements by alphabet
let vika = ['fun', 'joy', 'hohoho']
console.log(vika.sort());

