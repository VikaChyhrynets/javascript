'use strict'
let year = 2025;
if(year == 2021) {
console.log(true);
console.log('You are cool!');
}
else {
    console.log(false);
}


let year1 = 2023;
if (year1 < 2023) {
    console.log("Back to the past");
} else {
    if (year1 > 2023) {
        console.log("Back to the future");
    }
    else {
        console.log("You are at the proper time");
    }
}

// тернарный оператор
let age = 17;
let all = (age >= 18) ? true : false;
console.log(all);


let newAge = 101;
let club = (newAge < 18) ? 'Hello baby!' : (newAge == 18) ? 'Come in!' : (newAge > 100) ? 'Hmm, interesting age!' : 'Come in';
console.log(club);


let club1;
let ageNew = 105;
if (ageNew < 18) {
    club1 = 'Hello baby!';
} else if (ageNew == 18) {
    club1 = 'Come in!';
} else if (ageNew > 100) {
    club1 = 'Hmm, okay, come in!'
}
console.log(club1);

// LOOPS
/* let i = 0;
while(i < 3) {
    console.log(i++);
    //i++;
}


let p = 3;
while(p)console.log(p--);

let q = 0;
do{
    console.log(q++);
} while(q < 3); 

let w = 0;
do{
    console.log(w++);
} while(w > 3);

for(let o = 0; o <= 5; o++) {
    console.log(o);
}


let k = 0;
for(; k<3;) {
    console.log(k++);
}


for(let t=0; t<10; t++) {
    if(t%2 ==0) continue;
    console.log(t);
} */


for (let b = 0; b < 5; b++) {
    for (let e = 0; e < 5; e++) {
        console.log(`Coordinates value (${b,e})`)
    }
}