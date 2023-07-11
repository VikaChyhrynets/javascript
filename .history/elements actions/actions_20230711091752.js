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
let elems = document.getElementsByTagName('p');
console.log(elems);