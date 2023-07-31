'use strict'
/*
<body>
    <button id="buttonId">Press</button> 
    <script src="classList/script.js"></script>
</body>
document.querySelector('#buttonId').addEventListener('click', ()=> console.log('Click!!!'));
*/

/* 
<div id="buttons">
        <button class="buttonClass">Press</button>
        <button class="buttonClass">Press</button>
        <button class="buttonClass">Press</button>
        </div>
        
const buttons = document.getElementsByClassName('buttonClass');
for (const button of buttons) {
    button.addEventListener('click', ()=> console.log('Clicked!!!'));
}
*/

/*
<div id="buttons">
        <button class="buttonClass">Push</button>
        </div>
       document.body.addEventListener('click', ()=> {
        console.log('Body click event in capture phase');
       }, true);
       */

/* 
<div id="buttons">
        <button class="buttonClass">Press</button>
        <button class="buttonClass">Press</button>
        <button class="buttonClass">Press</button>
        </div>
        
       document.getElementById('buttons').addEventListener('click', event => {
        if (event.target.className === 'buttonClass') {
            console.log('Click');
        }
       }); */

       
       /* 
       <p id="elem" class="aaa bbb ccc"></p> 
       let elem = document.querySelector('#elem');
       let length = elem.classList.length;
       console.log(length);

       let elem = document.querySelector('#elem');
       let classNames = elem.classList;

       for (let className of classNames) {
            document.write(className + '<br>')
       }
       

       let elem = document.querySelector('#elem');
       elem.classList.add('jjj')      
       
      
       let elem = document.querySelector('#elem');
       elem.classList.remove('bbb')

       let elem = document.querySelector('#elem');
       let contains = elem.classList.contains('bbb');
       console.log(contains);
       

       let elem = document.querySelector('#elem');
       elem.classList.toggle('bbb');
       elem.classList.toggle('ddd');
       */

/*
let now = new Date();
console.log(now);

let newNow = new Date().toLocaleDateString();
console.log(newNow);

let newNow2 = new Date().toLocaleTimeString();
console.log(newNow2);
*/

/* 
let now = new Date();
let 
hour = now.getHours(),
minute = now.getMinutes(),
second = now.getSeconds(),
message = '';

if (hour <= 6) {
    message = 'Good time of the day';
} else if (hour <= 12) {
    message = 'Good morning';
} else if (hour <= 18) {
    message = 'Good afternoon';
} else {
    message = 'Good evening';
}

minute = (minute < 10) ? '0' + minute : minute;
second = (second < 10) ? '0' + second : second;
hour = (hour < 10) ? '0' + hour : hour;

message += ", it's " + hour + ':' + minute + ':' + second;

console.log(message);
*/

/*
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let now = new Date();
console.log('Today it is ' + days[now.getDay()]);
*/

/*
let newDate = new Date(2023, 6, 20, 18, 43, 59);

console.log(newDate.toString());
console.log(newDate.toDateString());
console.log(newDate.toTimeString());
console.log(newDate.toLocaleString());
console.log(newDate.toLocaleDateString());
console.log(newDate.toLocaleTimeString());
console.log(newDate.toUTCString());
console.log(newDate.toISOString());
*/

/*
let date1 = new Date("2023-07-20");
console.log(date1);
let date2 = new Date("2023-07-20T18:10");
console.log(date2);
let date3 = new Date("2023-07-20T18:10+03:00");
console.log(date3);
*/


// setTimeout() - выполняет вызов ф-ции всего 1 раз
// setInterval() - выполняет вызов ф-ции постоянно через указанный интервал времени
/*
function myFunc() {
    console.log('after 4 seconds')
}
window.setTimeout(myFunc, 4000);
console.log('HOHOHO!!!')
*/

function sayHello(name) {
    console.log(`Hello-hello, ${name}!`);
}
setTimeout(sayHello, 3000, 'Vika')