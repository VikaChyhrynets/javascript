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
    
  /*  let paragraphs = document.querySelectorAll('p');

  paragraphs.forEach(function(paragraph) {
    paragraph.addEventListener('click', function() {
        let number = parseInt(this.textContent);
        let square = number * number;
        this.textContent = square;
    });
  }); */


  /* #4
  <input type="text" data-length="4">
  <input type="text" data-length="7">
  <input type="text" data-length="9"> */

  // Даны инпуты. Сделайте так, чтобы все инпуты по потери фокуса проверяли 
  // свое содержимое на правильное количество символов. Сколько символов 
  // должно быть в инпуте, указывается в атрибуте data-length. Если вбито 
  // правильное количество, то граница инпута становится зеленой, если 
  // неправильное - красной.

  let inputs = document.querySelectorAll('input[data-length]');

  inputs.forEach(function(input) {
    let expectedLength = parseInt(input.getAttribute('data-length'));
  
    input.addEventListener('blur', function() {
      let inputLength = this.value.length;
  
      if (inputLength === expectedLength) {
        this.style.border = '2px solid green';
      } else {
        this.style.border = '2px solid red';
      }
    });
  });