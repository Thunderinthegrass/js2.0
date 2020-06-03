// document.querySelector('button').onclick = function() {
//   console.log(document.querySelector('.one').value);

//   document.querySelector('button').style.backgroundColor = 
//   document.querySelector('.one').value;
// }

// document.querySelector('.one').oninput = () => {
//   console.log(document.querySelector('.one').value);
//   document.querySelector('.out').innerHTML = document.querySelector('.one').value;
// }


// document.querySelector('.btn2').onclick = function() {
//   console.log(document.querySelector('#i2').value);
//   let myCheckBox = document.querySelector('#i2');
//   if (myCheckBox.checked) {
//     console.log('Нажат');
//   }
//   else {
//     console.log('Не нажат');
//   }
// }


// document.querySelector('.btn3').onclick = (event) => {
//   event.preventDefault();
//   // let text = document.querySelector('#ta1');
//   // console.log(text.value);
//   // text.value = 'one';
//   let form = document.querySelector('form');
//   console.log(form);
//   console.log(form.elements.ta1.value);
//   console.log(form.elements.i2.value);
// }



// Задания

// 1
// let btn = document.querySelector('button');

// btn.onclick = () => {
//   alert('Task 1');
// }


// 2
// let btn = document.querySelector('input');

// btn.onclick = () => {
//   alert('Task 1');
// }


// 3
// let btn = document.querySelector('p');

// btn.onclick = () => {
//   alert('Task 1');
// }


// 4
// let btn = document.querySelector('button');
// let out = document.querySelector('.out');

// btn.onclick = () => {
//   let cb = document.querySelector('#cb');
//   console.log(cb.checked);
//   if (cb.checked) {
//     out.innerHTML = ('включено');
//   }
//   else {
//     out.innerHTML = ('выключено');
//   }
// }


// 4
//переключатель языка и стилей

let btn = document.querySelector('button');
let out = document.querySelector('.out');
let cont = document.querySelector('.container');
let cb = document.querySelector('#cb');
let en = document.querySelector('.en');

cb.onclick = () => {
 
  console.log(cb.checked);
  if (cb.checked) {
   out.innerHTML = ('Hello, Daria!')
   en.style.textShadow = '0 0 5px #13b3ff, 0 0 15px #13b3ff';
   en.style.color = '#13b3ff';
  //  cont.style.backgroundColor = '#ffffff';
  }
  else {
    out.innerHTML = ('Здравствуй, Дарья!')
    en.style.textShadow = 'none';
    en.style.color = '#517383';
    cont.style.backgroundColor = '#292929';
    cont.style.transition = '.5s';
  }
}


// 5
// let cb = document.querySelector('#cb');
// let btn = document.querySelector('button');
// let out = document.querySelector('.out');

// btn.onclick = () => {
//   console.log(cb.value);
// }


// 6
// let input = document.querySelector('input');
// let btn = document.querySelector('button');

// btn.onclick = function() {
//   alert(input.value);
// }


// 7 проверка на длину пароля
// let input = document.querySelector('input');
// let btn = document.querySelector('button');
// let out = document.querySelector('.out');

// btn.onclick = function() {
//   let a = input.value;
//   console.log(a);
//   if (a.length < 6) {
//     out.innerHTML = ('Слишком короткий пароль');
//   }
//   else {
//     out.innerHTML = 'Нормальный пароль';
//   }
// }


// 8
// let btn = document.querySelector('.btn');
// let out = document.querySelector('.out');

// btn.onclick = () => {
// out.innerHTML = '<input> <button class="btn2">жмяк';
// let btn2 = document.querySelector('.btn2');
// let input = document.querySelector('input');

// btn2.onclick = function() {
//   let a = input.value;
//   alert(a);
// }
// }


// 9
// let radio = document.querySelector('input');
// let btn = document.querySelector('button');

// btn.onclick = function() {
//   if (radio.checked) {
//     alert(radio.value);
//   }
//   else {
//     alert(false);
//   }
// }



// 10
// let input = document.querySelector('input');
// let btn = document.querySelector('button');
// let out = document.querySelector('.out');

// btn.onclick = () => {
//   let a = input.value;
//   out.style.backgroundColor = a;
// }


// 11
// let input1 = document.querySelector('.input1');
// let input2 = document.querySelector('.input2');
// let btn = document.querySelector('button');

// btn.onclick = () => {
//   let a = input1.value;
//   input2.value = a;
// }


// 12
// let input = document.querySelector('input');
// let btn = document.querySelector('button');
// let out = document.querySelector('.out');

// btn.onclick = () => {
//     out.innerHTML = input.value;
//   }


// 13
// let input = document.querySelector('input');
// let btn = document.querySelector('button');
// let out = document.querySelector('.out');

// btn.onclick =() => {
//   out.innerHTML = input.value;
// }

// input.oninput = () => {
//   out.innerHTML = input.value;
// }


// 14
// let ta = document.querySelector('textarea');
// let btn = document.querySelector('button');
// let out = document.querySelector('.out');

// btn.onclick = function() {
//   out.innerHTML = ta.value;
// }


// 15
// let ta = document.querySelector('#ta');
// let input = document.querySelector('input');
// let btn = document.querySelector('button');
// let out = document.querySelector('.out');

// btn.onclick = () => {
//   out.innerHTML = input.value;
//   ta.value = input.value; 
// }


// 16
// let select = document.querySelector('select');
// let opt = document.querySelector('option');
// let btn = document.querySelector('button');
// let out = document.querySelector('.out');

// btn.onclick = () => {
//   out.innerHTML = select.value;
// }


// 17
// Не делаем!


// 18
// let sel = document.querySelector('#sel');
// let opt = document.querySelector('option');
// let btn = document.querySelector('button');
// let out = document.querySelector('.out');

// sel.onchange = function() {
//   out.innerHTML = sel.value;
// }


// 19
// let inp1 = document.querySelector('.inp1');
// let inp2 = document.querySelector('.inp2');
// let btn = document.querySelector('button');

// btn.onclick = function() {
//   let a = inp1.value;
//   let b = inp2.value;
//   console.log(a);
//   console.log(b);
// }


// 20
// let form = document.forms.f1;
// let inp1 = form.elements.inp1;
// let inp2 = form.elements.inp2;
// let btn = document.querySelector('button');

// btn.onclick = function() {
//   console.log(inp1.value);
//   console.log(inp2.value);
// }
