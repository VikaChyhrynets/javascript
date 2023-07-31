'use strict'
// получаем ссылку на элемент
let elem = document.getElementById('Hello pretty world!');
console.log(elem);
// поменять знаечение в теге р:
//elem.innerHTML = '100500';
//elem.innerHTML = '<strong>101501</strong>';

// перезаписать не только внутренний текст тега, но и сам тег
elem.innerHTML = '<strong>101501</strong>';
console.log(elem);