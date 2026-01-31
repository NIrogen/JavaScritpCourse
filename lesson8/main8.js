'use strict'


const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: false,
  rollBack: 10 ,
  allServicePrices: 0, 
  fullPrice: 0,
  servicePercentPrice: 0,
  services: {},
  asking : function(){
    do{
      appData.title = prompt('как называется ваш проект?')
    }while (!appData.isText(appData.title))
    
    
    for ( let i = 0; i < 2 ; i++){
      let name = ''
      do{
        name = prompt('Какие типы экранов нужно разработать?');
      } while(!appData.isText(name))

      let price = 0

      do {
        price = prompt('Сколько будет стоить данная работа?' )
      } while (!appData.isNumber(price))

      appData.screens.push({id: i, name: name, price: price})
      
    }

    for (let i = 0; i < 2 ; i++){
      let name = ''
      do{
        name = prompt("Какой дополнительный тип услуги нужен? ");
      } while(!appData.isText(name))

      let price = 0;

      do {
        price = prompt("Сколько это будет стоить?")
      } while (!appData.isNumber(price))
      
      appData.services[name] = +price 
    }


    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },
  addPrices : function(){
    for (let screen of appData.screens){
      appData.screenPrice += +screen.price
    }
    for(let key in appData.services){
      appData.allServicePrices += appData.services[key]
    }
  },

  isNumber : function(num){
    return !isNaN(parseFloat(num)) && isFinite(num)
  },

  isText : function(value){
    if (typeof value !== 'string') return false
      return /[а-яА-Яa-zA-Z]/.test(value) // есть хотя бы одна буква
  },

  getTitle: function() {
    appData.title = appData.title.charAt(0).toUpperCase() + 
          appData.title.slice(1).toLowerCase()
  },

  getFullPrice: function() {
    appData.fullPrice = +appData.screenPrice + appData.allServicePrices
  },

  getServicePercentPrices: function() {
    appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollBack / 100))
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
    console.log(appData.screens)

    // for(let item in appData){
    //   console.log(item)
    // }
  },
  start: function(){
    appData.asking()
    appData.addPrices()
    appData.getFullPrice()
    appData.getServicePercentPrices()
    appData.getTitle()
    appData.logger()
  }
}

appData.start()
