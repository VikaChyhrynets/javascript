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

    /* №3
    <p>2</p>
    <p>4</p>
    <p>6</p> */

    // Даны абзацы с числами. По нажатию на абзац в нем должен появиться 
    //квадрат числа, которое он содержит.

    let paragraphs = document.querySelectorAll('p');

  paragraphs.forEach(function(paragraph) {
    paragraph.addEventListener('click', function() {
        let number = parseInt(this.textContent);
        let square = number * number;
        this.textContent = square;
    });
  });