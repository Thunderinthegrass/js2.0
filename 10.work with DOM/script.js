// let one = document.querySelector('.one');

// one.style.color = '#3AE2CE';
// console.log(one.style);

// one.classList.add('two', 'three');
// one.classList.remove('three');

// let btnLesson = document.querySelector('.btn-lesson').onclick = function() {
//   this.classList.toggle('active');
// }

// // атрибуты
// // console.log(one.getAttribute('data')); //считываем атрибут
// console.log(document.querySelectorAll('link')[0].getAttribute('href')); //выводим значение атрибута в консоль
// document.querySelectorAll('link')[0].setAttribute('href', 'style1.css'); //меняем значение атрибута href первого в массиве тега link
// one.setAttribute('data-name', 8);

// // ----------------------------------------------------------------
// //счётчик бензина
// let result = document.querySelector('.result');
// let brand = document.querySelectorAll('.brand');

// for (let i = 0; i < brand.length; i++) {
//   brand[i].onclick = function() {
//     let litres = document.querySelector('.litres').value;
//     let brandPrice = this.getAttribute('data');
//     result.innerHTML = brandPrice * litres;
//   }
// }

// // создание элементов---------------
// let element = document.createElement('div');// создаём элемент
// element.setAttribute('class', 'circle');// добавляем ему атрибут class со значением circle, то есть class="circle"
// element.classList.add('border');// добавляем ему класс border
// let wrap = document.querySelector('.element-wrapper').appendChild(element);// с помощью метода appendChild добавляем элемент внутрь элемента wrap

// Задания-----------------------------------
// 1
// Добавьте кнопку .b-1, которая запускает функцию f1. Функция присваивает блоку .out-1 ширину 200px, высоту 40px.
// let btn = document.querySelector('.btn').onclick = function() {
//   let out = document.querySelector('.out');
//   out.style.width = '200px';
//   out.style.height = '40px';
// }

// Task 2.
// По нажатию кнопки b-2 запускайте функцию f2, которая присваивает блоку out-2 класс .bg-2.
// let btn = document.querySelector('.btn').onclick = function() {
//   let out = document.querySelector('.out').classList.add('bg-2');
// }


// Task 3.
// По нажатию кнопки b-3 запускайте функцию f3, которая удаляет у блока out-3 класс .bg-3
// let btn = document.querySelector('.btn').onclick = function() {
//   let out = document.querySelector('.out').classList.remove('out-1');
// }



// Task 4.
// По нажатию кнопки b-4 запускайте функцию f4, которая делает toggle класса bg-4 для блока out-4.
// let btn = document.querySelector('.btn').onclick = function() {
//   let out = document.querySelector('.out').classList.toggle('bg-3');
// }


// Task 5.
// По нажатию b-5 запускайте функцию f5, которая проверяет наличие класса bg-4 у блока out-4 (да, именно bg-4 у out-4 ). Результат - true или false, выводите в out-5.
// let btn = document.querySelector('.btn').onclick = function() {
//   let out = document.querySelector('.out');
//   let a = out.classList.contains('bg-4');
//   out.innerHTML = a;
// }


// Task 6.
// По нажатию b-6 запускайте функцию f6, которая выводит в out-6 количество параграфов с классом p-6.
// let btn = document.querySelector('.btn').onclick = function() {
//   let out = document.querySelector('.out');
//   let p = document.querySelectorAll('p');
//   let y = 0;
//   for (let k = 0; k < p.length; k++) {
//     let z = p[k].classList.contains('south');
//     if (z == true) {
//       y = y + 1;
//     }

//     out.innerHTML = 'элементов < p ></ p > на странице ' + k + ' штук, из них с классом south ' + y;

//   }
// }


// Task 7.
// По нажатию кнопки b-7 запускайте функцию f7, которая присваивает блокам out-7 класс .bg-7. Обратите внимание, что данных блоков больше одного, следовательно нужен цикл.
// let btn = document.querySelector('.btn');
// btn.onclick = function() {
//   let p = document.querySelectorAll('p');
//   for (let k = 0; k < p.length; k++) {
//     p[k].classList.add('bg-3');
//   }
// }


// Task 8.
// По нажатию кнопки b-8 запускайте функцию f8, которая делает toggle блокам out-8 класс .bg-8. Обратите внимание, что данных блоков больше одного, следовательно нужен цикл.
// let btn = document.querySelector('.btn');
// btn.onclick = function() {
//   let p = document.querySelectorAll('p');
//   for (let k = 0; k < p.length; k++) {
//     p[k].classList.toggle('bg-2');
//   }
// }


// Task 9.
// Усложним предыдущие задачи. С помощью цикла повесьте на блоки out-9 событие клик. По клику должна выполняться функция f9. Функция, должна добавлять класс bg-9 тому out-9 на котором кликнули.
// let p = document.querySelectorAll('p');

// for (let k = 0; k < p.length; k++) {
//   p[k].onclick = function() {
//     p[k].classList.add('bg-2');
//   }
// }


// Task 10.
// Усложним предыдущие задачи. С помощью цикла повесьте на блоки out-10 событие клик. По клику должна выполняться функция f10. Функция, должна делать toggle класса bg-10 тому out-10 на котором кликнули.
// let p = document.querySelectorAll('p');

// for (let k = 0; k < p.length; k++) {
//   p[k].onclick = function() {
//     p[k].classList.toggle('bg-2');
//   }
// }


// Task 11.
// Добавьте кнопку .b-11, которая запускает функцию f11. Функция создает через createElement div c текстом 25 и добавляет его через append в out-11.
// let btn = document.querySelector('.btn');
// btn.onclick = function() {
//   let out = document.querySelector('.out');
//   let element = document.createElement('div');
//   out.appendChild(element);
// }


// Task 12.
// Добавьте кнопку .b-12, которая запускает функцию f12. Функция создает через createElement div c текстом 12 и добавляет ему класс bg-12. Созданный div добавляется в out-12.
// let btn = document.querySelector('.btn').onclick = function() {
//   let out = document.querySelector('.out');
//   let element = document.createElement('div');
//   element.setAttribute('class', 'bg-2')
//   out.appendChild(element);
// }


// Task 13.
// Добавьте кнопку .b-13, которая запускает функцию f13. Функция создает через createElement div c текстом pushMe и добавляет ему класс bg-13. Также, созданному div добавляется событие onclick, по которому выполняется функция f13_1. Созданный div добавляется в out-13.
// let btn = document.querySelector('.btn').onclick = function() {
//   let element = document.createElement('div');
//   let out = document.querySelector('.out');
//   out.appendChild(element);
//   element.setAttribute('class', 'bg-2');

//   element.onclick = function() {
//     element.classList.add('bg-3');
//   }
// }


// Task 14.
// Добавьте кнопку .b-14, которая запускает функцию f14. Функция создает через createElement div c текстом 14 и добавляет ему класс bg-14. Созданный div добавляется в out-14 с помощью prepend.
// let btn = document.querySelector('.btn').onclick = function() {
//   let out = document.querySelector('.out');
//   let element = document.createElement('div');
//   element.innerHTML = 'Привет';
//   element.classList.add('bg-3');
//   out.prepend(element);

//   // let elements = document.querySelectorAll('.bg-3');

//   // for (let k = 0; k < elements.length; k++) {
//   //   elements[k].onclick = function() {
//   //     out.parentNode.removeChild(elements[k]);
//   //   }
//   // }
// }


// Task 15.
// Добавьте кнопку .b-15, которая запускает функцию f15. Функция создает через createElement div c текстом 15 и добавляет ему класс bg-15. Созданный div добавляется в out-15 с помощью before.
// let btn = document.querySelector('.btn').onclick = function() {
//   out = document.querySelector('.out');
//   let elem = document.createElement('div');
//   elem.innerHTML = 'Привет';
//   elem.classList.add('bg-3');
//   out.before(elem);
// }


// Task 16.
// Добавьте кнопку .b-16, которая запускает функцию f16. Функция создает через createElement div c текстом 16 и добавляет ему класс bg-16. Созданный div добавляется в out-16 с помощью after.
// let btn = document.querySelector('.btn').onclick = function() {
//   let out = document.querySelector('.out');
//   let elem = document.createElement('div');
//   elem.innerHTML = 'Привет!!!';
//   elem.classList.add('bg-3');
//   out.after(elem);
// }


// Task 17.
// Добавьте кнопку .b-17, которая запускает функцию f17. Функция создает через createElement div c текстом 17 и добавляет ему класс bg-17. Созданный div заменяет out-17 с помощью replaceWith.
// let btn = document.querySelector('.btn').onclick = function() {
//   let out = document.querySelector('.out');
//   let elem = document.createElement('div');
//   elem.classList.add('bg-2');
//   out.replaceWith(elem);
// }


// Task 18.
// Добавьте кнопку .b-18, которая запускает функцию f18. Функция с помощью getAttribute получает data-b атрибут с параграф p-18 и выводит в out-18.
// let btn = document.querySelector('.btn').onclick = function() {
//   let out = document.querySelector('.out');
//   let p = document.querySelector('p');
//   let pAttr = p.getAttribute('class');
//   out.innerHTML = pAttr;
// }


// Task 19.
// Добавьте кнопку .b-19, которая запускает функцию f19. Функция с помощью getAttribute получает data-b атрибут с параграфов p-19 и выводит в out-19 через пробел. Обратите внимание, что элементов p-19 больше одного.
// let btn = document.querySelector('.btn').onclick = function() {
//   let out = document.querySelector('.out');
//   let p = document.querySelectorAll('p');

//   for (let k = 0; k < p.length; k++) {
//     let pAtr = p[k].getAttribute('class');
    
    
//     if (pAtr) {
//       out.innerHTML += pAtr + ' ';
//     }
//   }
// }


// Task 20.
// Добавьте кнопку .b-20, которая запускает функцию f20. Функция с помощью setAttribute присваивает атрибут title="go" в div.out-20.
// let btn = document.querySelector('.btn').onclick = function() {
//   let out = document.querySelector('.out');
//   let elem = document.createElement('div');
//   elem.setAttribute('class', 'bg-2');
//   out.appendChild(elem);
// }


