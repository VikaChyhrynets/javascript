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
*/
function sum() {
    const number1 = +document.querySelector('#number1').value;
    const number2 = +document.querySelector('#number2').value;
}