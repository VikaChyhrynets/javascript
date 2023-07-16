'use strict'
// 1
/*
<body>
    <button type = 'button' onclick="console.log(Date())">Date</button>
    <script src="events/events.js"></script>
</body>
*/


// 2
/*
<body>
    <input type = 'text' id = 'number1'>
    <input type = 'text' id = 'number2'>
    <div id="answer"></div>
    <button type ='button' onclick="sum()">Count</button> 
    <script src="events/events.js"></script>
</body>

function sum() {
    // знак + означает, что мы берем value, не переведенное в Стринг
    const number1 = +document.querySelector('#number1').value;
    const number2 = +document.querySelector('#number2').value;
    const sum = number1 + number2;
    document.querySelector('#answer').textContent = sum;
}
*/


// 3
/* function changeColor() {
    document.body.style.backgroundColor = `rgb(${Math.round(Math.random()*255)},
    rgb(${Math.round(Math.random()*255)}, rgb(${Math.round(Math.random()*255)})`;
}
document.onclick = changeColor; */


// 4
/* function message() {
    // this - обращаемся к кнопке для которой вызван обработчик
    console.log(this.textContent);
}
// получим кнопки и сохраним ссылки на них в переменну btns
const btns = document.querySelectorAll('button');
// переберем кнопки и добавим к ним обработчик, используя onclick
btns.forEach(function(element) {
    element.onclick = message;
}); */


// 5
function changeBgColor() {
    document.body.style.backgroundColor = '#3f51b5';
}
document.removeEventListener('click', changeBgColor, false);