const title = "name of the project";
const screens = "Простые, Сложные, Интерактивные";
const screenPrice = 27;
const rollBack = Math.random(1, 100);
const fullPrice = 500;
const adaptive = false;

console.log(typeof(title));
console.log(typeof(fullPrice));
console.log(typeof(adaptive));
console.log(screens.length);

console.log(`Стоимость верстки экранов ${screenPrice} рублей`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей`);

console.log(screens.toLowerCase().split(","));

console.log(`Процент отката посреднику за работу ${Math.round(fullPrice * (rollBack/100))}%`);