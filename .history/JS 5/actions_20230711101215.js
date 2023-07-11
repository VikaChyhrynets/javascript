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
// это имя задается в атрибуте name of tag form
// document.form.forma1.innerHTML = "!!!";
// document.forms.forma2.innerHTML = "???";

// у каждой формы есть св-ва элементс, который содержт массив свойств формы. манипулируем объектами, не прибегая к изменению html тегов.
// document.forms[1].elements[0].value = "!?!";
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lesson 1</title>
</head>
<body>
   <input type = "text" value = "1" id = "test">
    <script src="elements actions/actions.js"></script>
</body>
</html>

let elem = document.getElementById('test');
elem.setAttribute('value', 33);
console.log(elem.hasAttribute('value'));
console.log(elem.getAttribute('value'));
elem.removeAttribute('value', 33);
console.log(elem);
*/



/* 
<body>
   <p class="a">text</p>
   <p class="a">text</p>
   <p class="a">text</p>
   <p>text</p>
    <script src="elements actions/actions.js"></script>
</body>
*/
// let elems = document.getElementsByClassName('a');
// for(let i = 0; i < elems.length; i++) {
//    elems[i].innerHTML = '1';
// }

// querySelector, querySelectorAll принимают не id, а любой селектор и возвращает ссылку на одно найденное свойство
let elem = document.querySelector('.test');
console.log(elem.getAttribute('value'));
console.log(elem);

let elems = document.querySelectorAll(".a");
    for(let i = 0; i < elems.length; i++) {
        elems[i].innerHTML = '101';
    }
