const title = prompt('как называется ваш проект?');
const screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные");
const screenPrice = Number(prompt('Сколько будет стоить данная работа?'));
const rollBack = Math.random(1, 100);
const adaptive = Boolean(prompt("Нужен ли адаптив на сайте?"));

const service1 = prompt('Какой дополнительный тип услуги нужен?', "service1, service2");
const servicePrice1 = Number(prompt('Сколько это будет стоить?', "400, 800"));
const service2 = prompt('Какой дополнительный тип услуги нужен?', "service1, service2");
const servicePrice2 = Number(prompt('Сколько это будет стоить?', "400, 800"));

const fullPrice = screenPrice + servicePrice1 + servicePrice2;

const servicePercentPrice = Number(fullPrice) - 200;
console.log(servicePercentPrice);

if (fullPrice > 30000) {
  console.log("Даем скидку в 10%");
} else if (fullPrice > 15000 || fullPrice < 30000 ) {
  console.log("Даем скидку в 5%");
} else if (fullPrice > 0 || fullPrice < 15000) {
  console.log("Скидка не предусмотрена(");
} else if(fullPrice < 0) {
  console.log("Что-то пошло не так(");
} else{
  console.log("ты как к этому пришел");
}



// console.log(typeof(title));
// console.log(typeof(fullPrice));
// console.log(typeof(adaptive));
// console.log(screens.length);

// console.log(`Стоимость верстки экранов ${screenPrice} рублей`);
// console.log(`Стоимость разработки сайта ${fullPrice} рублей`);

// console.log(screens.toLowerCase().split(","));

// console.log(`Процент отката посреднику за работу ${Math.round(fullPrice * (rollBack/100))}%`);