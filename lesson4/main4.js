'use strict'
let title = prompt('как называется ваш проект?', 'калькулятор верстки');
let screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные");
let screenPrice = +prompt('Сколько будет стоить данная работа?' , '10000');\
let adaptive = confirm("Нужен ли адаптив на сайте?");

let rollBack = 10 ;
let allServicePrices 
let fullPrice
let servicePercentPrice










function getAllServicePrices(num1, num2) {
  // return num1 + num2 
  let sum 

  for (let i = 0; i < 2 ; i++){
    sum += +prompt('Сколько это будет стоить?', "400, 800")
  }

  return sum
}

function getTitle(title) {
  return title.charAt(0).toUpperCase() + 
         title.slice(1).toLowerCase()
} 


function getFullPrice(num1, num2) {
  return num1 + num2
}

function getServicePercentPrices(num1) {
  return num1 - 200;
}

title = getTitle(title)
allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
fullPrice = getFullPrice(screenPrice, allServicePrices);
servicePercentPrice = getServicePercentPrices(fullPrice);
console.log(servicePercentPrice);

console.log("allServicePrices" ,allServicePrices)



const getRollbackMessage = function(fullPrice){
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
}

console.log(getRollbackMessage(fullPrice))

console.log("Стоимость верстки экранов " + screenPrice + "рублей и Стоимость разработки сайта " + fullPrice + "рублей")
// console.log(typeof(title));
// console.log(typeof(fullPrice));
// console.log(typeof(adaptive));
// console.log(screens.length);

// console.log(`Стоимость верстки экранов ${screenPrice} рублей`);
// console.log(`Стоимость разработки сайта ${fullPrice} рублей`);

// console.log(screens.toLowerCase().split(","));

// console.log(`Процент отката посреднику за работу ${Math.round(fullPrice * (rollBack/100))}%`);