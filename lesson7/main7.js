'use strict'


const appData = {
  title: '',
  screens: '',
  screenPrice: 0,
  adaptive: false,
  rollBack: 10 ,
  allServicePrices: 0, 
  fullPrice: 0,
  servicePercentPrice: 0,
  service1: '',
  service2: '',
  asking : function(){
    appData.title = prompt('как называется ваш проект?', 'калькулятор верстки');
    appData.screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные");

    do {
      appData.screenPrice = prompt('Сколько будет стоить данная работа?' );
    } while (!appData.isNumber(appData.screenPrice))

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },
  isNumber : function(num){
    return !isNaN(parseFloat(num)) && isFinite(num)
  },
  getAllServicePrices: function() {
    let sum = 0;

    for (let i = 0; i < 2 ; i++){
      let price = 0;

      if (i === 0){
        appData.service1 = prompt("Какой дополнительный тип услуги нужен? ", "Usluga 1")
      }else if(i === 1){
        appData.service2 = prompt("Какой второй дополнительный типо услуги нужен? ", " Usluga 2")
      }

      do {
        price = prompt("Сколько это будет стоить?")
      } while (!appData.isNumber(price))
      
      sum += +price
    }
    
    return sum
  },
  getTitle: function(title) {
    return title.charAt(0).toUpperCase() + 
          title.slice(1).toLowerCase()
  },
  getFullPrice: function() {
    return +appData.screenPrice + appData.allServicePrices
  },
  getServicePercentPrices: function() {
    return appData.fullPrice - (appData.fullPrice * (appData.rollBack / 100))
  },
  getRollbackMessage: function(fullPrice){
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
  },
  logger: function(){
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);

    for(let item in appData){
      console.log(item)
    }
  },
  start: function(){
    appData.asking()
    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice();
    appData.servicePercentPrice = appData.getServicePercentPrices();
    appData.logger()
  }
}

appData.start()
