'use sctrict'


const gameBot = (function() {
    // Замыкание - случайное число хранится здесь
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    console.log('Загаданное число (для теста):', secretNumber);
    
    // Рекурсивная функция для игры
    function guessNumber() {
        const userNumber = +prompt('Угадай число от 1 до 100');
        
        // Сравниваем с загаданным числом
        if (userNumber === secretNumber) {
            alert('Поздравляю, Вы угадали!!!');
        } else if (userNumber > secretNumber) {
            alert('Загаданное число меньше');
            guessNumber(); // Рекурсивный вызов
        } else {
            alert('Загаданное число больше');
            guessNumber(); // Рекурсивный вызов
        }
    }
    
    // Возвращаем функцию для начала игры
    return guessNumber;
})();

// Запуск игры
gameBot();

