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
