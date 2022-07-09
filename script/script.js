/*
1. Получить данные о высоте и ширине экрана пользователя - done
2. Обновлять эти данные раз в секунду - done
3. Вывести эти данные на экран в соответсвующие спаны - done
*/

let screenHeight;
let screenWidth;
var spanHeight = document.querySelector('#height');
var spanWidth = document.querySelector('#width');

setInterval(function() {
    screenHeight = window.innerHeight;
    screenWidth = window.innerWidth;
    
    spanHeight.innerText = screenHeight;
    spanWidth.innerText = screenWidth;
}, 100);