//код урока
let out0 = document.querySelector('.out0');
document.querySelector('.inp').onkeypress = function(event) {
    // console.log(event);
    // console.log('charCode:' + event.charCode);
    // console.log('code:' + event.code);

    // console.log('key:' + event.key);
    let z = event.key;
    // console.log('keyCode:' + event.keyCode);
    // out0.textContent += event.key;
    if (z == 'Enter') {
        out0.textContent = document.querySelector('.inp').value;
    }
}

// let zz = 1;
// document.querySelector('.inp').onkeydown = function(event) {
//     out0.innerHTML = zz;
//     zz++;
// }

document.querySelector('.inp').onkeydown = rt;
function rt(event) {
    console.log('keyudown');
    console.log(event);
    console.log('charCode:' + event.charCode);
    console.log('code:' + event.code);

    console.log('key:' + event.key);
    console.log('keyCode:' + event.keyCode);
    out0.textContent += event.key;
}

document.querySelector('.inp').onkeyup = function(event) {
    console.log('keyup');
    console.log(event);
    console.log('charCode:' + event.charCode);
    console.log('code:' + event.code);

    console.log('key:' + event.key);
    console.log('keyCode:' + event.keyCode);
    out0.textContent += event.key;
}
//onkeypress срабатывает только на буквах, цифрах и символах, onkeydown и onkeyup на всех клавишах.


// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/
let inp1 = document.querySelector('.i-1');
let out1 = document.querySelector('.out-1');
inp1.onkeypress = t1;

function t1(event) {
    out1.innerHTML = event.key;
    return event.key;
}

// ваше событие здесь!!!

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

let inp2 = document.querySelector('.i-2');
let out2 = document.querySelector('.out-2');
inp2.onkeypress = t2;

function t2(e) {
    out2.innerHTML = e.keyCode;
    return e.keyCode;
}

// ваше событие здесь!!!


// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */

let w3 = 75;

let inp3 = document.querySelector('.i-3');
let out3 = document.querySelector('.out-3');
inp3.onkeypress = t3;

function t3(e) {
    let z = e.keyCode;
    if (z < 48 || z > 57) {
        out3.innerHTML = true;
    }
    else {
        out3.innerHTML = false;
    }
    console.log(z);
}

// ваше событие здесь!!!


// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */

function t4() {

}

// ваше событие здесь!!!

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

function t5() {

}

// ваше событие здесь!!!

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */

function t6() {

}

// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */

function t7() {
    const a7 = [];

}

// ваше событие здесь!!!

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */

function t8() {

}

// ваше событие здесь!!!


// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */

function t9() {

}

// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */

function t10() {

}

// ваше событие здесь!!!

// Task 11 ============================================
/*  Проект. 
1. Выполните в html верстку клавиш клавиатуры. Сверстайте – блок цифровых клавиш от 1 до 0. И ряд клавиш q – p. Добавьте клавишу левый shift, левый  alt, левый ctrl,  пробел, enter.
2. Добавьте на input .i-11 событие onkeypress или onkeyup или onkeydown ( по вашему выбору). Когда событие происходит ( ввод символа в input) необходимо подсветить ( добавить класс active) клавише с таким символом. Со всех остальных клавиш – удалить класс active.
3. Если вводится следующий символ – повторить удаление active и подсветить клавишу с введенным символом.
4. Ограничения проекта – тестируются только указанные клавиши в латинской раскладке. Комбинации клавиш не тестируются. Т.е. нажиматься shift+A, ctrl+shift – не будут. Все символы вводятся в нижнем регистре.
*/

function t11() {

}

// ваше событие здесь!!!
