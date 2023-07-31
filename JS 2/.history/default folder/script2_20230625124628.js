// Домашнее задание
// Условия
// Пример 1
// В переменной minute лежит число от 0 до 59. 
// Определите в какую четверть часа попадает это число 
// (в первую, вторую, третью или четвертую).
console.log('task 1:');
let minute = 30;
if (minute > 0 && minute <= 15) {
    console.log("It's 1st quarter of hour");
} else if (minute > 16 && minute <= 30) {
    console.log("It's 2d quarter of hour");
} else if (minute > 31 && minute <= 45) {
    console.log("It's 3d quarter of hour");
} else if (minute > 46 && minute <= 60) {
    console.log("It's 4th quarter of hour");
}
else {
    console.log("The value exceeds hour values!");
}



// Пример 2
// Переменная lang может принимать 2 значения: 'ru' 'en'. 
// Если она имеет значение 'ru', то в переменную arr 
// запишем массив дней недели на русском языке, 
// а если имеет значение 'en' – то на английском. 
// для ru - arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
// для en - arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
console.log('task 2:');
let lang = 'en'; //|| 'ru';
let arr;
if (lang == 'ru') {
    console.log(arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']);
} else if (lang = 'en') {
    console.log(arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn']);
}



// Пример 3 
// Напишите код, который предлагает пользователю ввести целое 
// число. Нужно вывести на экран сколько в этом числе цифр, 
// а также положительное оно или отрицательное. Например, 
// "Число " + num + " однозначное положительное". 
// Достаточно будет определить, является ли число однозначным, 
// двузначным или трехзначным и более.
console.log('task 3:');
let input = prompt('Enter your value: ')
if (num > 0) {
    sign = "положительное";
  } else if (num < 0) {
    sign = "отрицательное";
  } else {
    sign = "нулевое";
  }
  console.log("Число " + num + " " + digitCount + "-значное " + sign + ".");



// Пример 4
// Создаются переменные red и yellow для красного и 
// жёлтого сигналов светофора соответственно.
// В том случае, если переменным red или yellow присвоены 
// значения "нет", горит зелёный сигнал светофора и 
// выводиться сообщение, разрешающее переходить дорогу.
console.log('task 4:');
let red = 'no';
let yellow = 'no';
if (red == 'yes' || yellow == 'yes') {
    console.log("Let green light turn on. Pedestrians can cross the road!");
} else {
    console.log("It's forbidden to cross the road!")
}




// Циклы console.log('task 5');
// Пример 5
// Выведите столбец чисел от 1 до 12.
console.log('task 5:');
let num1;
for(num1 = 1; num1 <=12; num1++) {
    console.log(num1);
}



// Пример 6
// Выведите столбец чисел от 5 до 13.
console.log('task 6:');
let num2;
for(num2 = 5; num2 <=13; num2++) {
    console.log(num2);
}



// Пример 7
// Выведите столбец четных чисел в промежутке от 0 до 16.
console.log('task 7:');
for(let num3 = 0; num3 <=16; num3++) {
    if(num3%2 != 0) continue;
    console.log(num3);
}



// Пример 8 
// С помощью цикла найдите сумму чисел arr = [2,5,8,3,6]
console.log('task 8:');
let arr2 = [2,5,8,3,6];
let result = 0;
for(let i = 0; i < arr2.length; i++) {
    result = result + arr2[i];
} console.log(result);