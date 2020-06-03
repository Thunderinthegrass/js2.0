// let a = 6;

// if(a > 10) {
//   console.log('yes');
// }
// else {
//   console.log('no');
// }

// const button = document.querySelector('button');
// const input = document.querySelector('.age');

// //стрелочная функция
// button.onclick = () => {
//   let num = +input.value;
//   if (num >= 18 && num < 70) {
//     console.log('заходи!');
//   }
//   else if (num > 70) {
//     console.log('Ты слишком стар для всего этого дерьма');
//   }
//   else {
//     console.log('уходи!');
//   }

//   //Инструкция switch сравнивает выражение со случаями, перечисленными внутри неё, а затем выполняет соответствующие инструкции.

//   switch (num) {
//     case 17://аналог if
//       console.log('мал ещё');
//       break;//прерывает выполнение, если значение верно
//     case 18:
//       console.log('заходи');
//     default://аналог else, выполнится значение по умолчанию
//       console.log('заходи, ладно');
//   }
// }

// let b = 3;

// console.log(b == 5 || b <= 3);// && - и, || - или

//задания

//1
// const input = document.querySelector('.i-1');
// const button = document.querySelector('.b-1');
// const out = document.querySelector('.out-1');

// button.onclick = function() {
//   const a = +input.value;
//   out.innerHTML = (a == 4);
// }


//2
// const a21 = document.querySelector('.a21');
// const a22 = document.querySelector('.a22');
// const button = document.querySelector('.b-2');
// const out = document.querySelector('.out-2');

// button.onclick = function() {
//   let a = +a21.value;
//   let b = +a22.value;
//   if (a > b) {
//     out.innerHTML = a;
//   }
//   else {
//     out.innerHTML = b;
//   }
// }


//3
// let button = document.querySelector('.b-3');

// button.onclick = function() {
//   let a = document.querySelector('.i-31');
//   let b = document.querySelector('.i-32');
//   let c = document.querySelector('.out-3');
//   let d = +a.value;
//   let e = +b.value;
//   if (d > e) {
//     c.innerHTML = (d);
//   }
//   else {
//     c.innerHTML = (e);
//   }
// }


//4
// let input = document.querySelector('.i-4');
// let button = document.querySelector('.b-4');
// let out = document.querySelector('.out-4');


// button.onclick = function f4() {
//   let a = +input.value;
//   if (a >= 18) {
//     out.innerHTML = (1);
//   }
//   else {
//     out.innerHTML = (0);
//   }
// }


//5
// let input = document.querySelector('.i-5');
// let button = document.querySelector('.b-5');
// let out = document.querySelector('.out-5');

// button.onclick = function f5() {
//   let a = +input.value;
//   if (a < 0) {
//     out.innerHTML = ('m');
//   }
//   else if (a == 0) {
//     out.innerHTML = (0);
//   }
//   else {
//     out.innerHTML = (1);
//   }
// }


//6
// let input = document.querySelector('.i-6');
// let button = document.querySelector('.b-6');
// let out = document.querySelector('.out-6');

// button.onclick = function f6() {
//   let a = +input.value;
//   let b = (a % 2);
//   if (b == 0) {
//     out.innerHTML = ('чётное');
//   }
//   else {
//     out.innerHTML = ('нечётное');
//   }
// }


// 7
// let input1 = document.querySelector('.i-71');
// let input2 = document.querySelector('.i-72');
// let button = document.querySelector('.b-7');
// let out = document.querySelector('.out-7');

// button.onclick = function f7() {
//   let a = +input1.value;
//   let b = +input2.value;
//   let c = Math.pow(a,b);
//   out.innerHTML = (c);
// }


// 8
// let select = document.querySelector('.s-8');
// let button = document.querySelector('.b-8');
// let out = document.querySelector('.out-8');

// button.onclick = function f8() {
//   let a = +select.value;
//   switch (a) {
//     case 1:
//       out.innerHTML = ('one');
//       break;
//     case 2:
//       out.innerHTML = ('two');
//       break;
//     case 3:
//       out.innerHTML = ('three');
//       break;

//   }
// }


// 9
// let input = document.querySelector('.i-9');
// let button = document.querySelector('.b-9');
// let out = document.querySelector('.out-9');

// button.onclick = function f9() {
//   let a = +input.value;
//   if (a >= 1 && a <=15) {
//     out.innerHTML = (1);
//   }
//   else if (a >= 16 && a <=30) {
//     out.innerHTML = (2);
//   }
//   else if (a >= 31 && a <=45) {
//     out.innerHTML = (3);
//   }
//   else if (a >= 46 && a <=50) {
//     out.innerHTML = (4);
//   }
//   else if (a >= 51 && a <=65) {
//     out.innerHTML = (5);
//   }
//   else 
//   out.innerHTML = (0);
// }


// 10
// let input1 = document.querySelector('.i-101');
// let input2 = document.querySelector('.i-102');
// let select = document.querySelector('.s-103');
// let button = document.querySelector('.b-10');
// let out = document.querySelector('.out-10');

// button.onclick = function f10() {
//   let a = +input1.value;
//   let b = +input2.value;
//   let c = +select.value;

// через switch

//   switch (c) {
//     case 1:
//       out.innerHTML = (a + b);
//       break;
//     case 2:
//       out.innerHTML = (a - b);
//       break;
//     case 3:
//       out.innerHTML = (a * b);
//       break;
//     case 4:
//       out.innerHTML = (a / b);
//       break;
//   }


// через if else
//   if (c == 1) {
//     out.innerHTML = (a + b);
//   }
//   else if (c == 2) {
//     out.innerHTML = (a - b);
//   }
//   else if (c == 3) {
//     out.innerHTML = (a * b);
//   }
//   else if (c == 4) {
//     out.innerHTML = (a / b);
//   }
// }


// 11
// let select1 = document.querySelector('.s-111');
// let select2 = document.querySelector('.s-112');
// let select3 = document.querySelector('.s-113');
// let button = document.querySelector('.b-11');
// let out = document.querySelector('.out-11');

// button.onclick = function f11() {
//   let a = +select1.value;
//   let b = +select2.value;
//   let c = +select3.value;
//   if (c == 1) {
//     out.innerHTML = (a + '&&' + b);
//   }
//   else if (c == 2) {
//     out.innerHTML = (a + '||' + b);
//   }
// }


// Задачи на прокачку

// 1
// let a = 4;

// if (a == 4) {
//   console.log('a = 4');
// }


// 2,3
// let b = 8;
// let c = 10;

// if (b > c) {
//   console.log('b > c');
// }
// else if (b == c) {
//   console.log('b = c');
// }
// else {
//   console.log('c > b');
// }


// 4
// let input1 = document.querySelector('.input1');
// let input2 = document.querySelector('.input2');
// let button = document.querySelector('button');
// let out = document.querySelector('.out');

// button.onclick = function() {
//   let a = +input1.value;
//   let b = +input2.value;

//   if (a > b) {
//     out.innerHTML = (a);
//   }
//   else if (a < b) {
//     out.innerHTML = (b);
//   }
//   else {
//     out.innerHTML = ('равны');
//   }
// }


// 5
// let input1 = document.querySelector('.input1');
// let button = document.querySelector('button');
// let out = document.querySelector('.out');

// button.onclick = function() {
//   let a = +input1.value;
//   if (a < 2000) {
//     out.innerHTML = (2019 - a);
//   }
//   else if (a >= 2000) {
//     console.log(2019 - a);
//   }
// }


// 6
// let input = document.querySelector('input');
// let button = document.querySelector('button');
// let out = document.querySelector('.out');

// button.onclick = function() {
//   let a = input.value;
//   if (a >= 1 && a <= 32) {
//     out.innerHTML = ('Есть такая квартира');
//   }
//   else {
//     out.innerHTML = ('Такой квартиры здесь НЕТ!!!')
//   }
// }


// 7
// let input = document.querySelector('input');
// let button = document.querySelector('button');
// let out = document.querySelector('.out');

// button.onclick = function() {
//   let a = input.value;
//   if (a > 0) {
//     out.innerHTML = ('Данное число больше нуля');
//   }
//   else if (a < 0) {
//     out.innerHTML = ('Данное число меньше нуля');
//   }
// }


// 8
// let input = document.querySelector('input');
// let button = document.querySelector('button');
// let out = document.querySelector('.out');

// button.onclick = function() {
//   let a = input.value;
//   let b = (a % 2);
//   if (b == 0) {
//     out.innerHTML = ('Число чётное');
//   }
//   else {
//     out.innerHTML = ('Число не чётное');
//   }
// }

// 9
// let input1 = document.querySelector('.input1');
// let input2 = document.querySelector('.input2');
// let button = document.querySelector('button');
// let out = document.querySelector('.out');

// button.onclick = function() {
//   let a = input1.value;
//   let b = input2.value;
//   if (a != '' && b != '') {
//     out.innerHTML = (a ** b);
//   }
// }


// 10
// let input = document.querySelector('input');
// let button = document.querySelector('button');

// button.onclick = function() {
//   let a = input.value;
//   if (a == '') {
//     alert('Введите ваше имя');
//   }
//   else if (a == ' ') {
//     alert('Введите ваше имя');
//   }
//   else {
//     alert('Привет, ' + a);
//     input.value = '';
//   }
// }


// 11
// let input = document.querySelector('input');
// let button = document.querySelector('button');

// button.onclick = function() {
//   let a = input.value;
//   a = a.trim();
//   if (a == '') {
//     alert('Ошибка');
//     alert('Введите ваше имя');
//   }
//   else {
//     alert('Привет ' + a);
//   }
// }


// 12
// let select = document.querySelector('select');
// let button = document.querySelector('button');

// button.onclick = function() {
//   let a = +select.value;
//   switch (a) {
//     case 1:
//       console.log(1);
//       break;
//     case 2:
//       console.log(2);
//       break;
//     case 3:
//       console.log(3);
//     break;
//   }
// }


// 13
// let input = document.querySelector('input');
// let button = document.querySelector('button');
// let out = document.querySelector('.out');

// button.onclick = function() {
//   let a = +input.value;
//   if (a >= 1 && a <= 5) {
//     out.innerHTML = ('Улица 1');
//   }
//   else if (a >= 6 && a <= 11) {
//     out.innerHTML = ('Улица 2');
//   }
//   else if (a >= 12 && a <= 20) {
//     out.innerHTML = ('Улица 3');
//   }
// }


// 14
// let input = document.querySelector('input');
// let button = document.querySelector('button');
// let out = document.querySelector('.out');

// button.onclick = function() {
//   let a = input.value;
//   if (a >= 0 && a <= 25) {
//     out.innerHTML = ('Не обнаруживается');
//   }
//   else if (a >=26 && a <= 50) {
//     out.innerHTML = ('Снижение числа лимфоцитов');
//   }
//   else if (a >=51 && a <= 100) {
//     out.innerHTML = ('Вялость, рвота');
//   }
//   else if (a >=101 && a <= 150) {
//     out.innerHTML = ('Сместность 5%');
//   }
//   else if (a >151 && a <= 350) {
//     out.innerHTML = ('Смертность 50% за 30 суток');
//   }
//   else if (a >=351 && a <= 600) {
//     out.innerHTML = ('90% смертность за 2 недели');
//   }
//   else if (a > 600) {
//     out.innerHTML = ('смертность 100%');
//   }
// }


// 15
// let x = 10;
// let y = 20;
// console.log(x || y);


// 16
// let input = document.querySelector('input');
// let button = document.querySelector('button');
// let out = document.querySelector('.out');

// button.onclick = function() {
//   let a = input.value;
//   if (a > 0 && a <= 499) {
//     out.innerHTML = ('2525 тенге');
//   }
//   else if (a >= 500 && a <= 1199) {
//     out.innerHTML = ('5050 тенге');
//   }
//   else if (a >= 1200 && a <= 1599) {
//     out.innerHTML = ('8275 тенге');
//   }
//   else if (a >= 1600 && a <= 1899) {
//     out.innerHTML = ('9675 тенге');
//   }
//   else if (a >= 1900 && a <= 1999) {
//     out.innerHTML = ('11075 тенге');
//   }
//   else if (a >=2000) {
//     out.innerHTML = ('15000 тенге');
//   }
// }

// 17
// let input = document.querySelector('input');
// let select1 = document.querySelector('.s1');
// let select2 = document.querySelector('.s2');
// let button = document.querySelector('button');
// let out = document.querySelector('.out');

// button.onclick = function () {
//   let a = input.value;
//   let b = select1.value;
//   let c = select2.value;


//     if (b == 1 && c == 1) {
//       out.innerHTML = (a);
//     }
//     else if (b == 1 && c == 2) {
//       out.innerHTML = (a * 0.90);
//     }
//     else if (b == 1 && c == 3) {
//       out.innerHTML = (a * 24.61);
//     }
//     else if (b == 1 && c == 4) {
//       out.innerHTML = (a * 63.56);
//     }

//     else if (b == 2 && c == 1) {
//       out.innerHTML = (a * 1.11);
//     }
//     else if (b == 2 && c == 2) {
//       out.innerHTML = (a);
//     }
//     else if (b == 2 && c == 3) {
//       out.innerHTML = (a * 27.20);
//     }
//     else if (b == 2 && c == 4) {
//       out.innerHTML = (a * 70.26);
//     }

//     else if (b == 3 && c == 1) {
//       out.innerHTML = (a / 24.61);
//     }
//     else if (b == 3 && c == 2) {
//       out.innerHTML = (a / 27.20);
//     }
//     else if (b == 3 && c == 3) {
//       out.innerHTML = (a);
//     }
//     else if (b == 3 && c == 4) {
//       out.innerHTML = (a * 2.58);
//     }

//     else if (b == 4 && c == 1) {
//       out.innerHTML = (a / 63.56);
//     }
//     else if (b == 4 && c == 2) {
//       out.innerHTML = (a / 70.26);
//     }
//     else if (b == 4 && c == 3) {
//       out.innerHTML = (a / 2.58);
//     }
//     else if (b == 4 && c == 4) {
//       out.innerHTML = (a);
//     }
// }

