'use strict'
   
// Задача 1
// Повторите страницу по данному по образцу:

/* <body>
   <h1>Задача 1</h1>
    <button onclick="buttonClick()">Нажми на меня</button>
    <span id="elem">При нажатии на кнопку текст не поменяется</span>
    </body> */
/* function buttonClick1(){
     let elem = document.getElementById('elem');
     elem.innerHTML = 'Ку-ку! А я жирный';
 } */

 // Задача 2
 // Повторите страницу по данному по образцу:

 /* <body>
   <h1>Задача 2</h1>
    <button onclick="buttonClick2()">Нажми на меня</button>
    <span id="elem">При нажатии на кнопку текст не поменяется</span> 
    </body> 
/*    function buttonClick2(){
        let elem = document.getElementById('elem');
        elem.innerHTML = 'Абзац превратился в h3!'
    } */

// Задача 3
/* <body>
   <h1>Задача 3</h1>
    <button onclick="buttonClick3()">Нажми на меня</button>
    <span id="elem">При нажатии на кнопку абзац станет h3, но текст останется</span> 
</body> */
/*    function buttonClick3(){
        let elem = document.getElementsByTagName('span')[0];
        elem.outerHTML = '<h3>При нажатии на кнопку абзац станет h3, но текст останется</h3>'
} */

// Задача 5
// Повторите страницу по данному по образцу (при нажатии на кнопку текст в каждом абзаце поменяется на порядковый номер абзаца)
/* <body>
   <h1>Задача 5</h1>
   <p>Абзац с текстом</p> 
   <p>Абзац с текстом</p> 
   <p>Абзац с текстом</p> 
   <p>Абзац с текстом</p> 
   <p>Абзац с текстом</p> 
   <p>Абзац с текстом</p> 
   <p>Абзац с текстом</p> 
   <p>Абзац с текстом</p> 
   
   <button onclick="buttonClick5()">Нажми на меня!</button>
</body> */
/* function buttonClick5(){
    let elems = document.querySelectorAll("p");
    for(let i=0; i<elems.length; i++) {
        elems[i].innerHTML = (i);
    }
} */
