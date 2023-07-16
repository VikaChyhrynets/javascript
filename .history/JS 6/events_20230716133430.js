'use strict'

/* №1 
    <input type="text" value="1">
    <input type="text" value="2">
    <input type="text" value="3">
    <p id="test"></p> --></input> */
   
    //Привяжите всем инпутам следующее событие - по потере фокуса каждый 
    //инпут выводит свое value в абзац с id="test"

 /*let inputs = document.querySelectorAll('input[type="text"]');
let testParagraph = document.getElementById('test');

inputs.forEach(function(input) {
  input.addEventListener('blur', function() {
    testParagraph.textContent = this.value;
  });
});  */

/* №2
    <input type="text" value="1">
    <input type="text" value="2">
    <input type="text" value="3"> */
    
    // Для всех инпутов сделайте так, чтобы они выводили свой value алертом 
    // при нажатии на любой из них, но только по первому нажатию. Повторное 
    // нажатие на инпут не должно вызывать реакции.

    // FIRST POSSIBLE SOLUTION

    /* let inputs = document.querySelectorAll('input[type="text"]');

    inputs.forEach(function(input) {
      let isFirstClick = true;
      
      input.addEventListener('click', function() {
        if (isFirstClick) {
          alert(this.value);
          isFirstClick = false;
        }
      });
    }); */

    // SECOND POSSIBLE SOLUTION

    let inputs = document.querySelectorAll('input[type="text"]');
    