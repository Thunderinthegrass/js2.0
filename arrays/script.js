// код урока------------------
// let a = [];
// console.log(a);
// a = ['Стёпа', 30, 'лысый'];
// console.log(a);
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);
// console.log(a[3]);
// console.log(a.length);
// a[2] = 'с волосами';
// console.log(a);


// меняем местами элументы массива(сам сделал)-------------
// let a = [1, 2, 3, 4];
// console.log(a);
// let b = a[0];
// a[0] = a[3];
// a[3] = b;
// console.log(a);

// то же самое, но не зная длину массива, вычисляем его на ходу--------------------
// let a = [1, 2, 3, 4];
// console.log(a);
// let b = a[0];
// a[0] = a[a.length - 1];
// a[a.length - 1] = b;
// console.log(a);

// console.log(a[888]); //обращение к несуществующему элементу


//вывод массива на страницу---------------------------
// for (let i = 0; i < a.length; i++) {
//   let out = document.querySelector('.out').innerHTML += a[i] + ' ';
// } - //плохой способ, т.к. каждый цикл каждый раз объявляет переменную и прибавляет к ней элемент цикла

// let c = '';
// for (let i = 0; i < a.length; i++) {
//   if (a[i] % 2 == 0) {
//     c += a[i] + '_';
//   }
// }
//  let out = document.querySelector('.out').innerHTML = c; //хороший способ, т.к. сначала добавляем все элементы массива к переменной с, потом один раз выводим переменную с на страницу

// находим минимальный и максимальный элементы массива---------
// let z = [15, 17, 8, 1, 90, 35, 10, 27];

// let y = z[0];
// for (let k = 0; k < z.length; k++) {
//   if (z[k] > y) {
//     y = z[k];
//   }
// }
// console.log(y);

// нахождение суммы элементов массива----------------
// let z = [15, 17, 8, 1, 90, 35, 10, 27];

// let sum = 0;
// for (let k = 0; k < z.length; k++) {
//   sum = sum + z[k];
// }
// console.log(sum);



// Задачи--------------
// Task 1.
// Создайте массив ar1 содержащий строки, числа, булевы значения. Выведите его в .out-1. Вывод - по нажатию кнопки b-1
// let a = ['Привет', 17, true];
// let out = document.querySelector('.out');
// let btn = document.querySelector('.btn').onclick = function() {
//   out.innerHTML = a;
// }


// Task 2.
// Создайте массив ar2 содержащий строки, числа, булевы значения. Выведите его в div.out-2. Используйте шаблон вывода из кода в JS. Вывод - по нажатию кнопки b-2.
// let a = ['Привет', 77, true];

// let c = '';

// let btn = document.querySelector('.btn').onclick = function() {
//   for (let k = 0; k < a.length; k++) {
//     c = c + a[k] + ' ';
//   }
//   let out = document.querySelector('.out').innerHTML = c;
// }


// Task 3.
// Создайте массив ar3, заполните его любыми значениями. Выведите длину массива.
// let a = ['Привет', 77, true];

// let btn = document.querySelector('.btn').onclick = function() {
//   let out = document.querySelector('.out').innerHTML = a.length;
// }


// Task 4.
// Создайте массив ar4. Выведите нулевой, третий, восьмой элемент массива в out-4 через пробел.
// let a = ['Привет', 77, true, 'это неплохо', 457, 'зарядка', 87, 93939, 12];
// let out = document.querySelector('.out');

// let btn = document.querySelector('.btn').onclick = function () {
//   let c = '';

//   c = c + a[0] + ' ' + a[3] + ' ' + a[8];

//   out.innerHTML = c;
// }


// Task 5.
// Создайте массив ar5 длина которого больше 5. Выведите сумму нулевого, второго и третьего элементов массива (нуль, второй - и третий это индексы 0, 2, 3)
// let a = [2, 48, 90, 32, 8, 17];
// let out = document.querySelector('.out');


// let btn = document.querySelector('.btn').onclick = function () {
//   out.innerHTML = a[0] + a[2] + a[3];
// }


// Task 6.
// Создайте массив ar6, который содержит ваше имя, знак зодиака, день рождения и месяц рождения. Выведите массив на страницу в div-6. Разделитель - пробел.
// let a = ['Имя', 'Знак зодиака', 24, 'Июня'];
// let btn = document.querySelector('.btn').onclick = function () {
//   let c = '';
//   let out = document.querySelector('.out');
//   for (let k = 0; k < a.length; k++) {
//     c = c + a[k] + ' ';
//   }
//   out.innerHTML = c;
// }


// Task 7.
// Добавьте в массив ar7 значения 'vietnam' с индексом 7 , 'turkey' с индексом 6, 'italy' с индексом 5. Добавление элементов сделайте в f7. Выведите массив на страницу в .out-7. Разделитель - пробел. Обращаю ваше внимание! Это программирование. Поэтому - никаких больших букв и тому подобного!!!!
// let a = [1, 8, 3, 7, 2];
// let out = document.querySelector('.out');

// let btn = document.querySelector('.btn').onclick = function() {
//   a[5] = 'italy';
//   a[6] = 'new zealand';
//   a[7] = 'vietnam';

//   out.innerHTML = a;
// }


// p>
// ar7 = ['china', 'india', 'brazil', 'japan', 'egypt'];
// Task 8.
// Добавьте в массив ar8 третий (индекс 3) элемент равный 3.14, 4 (индекс 4) элемент равный 17, 6 элемент (индекс 6) равный 5. Выведите массив в .out-8. Разделитель - дефис. В .out-8-1 выведите длину массива ar8.
// let a = [1, 8, 3, 7, 2, 'привет'];
// let out = document.querySelector('.out');
// let out1 = document.querySelector('.out-1');

// let btn = document.querySelector('.btn').onclick = function() {
//   a[3] = 3.14;
//   a[4] = 17.7;
//   a[6] = 5.15;

//   out.innerHTML = a;
//   out1.innerHTML = a.length;
// }


// Task 9.
// Выведите последний элемент массива ar9. Вывод последнего элемента - реализуйте по индексу. Чтобы рассчитать индекс последнего элемента - используйте на длину массива.
// let a = [1, 8, 3, 7, 2, 'привет'];
// let out = document.querySelector('.out');

// let btn = document.querySelector('.btn').onclick = function() {
//   out.innerHTML = a[a.length - 1];
// }


// ar9 = [100, 200, 300, 400, 700, 121];
// Task 10.
// Выведите сумму первого (индекс 1) и последнего массива ar10 в блок out-10. Индекс последнего элемента массива не указывайте напрямую, а вычисляйте через длину массива.
// ar10 = [100, 200, 300, 400, 700, 121];
// let out = document.querySelector('.out');

// let btn = document.querySelector('.btn').onclick = function() {
//   let a = ar10[1] + ar10[ar10.length - 1];
//   out.innerHTML = a;
// }


// ar10 = [100, 200, 300, 400, 700, 121];
// Task 11.
// Напишите функцию, которая меняет местами второй (индекс 2) и четвертый (индекс 4) элемент массива ar11 и выводит его в out-11. Разделитель - пробел.
// let ar11 = [2,3,4,5,6,7];

// let out = document.querySelector('.out');
// let btn = document.querySelector('.btn').onclick = function() {
//   let a = ar11[2];
//   ar11[2] = ar11[4];
//   ar11[4] = a;

//   out.innerHTML = ar11;
// }



// ar11 = [2,3,4,5,6,7];
// Task 12.
// Напишите функцию f12, которая меняет местами нулевой и последний элемент массива ar12 и выводит его в out-12. Разделитель - пробел. Последний элемент вычислять через длину массива.
// let a = ['test', 'west', 'list', 'class', 'best'];

// let out = document.querySelector('.out');
// let btn = document.querySelector('.btn').onclick = function() {
//   let b = a[0];
//   a[0] = a[a.length - 1];
//   a[a.length - 1] = b;

//   out.innerHTML = a[0] + ' ' + a[a.length - 1];
// }


// ar12 = ['test', 'west', 'list', 'class', 'best'];
// Task 13.
// Выведите массив ar13 в out-13 в формате индекс пробел значение пробел.
// let a = ['test', 'west', 'list', 'class', 'best'];

// let out = document.querySelector('.out');
// let btn = document.querySelector('.btn').onclick = function() {
//   let c = '';
//   for (let k = 0; k < a.length; k++) {
//     c += a[k] + ' | ';
//   }
//   out.innerHTML = c;
// }



// ar13 = ['test', 'west', 'list', 'class', 'best'];
// Task 14.
// Используя цикл выведите на страницу массив ar14 в обратном порядке. Разделитель - пробел.
// let a = [1, 2, 3, 'hello', 66];

// let out = document.querySelector('.out');
// let btn = document.querySelector('.btn').onclick = function() {
//   let b = '';
//   for (let k = a.length - 1; k >= 0; k--) {
//     b += a[k] +' | ';
//   }
//   out.innerHTML = b;
// }


// ar14 = [1, 2, 3, 'hello', 66];
// Task 15.
// Используя цикл выведите на страницу элементы массива ar15, которые больше нуля. Разделитель - пробел.
// let a = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];

// let out = document.querySelector('.out');
// let btn = document.querySelector('.btn').onclick = function() {
//   let b = '';
//   for (let k = 0; k < a.length; k++) {
//     if (a[k] > 0) {
//       b += a[k] + ' | ';
//     }
//   }
//   out.innerHTML = b;
// }


// ar15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
// Task 16.
// Выполните перебор массива a. Четные элементы добавьте в массив b, нечетные в c. Добавление в массив - по индексу, а не +=!!!!!. Протестируйте задачу на повторный запуск! Выведите b в div.out, а c в div.out-1. Разделитель - пробел.
// let a = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
// let b = [];
// let c = [];

// let out = document.querySelector('.out');
// let out1 = document.querySelector('.out-1');

// let btn = document.querySelector('.btn').onclick = function() {
//   for (let k = 0; k < a.length; k ++) {
//     if (a[k] % 2 == 0) {
//       b.push(a[k]);
//     }
//     else {
//       c.push(a[k]);
//     }
//   }
  
//   out.innerHTML = b; 
//   out1.innerHTML = c;
// }


// ar16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
// ar16_odd = [];
// ar16_even = [];

// Task 17.
// Используя цикл выведите в .out-17 количество элементов ar17, значение которых больше 3. Для расчета используйте цикл и переменную счетчик.
  // let a = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
  // let out = document.querySelector('.out');

  // let btn = document.querySelector('.btn').onclick = function() {
  //   let b = '';
  //   for (let k = 0; k < a.length; k++) {
  //     if (a[k] > 3) {
  //       b += a[k] + ' | ';
  //     }
  //   }
  //   out.innerHTML = b;
  // }


// ar17 =  [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
// Task 18.
// Используя цикл выведите в .out-18 максимальный элемент массива ar18.
// let a = [15,24,13,78,21,4,45,67];
// let out = document.querySelector('.out');

// let btn = document.querySelector('.btn').onclick = function() {
//   let b = '';
//   for (let k = 0; k < a.length; k++) {
//     if (a[k] > a[0]) {
//       a[0] = a[k];
//       b = a[k];
//     }
//   }
// out.innerHTML = b;
// }


// ar18 =  [15,24,13,78,21,4,45,67];
// Task 19.
// Выведите в .out-19 индекс минимального элемента в массиве ar19
// let a = [15,424,313,1,241,4,45,67];
// let out = document.querySelector('.out');

// let btn = document.querySelector('.btn').onclick = function() {
//   let b = '';
//   for (let k = 0; k < a.length; k++) {
//     if (a[k] < a[0]) {
//       b = k;
//     }
    
//   out.innerHTML = b;
// }


// ar19 =  [15,424,313,78,241,4,45,67]
// Task 20.
// Выведите в .out-20 сумму элементов в массиве ar20.
// let a = [4,5,6,7,8,9,10];
// let out = document.querySelector('.out');

// let btn = document.querySelector('.btn').onclick = function() {
//   let b = 0;
//   for (let k = 0; k < a.length; k++) {
//     b = b + a[k];
//   }
//   out.innerHTML = b;
// }


//  ar20 =  [4,5,6,7,8,9,10];