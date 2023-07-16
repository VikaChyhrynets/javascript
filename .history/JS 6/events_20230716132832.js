'use strict'

/* №1 
    <input type="text" value="1">
    <input type="text" value="2">
    <input type="text" value="3">
    <p id="test"></p> --></input> */
   
    //Привяжите всем инпутам следующее событие - по потере фокуса каждый 
    //инпут выводит свое value в абзац с id="test"

 let inputs = document.querySelectorAll("text");
let testParagraph = document.getElementById('test');

inputs.forEach(function(input) {
  input.addEventListener('blur', function() {
    testParagraph.textContent = this.value;
  });
}); 