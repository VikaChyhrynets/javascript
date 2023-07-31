'use strict'
   
// Задача 1
// Повторите страницу по данному по образцу:

/* <body>
   <h1>Задача 1</h1>
    <button onclick="buttonClick()">Нажми на меня</button>
    <span id="elem">При нажатии на кнопку текст не поменяется</span> */


/* function buttonClick1(){
     let elem = document.getElementById('elem');
     elem.innerHTML = 'Ку-ку! А я жирный';
 } */

 // Задача 2
 // Повторите страницу по данному по образцу:
 function buttonClick2(){
 let elem = document.getElementById('elem');
 elem.outerHTML = 'Абзац превратился в h3!'
 }

 