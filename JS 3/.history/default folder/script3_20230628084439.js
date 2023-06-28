'use strict'

// task 1
console.log('task1');


// task 2
// Дана строка 'JS'. Сделайте из нее строку 'js'.
console.log('task2');
let str = 'JS';
console.log("Let's transform to lower case: " + str.toLowerCase());


// task 3
console.log('task3');
// Дана строка 'я люблю JS!'. Вырежите из нее слово 
// 'люблю' и слово 'javascript' тремя разными способами 
// (через substr, substring, slice).
let str3 = 'I love JS!'
console.log(str3.substr(2,4));
console.log(str3.substring(2,6));
console.log(str3.slice(2,4));


// task 4
console.log('task4');


// task 5
console.log('task5');


// task 6
console.log('task6');


// task 7
console.log('task7');
// Дана строка 'я люблю JS'. С помощью метода split 
// запишите каждое слово этой строки в отдельный элемент 
// массива.
let str7 = 'I love JS';
console.log(str7.split(" "));


// task 8
// Дана строка 'привет мир'. С помощью метода split 
// запишите каждый символ этой строки в отдельный элемент 
// массива.
console.log('task8');
let str8 = 'Hello world';
console.log(str8.split(""));
