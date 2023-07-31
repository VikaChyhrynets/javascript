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
console.log(str3.substr(7,2));
console.log(str3.substring(2,6));
console.log(str3.substring(7,9));
console.log(str3.slice(2,6));
console.log(str3.slice(7,9));


// task 4
console.log('task4');
// Дана строка 'я люблю JS!'. Найдите позицию 
// подстроки 'люблю'.
let str4 = "I love JS!";
console.log(str4.indexOf('love'));


// task 5
console.log('task5');
// Дана переменная txt, в которой хранится какой-либо текст. 
// Реализуйте обрезание длинного текста по следующему 
// принципу: если количество символов этого текста больше 
// заданного в переменной n, то в переменную result запишем 
// первые n символов строки txt и добавим в конец 
// троеточие '...'. В противном случае в переменную 
// result запишем содержимое переменной txt.
function truncateText(txt, n) {
    if (txt.length > n) {
        return txt.substring(0, n) + '...';
    } else {
        return txt;
    }
}

let txt = "Any long long text";
let n = 7;
let result = truncateText(txt, n);
console.log(result);

/*function truncateText(txt, n) {
    if (txt.length > n) {
      return txt.substring(0, n) + '...';
    } else {
      return txt;
    }
  }
  
  // Пример использования
  let txt = "Это очень длинный текст, который нужно обрезать.";
  let n = 20;
  let result = truncateText(txt, n);
  console.log(result);*/


// task 6
console.log('task6');
// Для решения задач данного блока вам понадобятся следующие 
// методы: replace.
// Дана строка 'Я-люблю-JS!'. 
// Замените все  '-' на '!' с помощью глобального 
// поиска и замены.
let str6 = "I-love-JS!";
console.log(str6.replace(/-/g, "!"));


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
