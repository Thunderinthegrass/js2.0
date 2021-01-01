//True js события
function bgRed() {
  document.querySelector('.h2red').style.color = 'red';
}

document.querySelector('.h3red').onclick = function () {
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

document.querySelector('.h4').onclick = function () {
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

let d4 = document.querySelector('.div-4');
let btn4 = document.querySelector('.b-4');
let out4 = document.querySelector('.out-4');

btn4.addEventListener('touchstart', t4);

function t4() {
  out4.innerHTML += 'text';
}

// ваше событие здесь!!!

// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */

let btn5 = document.querySelector('.b-5');
btn5.onclick = t5;

function t5() {
  btn4.removeEventListener('touchstart', t4);
}

// ваше событие здесь!!!

// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */
btn4.addEventListener('touchend', t6);
let out6 = document.querySelector('.out-6');

function t6() {
  out6.innerHTML += 'touchend';
}

// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */

let d7 = document.querySelector('.div-7');
d7.addEventListener('touchstart', t7);

function t7() {
  d7.style.backgroundColor = '#ff0000';
}

// ваше событие здесь!!!

// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */

let d8 = document.querySelector('.div-8');
let a8 = ['red', 'green', 'blue', 'orange', 'pink', 'yellow'];

d8.addEventListener('touchstart', t8);

function t8() {
  let z = Math.floor(Math.random() * Math.floor(5));
  console.log(z);
  d8.style.backgroundColor = a8[z];
}

// ваше событие здесь!!!


// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */

function t9() {

}

// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */

let d10 = document.querySelector('.div-10');
d10.addEventListener('touchstart', t10);

function t10() {
  let z = d10.offsetWidth;
  // console.log(z);
  d10.style.width = `${z + 1}px`;
}

// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */

let d11 = document.querySelector('.div-11');
d11.addEventListener('touchmove', t11);
let out11 = document.querySelector('.out-11');

function t11(e) {
  let z = e.touches.length;
  out11.innerHTML = z;
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
const imagesBig = document.querySelector('.img-12-max');
let count = 1; // переменная, которая указывает на номер активного изображения в images

const next = document.querySelector('.next');
next.onclick = nextFunction;

const prev = document.querySelector('.prev');
prev.onclick = prevFunction;

function nextFunction() {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove('active-img');
  }

  if (count+1 == images.length) {
    count = 0;
  }
  else{
    count++;
  }
  
  console.log(`count = ${count}`);
  images[count].classList.add('active-img');

  let imageBigAttr = `img/${count+1}.png`;
  console.log(imageBigAttr);
  imagesBig.setAttribute('src', `img/${count+1}.png`);

}


function prevFunction() {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove('active-img');
  }

  if (count == 0) {
    count = images.length-1;
  }
  else{
    count--;
  }

  console.log(`count = ${count}`);
  images[count].classList.add('active-img');

  let imageBigAttr = `img/${count+1}.png`;
  console.log(imageBigAttr);
  imagesBig.setAttribute('src', `img/${count+1}.png`);

}


// ваше событие здесь!!!
