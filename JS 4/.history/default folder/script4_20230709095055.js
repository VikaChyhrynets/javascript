'use strict'

// Homework
// Создайте объект city1 (var city1 = {}), укажите у него свойства name 
// (название города, строка) со значением «ГородN» и population 
// (населенность города, число) со значением 10 млн.
// Создайте объект city2 через нотацию {name: "ГородM", population: 1e6}.
// Создайте у объектов city1 и city2 методы getName(), которые вернут 
// соответствующие названия городов.

console.log('Tasks 1-5');
let city1 = {
    name: 'CityN',
    population: 10e6,
    getName: function() {
        return this.name;
    }, 
    exportStr: function() {
        return "name=" + this.name + "\npopulation=" + this.population + "\n";
},
getCity: getObj
};


let city2 = {
    name: "CityM", 
    population: 1e6,
    getName: function() { 
    return this.name;
},
exportStr: function() {
    return "name=" + this.name + "\npopulation=" + this.population + "\n";
},
getCity: getObj
}
console.log(city2.getName());

function getObj() {
    return this;
};

console.log(city1.getName());  
console.log(city2.getName());  

console.log(city1.exportStr());  
console.log(city2.exportStr());  

console.log(city1.getCity());
console.log(city2.getCity());



// Создайте массив d1 с числовыми величинами 45,78,10,3.  
// Добавьте в массив d1 еще одно число ( d1[7] = 100). 
// Выведите в консоль весь массив и его элементы с индексами 6 и 7.
console.log('Task 6');
let d1 = [45,78,10,3];
d1[7] = 100;
console.log(d1);
console.log(d1[6]);
console.log(d1[7]);

// Создайте массив d2 с числовыми величинами 45,78,10,3. 
// Посчитайте в переменную sum2 сумму чисел в нем, при помощи цикла for.
console.log('Task 7');

let d2 = [45,78,10,3];
let sum2 = 0;
for (let i = 0; i < d2.length; i++) {
    sum2 += d2[i];
}
console.log('Sum of array 2 elements: ' + sum2);

// Создайте массив d3 с числовыми величинами 45,78,10,3. 
// Добавьте в массив d3 еще одно число (например, d[7] = 100) 
// Посчитайте в переменную sum3 сумму чисел в нем, при помощи цикла for/in.
console.log('Task 8');

let d3 = [45,78,10,3];
d3[7] = 100;
let sum3 = 0;
for (let y = 0; y < d3.length; y++) {
    if (typeof d3[y] === 'number') {
    sum3 += d3[y];
    }
}
console.log('Sum of array 3 elements: ' + sum3);

// Создайте массив d4 с числовыми величинами 45,78,10,3. 
// Напишите функцию сортировки my(a,b), которая при вызове d4.sort(my) 
// отсортирует элементы массива по убыванию чисел. Вызовите d4.sort(my)
console.log('Task 8');

let d4 = [45,78,10,3];
function sorting(a, b) {
    return b - a;
}

d4.sort(sorting);