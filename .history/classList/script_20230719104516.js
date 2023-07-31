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

