'use strict'

// Homework
// Создайте объект city1 (var city1 = {}), укажите у него свойства name 
// (название города, строка) со значением «ГородN» и population 
// (населенность города, число) со значением 10 млн.
// Создайте объект city2 через нотацию {name: "ГородM", population: 1e6}.
// Создайте у объектов city1 и city2 методы getName(), которые вернут 
// соответствующие названия городов.

console.log('Task 1');
let city1 = {
    name: 'CityN',
    population: 10e6
}
function getName() {
    return this.name;
}
city1['full info'] = 'City name: ' + city1.name + ', City population: ' + city1.population;
console.log(city1['full info']);
console.log(city1);

let city2 = {name: "ГородM", population: 1e6};
function getName() { 
    return this.name;
}
console.log(city2);



// Создайте массив d1 с числовыми величинами 45,78,10,3.  
// Добавьте в массив d1 еще одно число ( d1[7] = 100). 
// Выведите в консоль весь массив и его элементы с индексами 6 и 7.
console.log('Task 2');
