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
d1.splice(d1[7] = 100);
console.log(d1);
console.log(d1[6], d1[7]);