// код урока------------------
// let out = document.querySelector('.out');
// let out1 = document.querySelector('.out-1');
// let out2 = document.querySelector('.out-2');
// const a = [1,2,3,4,5,6,7,8];
// const b = ['a', 'b', 'c', 'd', 'e', 'f'];

// a.push('Привет');
// b.pop();//удаляет последний элемент массива, и возвращает значение этого элемента.

// let btn = document.querySelector('.btn').onclick = function() {
//   out.innerHTML = a.push('привет');
//   out1.innerHTML = a;
//   out2.innerHTML = b.push(); // возвращает длину массива
// }

// let z = [1,2,3,4,5,6,7,8,9,10,11,12];
//  console.log(z);
//  z.splice(3, 8 , 'привет');// первый параметр показывает, с какого элемента начать удаление, второй - сколько элементов удалить, третий - что нужно вставить вместо удаляемого.
//  console.log(z);

//Задания--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Task 1.
// Есть массив d1, кнопка b-1, input i-1. Напишите функцию f1, которая при нажатии читает i-1 и добавляем его в массив. После чего выводит массив в .out-1. Поскольку мы будем выводить массив d1 неоднократно, то давайте вывод массива сделаем отдельной функцией, showArr - она подготовлена. Изучите ее - это хороший способ оптимизировать код.
// let a = [33, 'best', 66, 'best'];
// let out = document.querySelector('.out');
// let inp = document.querySelector('.inp');

// function showA() {
//   out.innerHTML = a;
// }

// let btn = document.querySelector('.btn').onclick = function() {
//   let v = inp.value;
//   a.push(v);
//   showA();
// }


//          d1 = [33,'best', 66, 'best'];

// Task 2.
// Напишите функцию f2, которая применяет метод pop к массиву d1, а затем выводит его (showArr) в .out-2


// let btn = document.querySelector('.btn').onclick = function() {
//   a.pop();
//   showA();
// }


// Task 3.
// Напишите функцию f3, которая применяет метод shift к массиву d1, а затем выводит его (showArr) в .out-3
// let btn = document.querySelector('.btn').onclick = function() {
//      a.shift();
//      showA();
//    }


// Task 4.
// Напишите функцию f4, которая применяет метод push к массиву d1, данные для массива берите из i-4, а затем выводит его (showArr) в .out-4
// let btn = document.querySelector('.btn').onclick = function () {
//   let v = inp.value;
//   a.push(v);
//   showA();
// }


// Task 5.
// Напишите функцию f5, которая применяет метод unshift к массиву d1, данные для массива берите из i-5, а затем выводит его (showArr) в .out-5
// let btn = document.querySelector('.btn').onclick = function () {
//   let v = inp.value;
//   a.unshift(v);
//   showA();
// }


// Task 6.
// Напишите функцию f6, которая эмулирует работу метода push применительно к массиву d6. Т.е. добавляет значение из i-6 как последний элемент в массив d6. Эмуляция, значит, что мы получим результат аналогичный методу push без применения его. Эмуляция заключается в присвоение значения как последнего элемента массива. Как вычислить индекс последнего элемента используя длину массива - вы знаете из предыдущего урока. Повторный запуск функции должен также приводить к добавлению элемента.
// let a = ['test', 5, 12];

// let out = document.querySelector('.out');
// let inp = document.querySelector('.inp');

// function showA() {
//   out.innerHTML = a;
// }

// let btn = document.querySelector('.btn').onclick = function() {
//   let b = inp.value;
//   a[a.length] = b;
//   showA();
// }


// d6 = ['test', 5, 12];
// Task 7.
// Напишите функцию f7, которая эмулирует метод pop, т.е. удаляет последний элемент массива d7. Эмулировать - получать результат аналогичный pop, но без применения pop. Функция может быть вызвана много раз, при этом каждый раз должен удаляться последний элемент d7.
// let a = ['china', 'india', 'brazil', 'japan', 'egypt'];
// let out = document.querySelector('.out');
// let inp = document.querySelector('.inp');
// function showA() {
//   out.innerHTML = a;
// }

// let btn = document.querySelector('.btn').onclick = function() {
//   let b = [];
//   for (let k = 0; k < a.length - 1; k++) {
//     b[k] = a[k];
//   }
//   a = b;
//   out.innerHTML = a;
// }


//             d7 = ['china', 'india', 'brazil', 'japan', 'egypt'];

// Task 8.
// Напишите функцию f8, которая эмулирует работу метода unShift - добавляем значение из i-8 в начало массива d8.
// let a = [2,'4', 12, 67, 'hello'];
// let out = document.querySelector('.out');
// let inp = document.querySelector('.inp');

// let btn = document.querySelector('.btn').onclick = function() {
//   let s = inp.value;
//   let b = [s];
//   for (let k = 0; k < a.length; k++) {
//     console.log(b);
//     b[k + 1] = a[k];
//   }
//   a = b;
//   out.innerHTML = a;
// }


//              d8 = [2,'4', 12, 67, 'hello'];

// Task 9.
// Напишите функцию f8, которая эмулирует работу метода shift - на примере массива d9.
// let a = [100, 200, 300, 400, 700, 121];
// let inp = document.querySelector('.inp');
// let out = document.querySelector('.out')

// let btn = document.querySelector('.btn').onclick = function() {
//   let b = [];
//   for (let k = 1; k < a.length; k++) {
//     b[k - 1] = a[k];
//   }
//   a = b;
//   out.innerHTML = a;
//   console.log(a);
// }


//             d9 = [100, 200, 300, 400, 700, 121];

// Task 10.
// Напишите функцию f10, которая применяет к массиву d10 метод reverse и выводит полученный массив в out-10
// let a = [3,14,15,92,6];
// let inp = document.querySelector('.inp');
// let out = document.querySelector('.out')

// let btn = document.querySelector('.btn').onclick = function() {
//   a = a.reverse();
//   out.innerHTML = a;
// }


// d10 = [3,14,15,92,6];
// Task 11.
// Напишите функцию, которая получает число из input i-11, переводит в число, и с помощью метода indexOf проверяет наличие в массиве d11. Функция выводит в out-11 -1 если такого числа нет в массиве, либо его индекс в массиве.
// let a = [2,3,4,5,6,7];
// let inp = document.querySelector('.inp');
// let out = document.querySelector('.out')

// let btn = document.querySelector('.btn').onclick = function() {
//   let v = inp.value;
//   let n = Number(v);  //преобразование содержимого инпута к числу
//   alert(typeof n);
//   // alert(v);
//   // if (n) {
//   //   alert('число');
//   //   alert(n);
//   // }
//   // else {
//   //   alert('не число');
//   // }
//   let z = a.indexOf(n);
//   out.innerHTML = z;
// }


// d11 = [2,3,4,5,6,7];
// Task 12.
// Напишите функцию f12, которая эмулирует работу метода indexOf - ищет введенное число в массиве d12 (перебором). Если числа нет - выводит -1, если есть - его позицию в массиве.

// let a = [6, 62, 60, 70, 1, 5];

// let btn = document.querySelector('.btn');
// let out = document.querySelector('.out');
// let inp = document.querySelector('.inp');

// btn.onclick = function() {

//   for (let k = 0; k < a.length; k++) {
//     let b = inp.value;
//     let c = Number(b);
//     // console.log(c);
//     let d = -1;
//     if (c == a[k]) {
//       console.log(k);
//       out.innerHTML = k;
//     }
//     else {
//       out.innerHTML += d;
//     } 
//   } 
// }

// d12 = [6, 62, 60, 70, 1, 5]
// Task 13.
// Напишите функцию f13, которая эмулирует работу метода reverse. Т.е. создает новый массив на основе d13 с обратным порядком элементов и выводит в out-13.
// let a = [6, 0, 22, 1, 4, 76];
// let btn = document.querySelector('.btn');
// let out = document.querySelector('.out');
// let inp = document.querySelector('.inp');

// btn.onclick = function() {
//   let b = [];
//   for (let k = a.length - 1; k > -1; k--) {
//     // console.log(a.length);
//     b += a[k] + ' ';
//     out.innerHTML = b;
//   }
// }


//  d13 = [6, 0, 22, 1, 4, 76]
// Task 14.
// Напишите функцию, которая получает i-14, переводит в число, а потом заполняет массив d14 так, что количество элементов равно введенному числу, и каждый элемент равен 1. Т.е. пользователь ввел 5, массив будет [1,1,1,1,1]. Выведите массив в out-14.
// let a = [];
// let btn = document.querySelector('.btn');
// let out = document.querySelector('.out');
// let inp = document.querySelector('.inp');

// btn.onclick = function() {
//   let b = inp.value;
//   let c = Number(b); 
//   for (k = 0; k < c; k++) {
//     a += 1;
//   }
//   out.innerHTML = a;
// }


// d14 = [];
// Task 15.
// Напишите функцию f15, которая вначале проверяет, есть ли элемент из i-15 в массиве d15 (переводим в число), а потом - если нет - добавляет его в массив.
// let a = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
// let btn = document.querySelector('.btn');
// let out = document.querySelector('.out');
// let inp = document.querySelector('.inp');


// btn.onclick = function () {
//   let ival = inp.value;
//   let inum = Number(ival);
//   console.log(inp.value);
//   for (let k = 0; k < a.length; k++) {
//     let inum = Number(ival);
//     if (inum == a[k]) {
//       out.innerHTML = a;
//     }
//     else {
//       if (k = a[a.length - 1]) {
//           a[a.length] = inum;
//           out.innerHTML = a;
//       }

//     }
//   }
// }


// d15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
// Task 16.
// Даны два массива d161 и d162 - используя метод concat - добавьте в массив d16 результат применения concat между массивом d161 и d162.
// let d16 = [];
// let d161 = [5,6,7,8,9];
// let d162 = [23,24,56,87];
// let out = document.querySelector('.out');

// let btn = document.querySelector('.btn').onclick = function() {
//   d16 = d161.concat(d162);
//   out.innerHTML = d16;
// }


// let d16 = [];
// let d161 = [5,6,7,8,9];
// let d162 = [23,24,56,87];

// Task 17.
// Напишите функцию f17, которая эмулирует работу метода concat. Функция должна объедиять массивы d171 и d172 и записывать результат в d17. Для эмуляции используйт цикл.
// let a = [];
// let b = ['a', 'b', 'c', 'd'];
// let c = [1,2,3,4,5];

// let out = document.querySelector('.out');

// let btn = document.querySelector('.btn').onclick = function() {
//   let d = b.length + c.length;
//   a = b;
//   console.log(a);
//   for (k = 0; k < c.length; k++) {
//     a[a.length] = c[k];
//   }
//   out.innerHTML = a;
// }


// d17=[];
// d171=['a', 'b', 'c', 'd'];
// d172=[1,2,3,4,5];

// Task 18.
// Напишите функцию f18, которая получает значение из i-18 и проверяет есть ли такое значение в массиве d18 c использованием метода includes. Результат применения метода - выводится в .out-18.
// let a = ['b', 'c', '45', 'e', 'z', 'y'];

// let out = document.querySelector('.out');
// let inp = document.querySelector('.inp');

// let btn = document.querySelector('.btn').onclick = function() {
//   let v = inp.value;
//   let b = a.includes(v); 
//   if (b) {
//     out.innerHTML = 'да';
//   }
//   else {
//     out.innerHTML = 'нет';
//   }
// }


// d18 = ['b', 'c', '45', 'e', 'z', 'y'];
// Task 19.
// Напишите фукнцию f19, которая выводит самую длинную строку maxString из массива d19 в out-19.
// let a = ['Your','payment','method','will','automatically','be','charged','in','advance','every'];
// let out = document.querySelector('.out');
// let inp = document.querySelector('.inp');
// let btn = document.querySelector('.btn').onclick = function() {
//   for (k = 1; k < a.length; k++) {
//     if (a[k].length > a[0].length) {
//       a[0] = a[k];
//       out.innerHTML = a[0];
//     }
//   }
// }


// ['Your','payment','method','will','automatically','be','charged','in','advance','every' ];
// Task 20.
// Напишите функцию f20, которая применяет к массиву d20 метод join с параметрами и соединяет элементы массива в одну строку. Результат выводит в .out-20. В качестве разделителя укажите два апострофа без пробела.
let a = [4,5,6,7,8,9,10];

let out = document.querySelector('.out');

let btn = document.querySelector('.btn').onclick = function() {
  out.innerHTML = a.join('``');
}


//  d20 = [4,5,6,7,8,9,10]