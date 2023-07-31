'use strict'

// Homework
// Создайте объект city1 (var city1 = {}), укажите у него свойства name 
// (название города, строка) со значением «ГородN» и population 
// (населенность города, число) со значением 10 млн.
console.log('Task 1');
let city1 = {};
city1.name = "CityN";
city1.population = "10 mlns";
city1['full info'] = 'City name: ' + city1.name + ', City population: ' + city1.population;
console.log(city1['full info']);
console.log(city1);
getName() {
    return this.name;
}

// Создайте объект city2 через нотацию {name: "ГородM", population: 1e6}.
let city2 = {name: "ГородM", population: 1e6};
console.log(city2);

// Создайте у объектов city1 и city2 методы getName(), которые вернут 
// соответствующие названия городов.