//True js события
function bgRed() {
  document.querySelector('.h2red').style.color = 'red';
}

document.querySelector('.h3red').onclick = function() {
  document.querySelector('.h3red').style.color = 'red';
  console.log(this);//выведет элемент h3
}

function hello() {
  console.log(this);
  console.log('hello');
}

function hi() {
  console.log(this);
  console.log('hi');
}

document.querySelector('.h4').onclick = function() {
  hello();
  hi();
}
//не выведет h4, т.к. потерян контекст, потому что событие onclick привязано к анонимной функции, а не к функциям hi и hello.

//Для того, чтоб добавлять события без привязки к DOM-элементу, была придумана команда addEventListener.

function rotateElem() {
  document.querySelector('.h5').classList.toggle('rotate');
  console.log('Привет');
  console.log(this);
}

function greenColor() {
  document.querySelector('.h5').classList.toggle('green');
  console.log('Привет');
  console.log(this);
}

document.querySelector('.h5').addEventListener('click', rotateElem);

document.querySelector('.h5').addEventListener('click', greenColor);

document.querySelector('.h5').removeEventListener('click', greenColor);//удаляет событие с элемента
//теперь можно на элемент вешать сколько угодно событий без потери контекста. И это более лёгкий способ с точки зрения использования памяти

//также его можно повесить на не DOM-элементы, например на transition-end?
//-----------------------

//Код урока

document.querySelector('.block-lesson').addEventListener("touchstart", myTouch);

document.querySelector('.block-lesson').addEventListener("touchend", myTouchEnd);

document.querySelector('.block-lesson').addEventListener("touchmove", myTouchMove);

function myTouch(e) {
  console.log(e);
  document.querySelector('.out-l').innerHTML += 'Привет' + ' ';
}

function myTouchEnd(e) {
  console.log(e);
  document.querySelector('.out-l').innerHTML += 'Пока' + ' ';
}

function myTouchMove(e) {
  console.log(e);
  document.querySelector('.out-l').innerHTML += 'Стой' + ' ';
}

// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */
let d1 = document.querySelector('.div-1');
d1.addEventListener("touchstart", t1);

let out1 = document.querySelector('.out-1');

function t1(e) {
  out1.innerHTML += 'Привет';
}

// ваше событие здесь!!!

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */

let d2 = document.querySelector('.div-2');
d2.addEventListener("touchstart", t2);

let out2 = document.querySelector('.out-2');

let z2 = 1;
function t2(e) {
  out2.innerHTML = z2;
  z2++;
}

// ваше событие здесь!!!


// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */

let d3_1 = document.querySelector('.div-3_1');
let d3_2 = document.querySelector('.div-3_2');
d3_1.addEventListener("touchstart", t3);
d3_2.addEventListener("touchstart", t3);

let out3 = document.querySelector('.out-3');

function t3(e) {
  let z = '';
  z = e.srcElement.className;
  console.log(e);
  if (z == 'div-3_1 block') {
    out3.innerHTML = 1;
  }
  else if (z == 'div-3_2 block') {
    out3.innerHTML = 2;
  }
}

// ваше событие здесь!!!


// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */

function t4() {

}

// ваше событие здесь!!!

// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */

function t5() {

}

// ваше событие здесь!!!

// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

function t6() {

}

// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */

function t7() {

}

// ваше событие здесь!!!

// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */

function t8() {

}

// ваше событие здесь!!!


// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */

function t9() {

}

// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */

function t10() {

}

// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */

function t11() {

}

// ваше событие здесь!!!

// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12.
<p>Изучите html код внутри div-12-wrapper.</p>
<p>1. Добавьте на кнопку nex событие click, touch так, чтобы при событии запускалась функция nextFunction и активным становилось изображение следующее за выделенным классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>2. Добавьте на кнопку prev событие click, touch так, чтобы при событии запускалась функция prevFunction и активным становилось изображение до выделенного классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>3. Учтите краевые эффекты - когда мы доходим до конца или начала, то нажатие кнопки должно приводить к перемещению рамки в начало или конец изображений.</p>
<p>4. Добавьте кнопку reset (функция resetFunction), нажатие которой сбрасывает активное изображение на нулевое. </p>
<p>5. Добавьте во все действия следующее - в изображении img-12-max заменяется src на активную. Т.е. произошло событие - заменилась главная картинка.</p>
*/

const images = document.querySelectorAll('.img-12-min');
let count = 0; // переменная, которая указывает на номер активного изображения в images

const next = document.querySelectorAll('.next');
next.onclick = nextFunction;

const prev = document.querySelectorAll('.prev');
prev.onclick = prevFunction;

function nextFunction() {

}

function prevFunction() {

}


// ваше событие здесь!!!
