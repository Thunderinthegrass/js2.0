// for (let i = 0; i < 6; i++) {
//   console.log(i);
// }


// let k = 3;
// while (k < 5) {
//   k++;
//   console.log( 'k:' + k );
// }

// let z = 3;
// while (z < 8) {
//   console.log( 'z:' + z);
//   // if (z == 5) continue; эта строчка введёт цикл в бесконечный режим, т.к. инструкция continue прерывает выполнение текущей итерации текущего или отмеченного цикла, и продолжает его выполнение на следующей итерации.
//   z++;
// } 

// находим сумму чисул от 0 до 10----------------------
// let k = 0;
// let z = 0;

// while (k < 10) {
//   k++;
//   z = z + k;
// }
// console.log('сумма чисел от 1 до 10 = ' + z);



// выводим фигуру: --------------------------
// ****
// ****
// ****
// let out = document.querySelector('.out');
// let k = 0;
// let outStr = '';
// while (k < 4) {
//   let k1 = 0;
//   while(k1 < 4) {
//   outStr += '*'
//   k1++;
//   }
//   outStr += '<br>';
//   k++;
// }

// out.innerHTML = outStr;

// Выводим фигуру:--------------------------------
// 000*
// 00**
// 0***
// ****

// let out = document.querySelector('.out');
// let k = 0;
// let outStr = '';
// let flag = 3;

// while (k < 4) {
//   let k1 = 0;
//   while(k1 < 4) {
//   if(k1 < flag) {
//     outStr += '0';
//   }
//   else{
//     outStr += '*'
//   }
//   k1++;
//   }
//   flag--;
//   outStr += '<br>';
//   k++;
// }

// out.innerHTML = outStr;


// Задачи-------------------------------

// 1
// Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида:
// 1 2 3 4 5 6 7 8 9 ... 49 50
// от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла while.

// let out = document.querySelector('.out');
// let btn = document.querySelector('.btn').onclick = function f1() {
//   let k = 1;
//   while (k <= 50) {
//     out.innerHTML += (k + ' ');
//     k++;
//   }
// }

// Task 2.
// Кнопка b-2 запускает функцию t2. Функция должна выводить в out-2 строку вида:
// 2 4 6 ... 122
// от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла while.
// let out = document.querySelector('.out');
// let bth = document.querySelector('.btn').onclick = function f2() {
//   let k = 0;
//   while (k <= 120) {
//     k = k + 2;
//     out.innerHTML += k + ' ';
//   }
// }


// Task 3.
// Кнопка b-3 запускает функцию t3. Функция должна выводить в out-3 строку вида:
// 25 24 23 22 . . 7
// от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается с помощью цикла while.
// let out = document.querySelector('.out');
// let btn = document.querySelector('.btn').onclick = function f3() {
//   let k = 26;
//   while (k > 7) {
//     k--;
//     out.innerHTML += k + ' ';
//   }
// }


// Task 4.
// Кнопка b-4 запускает функцию t4. Функция должна выводить в out-4 строку вида:
// 77_74_71_68_65_62_ ... _38_35_
// от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла while.
// let out = document.querySelector('.out');
// let btn = document.querySelector('.btn').onclick = function f4() {
//   let k = 80;
//   while (k > 35) {
//     k = k - 3;
//     out.innerHTML += k + '_';
//   }
// }


// Task 5.
// Кнопка b-5 запускает функцию t5. Функция должна выводить в out-5 строку вида:
// 1_*2_**3_*4_** ... 17_*
// от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и звездочка (если число нечетное, и две звездочки если четное). Задача решается с помощью цикла while.
// let out = document.querySelector('.out');
// let btn = document.querySelector('.btn').onclick = function f4() {
//   let k = 1;
//   while (k < 17) {
//     if (k == 1) {
//       out.innerHTML += k + '_';
//     }
//     else if (k % 2 == 0) {
//       out.innerHTML += '*' + k + '_';  
//     }
//     else if (k % 2 != 0) {
//       out.innerHTML +='**' + k + '_';
//     }
//     k++;
//   }
// }


// Task 6.
// Кнопка b-6 запускает функцию t6. Функция должна выводить в out-6 строку вида:

// ******

// ******

// ******

// Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек без пробелов и символ переноса строки br. Количество строк (итераций, повторений) цикла while вводит пользователь в i-6.
// let out = document.querySelector('.out');
// let btn = document.querySelector('.btn').onclick = function f4() {
//   let k = 0;
//   let p = ''; 
//   while (k < 6) {
//     let z = 0;
//     while (z < 6) {
//       p += 'Хуяк';
//       z++;
//     }
//     p += '<br>';
//     k++;
//   }

//   out.innerHTML = p;
// }


// Task 7.
// Есть input i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт). По нажатию кнопки b-7 должна запускаться функция f7, которая выводит в out-7 числа от введенного пользователем до нуля включительно. Разделитель пробел. Если пользователь ввел 4 и нажал кнопку, мы получим: 4 3 2 1 0
// let out = document.querySelector('.out');
// let inp = document.querySelector('.inp');

// let btn = document.querySelector('.btn').onclick = function f4() {
// let v = inp.value;
// while (v >= 0) {
//   out.innerHTML += v + ' ';
//   v--;
// }
// }


// 4 3 2 1 0
// Задача решается с помощью цикла while.

// Task 8.
// Есть input i-81 и i-82 куда пользователь может ввести числа больше нуля (проверок не делаем, принимаем как факт). Считаем, что второе число всегда больше первого. По нажатию кнопки b-8 должна запускаться функция f8, которая выводит в out-8 числа от первого введенного до второго включительно, с шагом 1. Разделитель пробел. Если пользователь ввел 4 и 8 и нажал кнопку, мы получим: 4 5 6 7 8
// let out = document.querySelector('.out');
// let inp = document.querySelector('.inp');
// let inp1 = document.querySelector('.inp-1');

// let btn = document.querySelector('.btn').onclick = function f4() {
//   let i1 = inp1.value;
//   let i = inp.value;
//   while (i <= i1) {
//     out.innerHTML += i + ' ';
//     i++;
//   }

// }


// 4 5 6 7 8
// Задача решается с помощью цикла while.

// Task 9.
// Есть input i-91 и i-92 куда пользователь может ввести числа. По нажатию кнопки b-9 должна запускаться функция f9, которая выводит в out-9 числа от меньшего введенного до большего включительно, с шагом 1. Разделитель пробел. Если пользователь ввел 4 и 8 и нажал кнопку, мы получим:

// 4 5 6 7 8
// если ввел 8 и 6, то получим
// 6 7 8
// Задача решается с помощью цикла. Подсказка - вначале делаем проверку, а потом запускаем цикл while.
// let out = document.querySelector('.out');
// let inp = document.querySelector('.inp');
// let inp1 = document.querySelector('.inp-1');

// let btn = document.querySelector('.btn').onclick = function f4() {
//   let i1 = inp1.value;
//   let i = inp.value;
//   if (i1 > i) {
//     while (i <= i1) {
//       out.innerHTML += i + ' ';
//       i++;
//     }
//   }
//   else if (i > i1) {
//     while (i >= i1) {
//       out.innerHTML += i1 + ' ';
//       i1++;
//     }
//   }
// }


// Task 10.
// Кнопка b-10 запускает функцию t10. Функция должна выводить в out-10 четные годы от 1950 до 2000 включительно. Разделитель - пробел. Задача решается через цикл while, а четность - через шаг (равный 2).
// let out = document.querySelector('.out');

// let btn = document.querySelector('.btn').onclick = function f4() {
//   let k = 1950;
//   while (k <= 2000) {
//     out.innerHTML += k + ' ';
//     k = k + 2;
//   }
// }


// Task 11.
// Кнопка b-11 запускает функцию t11. Функция должна: получить все div.div-11 перебрать их с помощью цикла while. Обращение к div выглядит так elem[i] вывести в out-11 содержимое каждого блока. Разделитель - пробел. В результате должно получиться так: one 3 4 two
// let out = document.querySelector('.out');
// let d11 = document.querySelectorAll('.div-11')

// let btn = document.querySelector('.btn').onclick = function f4() {
//   let k = 0;
//   while (k < 4) {
//     out.innerHTML += d11[k].innerHTML + ' ';
//     k++
//   }
// }



// Task 12.
// Кнопка b-12 запускает функцию t12. Функция должна: получить все div.div-12 перебрать их с помощью цикла while. Обращение к div выглядит так elem[i] применить к каждому elem[i].style.background = ‘orange’
// let out = document.querySelector('.out');
// let d11 = document.querySelectorAll('.div-11')

// let btn = document.querySelector('.btn').onclick = function f4() {
//   let k = 0;
//   while (k < 5) {
//     d11[k].style.background = 'orange';
//     k++;
//   }
// }


// Task 13.
// Кнопка b-13 запускает функцию t13. Функция должна: получить все input.i-13 перебрать их с помощью цикла while. Обращение к элементу выглядит так elem[i] применить к каждому elem[i].value, причем к value первого должно равняться 1, второго - 2, третьего - 3...

// let inp = document.querySelectorAll('.i-13');
// let btn = document.querySelector('.btn').onclick = function f4() {
//   let k = 0;
//   while (k < 1) {
//     inp[0].value += 1;
//     inp[1].value += 2;
//     inp[2].value += 3;
//     inp[3].value += 4;
//     inp[4].value += 5;
//     k++;
//   }
// }


// Task 14.
// Кнопка b-14 запускает функцию t14 Функция должна: получить все input.i-14 перебрать их с помощью цикла while. Обращение к элементу выглядит так elem[i] вывести в out-14 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked.

// let inp = document.querySelectorAll('.i-13');
// let out = document.querySelector('.out');
// let btn = document.querySelector('.btn').onclick = function f4() {
//   let k = 0;
//   while (k < inp.length) {
//     inp[0].value = 1;
//     inp[1].value = 2;
//     inp[2].value = 3;
//     inp[3].value = 4;
//     inp[4].value = 5;
//     if (inp[k].checked) {
//       out.innerHTML = inp[k].value;
//     }
//     k++;
//   }
// }


// Task 15.
// Кнопка b-15 запускает функцию t15 Функция должна выводить следующую последовательность в out-15:
// 10 0 9 1 8 2 7 3 6 4 5 5 4 6 3 7 2 8 1 9 0 10
// Для вывода использовать цикл while.
let out = document.querySelector('.out');
let btn = document.querySelector('.btn').onclick = function f4() {
  let k = 0;
  while (k < 10) {
    out.innerHTML += (10 - k) + ' ' + k + ' ';
    k++;
  }
}