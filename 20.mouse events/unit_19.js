//код урока
let btn = document.querySelector('.btn').onclick = function (event) {
  console.log(event);
  console.log('click');
}

let btn1 = document.querySelector('.btn-1').ondblclick = function (event) {
  console.log(event);
  console.log('doubleclick');
}

document.querySelector('.btn-1').oncontextmenu = () => {
  console.log('oncontextmenu');
  return false;
}

let w = 50;
document.querySelector('.btn-2').onmousemove = () => {
  document.querySelector('.btn-2').style.width = w + 'px';
  w++;
}

document.querySelector('.btn-3').onmouseenter = () => {
  document.querySelector('.btn-3').style.background = 'red';
}

document.querySelector('.btn-3').onmouseleave = () => {
  document.querySelector('.btn-3').style.background = 'green';
}

document.querySelector('.btn-3').onmousedown = () => {
  document.querySelector('.btn-3').style.background = 'cyan';
}

document.querySelector('.btn-3').onmouseup = () => {
  document.querySelector('.btn-3').style.background = 'purple';
}

document.querySelector('.btn-4').onmouseover = () => {
  document.querySelector('.btn-4').style.background = 'red';
}

document.querySelector('.btn-4').onmouseout = () => {
  document.querySelector('.btn-4').style.background = 'green';
}




// Task 1 ============================================
/* Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-1.  */
document.querySelector('.div-1').onclick = t1;
document.querySelector('.div-1').ondblclick = hidden;
function t1() {
  document.querySelector('.out-1').innerHTML = document.querySelector('.div-1').innerHTML;
}
function hidden() {
  document.querySelector('.out-1').innerHTML = '';
}

// ваше событие здесь!!!

// Task 2 ============================================
/*  Добавьте на блок .div-2 событие клик и по клику запуск функции t2. Функция должна возвращать true или false в зависимости от того, нажата ли клавиша alt или нет в момент клика. Также, выводите на экран результат. Вывод осуществляется в out-2. */
let d2 = document.querySelector('.div-2')
d2.onclick = t2;

let out2 = document.querySelector('.out-2')

function t2(event) {
  let z = '';
  if (event.altKey) {
    out2.innerHTML = true;
  }
  else {
    out2.innerHTML = false;
  }
} 

// ваше событие здесь!!!


// Task 3 ============================================
/*  Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину блока на 5px. Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px. Ширину выводите в out-3. */

let w3 = 75;
let d3 = document.querySelector('.div-3');
let b = 10;
let g = 10;

let up = document.querySelector('.up');
let down = document.querySelector('.down');
let right = document.querySelector('.right');
let left = document.querySelector('.left');

up.onclick = toUp;
down.onclick = toDown;
right.onclick = toRight;
left.onclick = toLeft;

function toUp() {
  w3 = w3 + 5;
  b = b + 10;
  d3.style.height = `${w3}px`;
  d3.style.background = `#0000${b}`;
}

function toDown() {
  w3 = w3 - 5;
  d3.style.height = `${w3}px`;
}

function toRight() {
  w3 = w3 + 5;
  g = g + 10;
  d3.style.width = `${w3}px`;
  d3.style.background = `#00${g}00`;
}

function toLeft() {
  w3 = w3 - 5;
  d3.style.width = `${w3}px`;
}

// ваше событие здесь!!!


// Task 4 ============================================
/*  Добавьте на блок .div-4 событие двойной клик и по двойному клику запуск функции t4. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-4. */

let d4 = document.querySelector('.div-4');
d4.ondblclick = t4;
let out4 = document.querySelector('.out-4');

function t4() {
  out4.innerHTML = d4.textContent;
}

// ваше событие здесь!!!

// Task 5 ============================================
/*  Дан блок .div-5.active. Добавьте на него событие двойной клик, по которому удалется класс active если он есть и добавляется если такого класса нет. */
let d5 = document.querySelector('.div-5');
d5.ondblclick = t5;
let out5 = document.querySelector('.out-5');

function t5() {
  if (d5.classList.contains('active')) {
    d5.classList.remove('active');
  }
  else {
    d5.classList.add('active');
  }
}

// ваше событие здесь!!!

// Task 6 ============================================
/*  Дан блок .div-6 и список .ul-6. При двойном клике на блоке скрывайте .ul-6 еcли он показан и показывайте если скрыт. Скрытие и показ делайте через добавление - удаление класса .hide */

function t6() {

}

// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан блок .div-7. При клике правой кнопкой мыши на блоке добавляйте ему класс .active. При повторном клике - удаляйте. */

function t7() {

}

// ваше событие здесь!!!

// Task 8 ============================================
/*  Дано checkbox .ch-8. Повесьте на него событие onchange при котором на документе отключается клик правой кнопкой мыши если checkbox выбран и отключает если не выбран. */

function t8() {

}

// ваше событие здесь!!!


// Task 9 ============================================
/*  Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой мыши  - меняйте изображение на 2.png. Надеюсь вы догадаетесь изменить только src изображения? */

function t9() {

}

// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан блок .div-10. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. */

function t10() {

}

// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок .div-11. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. При уведении мыши - mouseleave - возвращайте исходное изображение. */

function t11() {

}

// ваше событие здесь!!!

// Task 12 ============================================
/*  Дан блок .div-12. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. */

// () => {

// }

// ваше событие здесь!!!


// Task 13 ============================================
/*  Дан блок .div-13. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. Добавьте ему событие mouseup - при отпускании мыши - удаляйте класс active. */

// () =>  {

// }

// () =>  {

// }
// ваше событие здесь!!!


// Task 14 ============================================
/*  Дан блок .div-14. При нажатии кнопки b-14 добавляйте к нему событие onclick - которое, при клике добавляем блоку div-14 класс active. */

function t14() {

}
document.querySelector('.b-14').onclick = t14;


// Task 15 ============================================
/*  Дан блок .div-15. Добавьте на него событие move. При каждом движении мыши увеличивайте число внутри на 1. */

function t15() {

}
// ваше событие здесь!!!


// Task 16 ============================================
/*  Дан блок .div-16. Добавьте на него событие move. При каждом движении мыши увеличивайте ширину блока на 1px. */

function t16() {

}
// ваше событие здесь!!!

// Task 17 ============================================
/*  Дано две кнопки - b-17_on и b-17_off. Напишите фукнции t17On и t17Off которые включают и отключают событие move в задании 16. */

function t17On() {

}
function t17Off() {

}
// ваше событие здесь!!!
// ваше событие здесь!!!

// Task 18 ============================================
/*  Дан блок div-18. Напишите фукнцию t18 которая выводит в данный блок его ширину при событии onmouseenter. */

function t18() {

}
// ваше событие здесь!!!

// Task 19 ============================================
/*  Дан блок div-19. Напишите фукнцию t19 которая выводит в данный блок его классы при событии onmouseout. */

function t19() {

}
// ваше событие здесь!!!


// Task 20 ============================================
/*  Дан элемент progress. Напишите фукнцию t20 которая увеличивает его value на 1 при каждом событии mousemove внутри progress. */

function t20() {

}
// ваше событие здесь!!!