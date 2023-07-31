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


/*
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

// reverse - change array element by reverse order
console.log(vika.reverse());

// !!!!!!!!!!!!!
let number = [2,100,25,12,45];
number.sort(function(a,b) {
    return a - b;
})
console.log(number);

let number1 = [2,100,25,12,45];
number.sort(function(a,b) {
    return 0.5 - Math.random();
})
console.log(number1);


// Передача по ссылке/значению
function change(x){
    x = 2*x;
    console.log('x in change: ', x);
}
let y = 2;
console.log('y before change: ', y);
change(y);
console.log('y after change: ', y);


function change1(user) {
    user.name = 'Anna';
}
let andrey = {
    name: 'Andrey'
};
console.log('before change: ', andrey.name);
change1(andrey);
console.log('after change: ', andrey.name);



function replace(array) {
    array[0] = 8;
}
function replaceAll(array) {
    array = [4,5,6];
}
let numbers = [1,2,3];
console.log('before replace: ', numbers);
replace(numbers);
console.log('after replace: ', numbers);
replaceAll(numbers);
console.log('after replaceAll: ', numbers);

// spread
let log = function(a,b,c) {
    console.log(a,b,c);
};
//log(...['spread', 'rest','operator']);
log.apply(null, ['spread', 'rest','operator']);

let awr = ['will', 'love'];
let awr2 = ['You', ...awr, 'spread', 'operator'];
console.log(awr2);


let birthday = [1994, 6, 25];
let day = new Date(...birthday);
console.log(day);
console.log(birthday);

// rest
let log1 = function(a,b,c, ...rest) {
    console.log(a,b,c, rest);
};
log1('Vika', 'rest', 'spread', 'user');
*/


// ОБЪЕКТЫ
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return this.firstName + " " + this.lastName
    }    
}
let person = new Person('vika', 'chigrinets');
console.log(person.getFullName());

class User extends Person {
    constructor(firstName, lastName, email, password) {
        super(firstName, lastName)
        this.email = email
        this.password = password 
    }
    getEmail() {
        return this.email
    }
    getPassword() {
        return this.password
    }
}
    function App(params) {
        let user = new User('Andrey',
                            'Makeenko',
                            'andrey.makeenko@blabla.com',
                            '123456789');
                            
    }


