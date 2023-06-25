// Домашнее задание
// Условия
// Пример 1
// В переменной minute лежит число от 0 до 59. 
// Определите в какую четверть часа попадает это число 
// (в первую, вторую, третью или четвертую).

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