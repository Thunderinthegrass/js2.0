


// 1  Напишите функцию t1, которая при нажатии кнопки выводит в out-1 переменную a1.
// let a1 = 8;
// function f1() {
// 	out.innerHTML = a1;
// }

// let out = document.querySelector('.out');
// let btn = document.querySelector('.btn').onclick = f1;


// 2  Изменим задачу 1. Сейчас она только выводит переменную в заранее заданный блок. Давайте сделаем так, чтобы функция, была более гибкой. Пусть теперь функция t2 возвращает переменную a2. Поскольку функция возвращает переменную, то имя функции со скобками (вызов функции) можно встраивать в выражения. Обратите внимание, как изменился вызов функции.
// let a2 = 8;
// function f2() {
// 	return a2;
// }

// document.querySelector('.btn').onclick = function() {
// 	document.querySelector('.out').textContent = f2();
// }


// 3. Наша предыдущая функция, сильно все еще зависима от внешних переменных. Давайте сделаем ее более универсальной. Пусть функция t3 принимает 2 параметра и выводит их произведение. Допишите код функции так, чтобы она возвращала произведение двух чисел, переданных ей в качестве параметра a, b. Протестируем функцию на двух примерах, с помощью кнопок b3-1 и b3-2.
// function t3(a,b) {
// 	return a * b;
// }

// document.querySelector('.btn-1').onclick = function() {
// 	document.querySelector('.out').textContent = t3(5,7);
// }

// document.querySelector('.btn-2').onclick = function() {
// 	document.querySelector('.out').textContent = t3(15,17);
// }


// 4 Напишите функцию t4 которая принимает ваш год рождения и вычисляет ваш возраст.
// function age(a,b) {
// 	return a - b;
// }

// let btn = document.querySelector('.btn').onclick = function() {
// 	document.querySelector('.out').textContent = age(2020,1989);
// }


// 5 Напишите функцию t5, которая принимает ваше имя в качестве параметра и возвращает строку Hello name, где name - принятое в качестве параметра имя.
// function f5(a, b) {
// 	return a + b;
// }

// let btn = document.querySelector('.btn').onclick = function() {
// 	document.querySelector('.out').textContent = f5('hello',' Roman');
// }


// 6 Напишите функцию t6, которая принимает 2 числа и возвращает случайное целое число от первого до второго принятого параметра.
// function f6(max,min) {
// 	return Math.floor(Math.random() * (max - min)) + min;
// }

// let btn = document.querySelector('.btn').onclick = function() {
// 	document.querySelector('.out').textContent = f6(20, 10);
// }


// 7
// просто хороший цвет #77E1D7. и ещё один: #F1C2FE;
// function cc() {

//   let r = Math.floor(Math.random() * (256));

//   let g = Math.floor(Math.random() * (256));

//   let b = Math.floor(Math.random() * (256));

//   let a = Math.random() * (1);

//   // let c = '#' + r.toString(16) + g.toString(16) + b.toString(16);
//   let d = 'rgba' + '(' + r + ',' + g + ',' + b + ',' + a + ')';

//   return document.querySelector('.out').style.backgroundColor = d;
// }

// let btn = document.querySelector('.btn').onclick = function() {
// 	cc();
// }

// let btn = document.querySelector('.btn').onclick = function() {
// 	document.querySelector('.out').textContent = cc();
// }


// 8
// Напишите функцию t8, которая принимает строку в качестве параметра и возвращает результат с очищенными пробелами в начале и вконце строки. Т.е. принимает _hello_ (где знак _ символизирует пробел), а возвращает hello. Для удаления пробелов - используйте trim.

function f8(hello = 'hello ') {
  return out.innerHTML = hello.trim();
}

let out = document.querySelector('.out');

let btn = document.querySelector('.btn').onclick = function() {
  f8();
}

// 10
function f9(one) {

}
