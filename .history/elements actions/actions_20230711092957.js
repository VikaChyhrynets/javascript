'use strict'
// получаем ссылку на элемент. getelementById получает только одно свойство элемента по атрибуту id
// let elem = document.getElementById('Hello pretty world!');
// console.log(elem);
// поменять знаечение в теге р:
// elem.innerHTML = '100500';
// elem.innerHTML = '<strong>101501</strong>';

// перезаписать не только внутренний текст тега, но и сам тег
// elem.outerHTML = '<strong>101501</strong>';
// console.log(elem);

// получить группу тегов по их имени - метод getElementByTagName
// let elems = document.getElementsByTagName('p');
//console.log(elems);
//elems[0].innerHTML = '1';
//elems[1].innerHTML = '2';
//elems[2].innerHTML = '3';

// for(let i = 0; i < elems.length; i++) {
//    elems[i].innerHTML = "123"
// }

// некоторые теги страницы можно не получать методами типа getElementById, а обратиться к ним как к свойствам объекта document
// к тегу <body> можно обратиться: document.body. Работает для "избранных" тегов. 
// Если скрипт находится в head, к нему нельзя обратиться к document.body
// можно получить все HTML формы на странице через document.forms. В результате получим массив форм (коллекцию свойств).
// document.forms[0].innerHTML = '!!!'; 

// к формам можно обращаться по имени вместо номера
