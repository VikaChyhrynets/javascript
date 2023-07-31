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
        */
       document.body.addEventListener('click', ()=> {
        console.log('Body click event in capture phase');
       }, true)