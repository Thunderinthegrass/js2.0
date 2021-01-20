// let a = 5;
// let b = 'Hello!';

// let inputIn = document.querySelector('.input-in');
// let button = document.querySelector('button');
// let div = document.querySelector('.out');

// button.onclick = function (){
//   console.log('функция работает!');
//  // console.log(inputIn.value);//value - то,что введено в input
//   let b = +inputIn.value;// плюс позволяет перевести в число
//   console.log(b * 2);
//   div.innerHTML = b;
//   inputIn.value = '';
// }

//Задачи

//1
// let a = 7;
// let b = 9;
// console.log(a * b);

//2
// let c = 7;
// let d = 9;
// console.log(c / d);

//3
// let e = 3;
// let f = 5;
// console.log(e + f);

//4
// e1 = '3';
// f1 = 5;
// console.log(e1 + f1);

//5
// let e2 = 3;
// let f2 = 0;
// console.log(e2 / f2);

//6
// e3 = 3;
// f3 = 'hello';
// console.log(e3 + f3);

//7
// e4 = 3;
// f4 = 'hello';
// console.log(e4 * f4);

//8
// let inputIn = document.querySelector('input');
// let button = document.querySelector('button');

// button.onclick = function(){
//   console.log(inputIn.value);
// }

//9
// let inputIn = document.querySelector('input');
// let button = document.querySelector('button');

// button.onclick = function(){
//   console.log(inputIn.value);
//   inputIn.value = '';
// }

//10
// let inputIn = document.querySelector('input');
// let button = document.querySelector('button');

// button.onclick = function(){
//   let b = inputIn.value;
//   console.log(b * 10);
//}

//11
// let inputIn = document.querySelector('input');
// let button = document.querySelector('button');
// let out = document.querySelector('.out');

// button.onclick = function(){
//   let b = inputIn.value;
//   out.innerHTML = (b * 10);
// }

//12
// let nameUser = document.querySelector('.nameUser');
// let surnameUser = document.querySelector('.surnameUser');
// let patronymicUser = document.querySelector('.patronymicUser');
// let button = document.querySelector('button');
// let hello = document.querySelector('.hello');

// button.onclick = function(){
//   let a = patronymicUser.value;
//   let b = nameUser.value;
//   let c = surnameUser.value;
//   let d = ' ';
//   hello.innerHTML = ('Здравствуй, свет мой ' + b + d + a + d + c);
//   nameUser.value = '';
//   surnameUser.value = '';
//   patronymicUser.value = '';
// };

//13
// let one = document.querySelector('.one');
// let two = document.querySelector('.two');
// let btn = document.querySelector('.btn');
// let text = document.querySelector('.text');

// btn.onclick = function(){
//   let a = +one.value;
//   let b = +two.value;
//   let c = (a + b);
//   text.innerHTML = (c);
// }

// 14
// let a = document.querySelector('input');
// a.value = ('Hello');

// 15
// let y = document.querySelector('input');
// y.style.border = '2px solid red';

// 16
// let one = document.querySelector('.one');
// let two = document.querySelector('.two');
// let btn = document.querySelector('.btn');
// let sum = document.querySelector('.sum');

// btn.onclick = function(){
//   let a = +one.value;
//   let b = +two.value; 
//   let e = (a + b);
//   sum.innerHTML = (e);
// }

// let a = document.querySelector('input');
// let btn = document.querySelector('.btn');

// btn.onclick = function(){
//   let t = a.value;
//   t = parseInt(t);
//   console.log(t);
// }

// JavaScript получаем данные из input, select, checkbox, range, radio, textarea, form-----------------------------------------------------------------------------------------------------------------------------------------
//1.text
document.querySelector('.b-1').addEventListener('click', ()=>{
  let i1 = document.querySelector('.i-1').value;
  document.querySelector('.out-1').innerHTML = i1;
  //document.querySelector('.i-1').value = 'Привет';//записываем значение
})

//2.number
document.querySelector('.b-2').addEventListener('click', ()=>{
  let i1 = document.querySelector('.i-2').value;//получаем всё равно строку, потому что в html нет типов данных, и всё, что мы оттуда получаем - строка
  document.querySelector('.out-2').innerHTML = i1;
  //document.querySelector('.i-2').value = 'Привет';//записываем значение
})

//3.color
document.querySelector('.b-3').addEventListener('click', ()=>{
  let i3 = document.querySelector('.i-3').value;//получаем всё равно строку, потому что в html нет типов данных, и всё, что мы оттуда получаем - строка
  document.querySelector('.out-3').innerHTML = i3;
  //document.querySelector('.i-2').value = 'Привет';//записываем значение
  //#08f7e7
})

//4.date
document.querySelector('.b-4').addEventListener('click', ()=>{
  let i4 = document.querySelector('.i-4').value;
  document.querySelector('.out-4').innerHTML = i4;
  //document.querySelector('.i-4').value = 'Привет';//записываем значение
})

//5.range
document.querySelector('.b-5').addEventListener('click', ()=>{
  let i5 = document.querySelector('.i-5').value;
  document.querySelector('.out-5').innerHTML = i5;
})

document.querySelector('.i-5').addEventListener('input', ()=>{
  let i5 = document.querySelector('.i-5').value;
  document.querySelector('.out-5').innerHTML = i5;
})


//6.checkbox
document.querySelector('.b-6').addEventListener('click', ()=>{
  let i6 = document.querySelector('.i-6');
  if (i6.checked) {
    document.querySelector('.out-6').innerHTML = 'Выбрано';
  }
  else {
    document.querySelector('.out-6').innerHTML = 'Не выбрано';
  }
  //document.querySelector('.i-5').value = 'Привет';//записываем значение
})

document.querySelector('.b-6-1').addEventListener('click', ()=> {
  if(document.querySelector('.i-6').checked) {
    document.querySelector('.i-6').checked = false;
  }
  else{
    document.querySelector('.i-6').checked = true;
  }//сделали по нажатию кнопки включение и сброс checked
  
})


//7.radio
document.querySelector('.b-7').addEventListener('click', ()=>{

  let radio = document.querySelectorAll('.i-7');
  // radio[2].checked = true;//так тоже можно

  for (let i = 0; i < radio.length; i++) {
    // let data = radio[i].value;
    // out7.innerHTML = data;
    if (radio[i].checked) {
      data = radio[i].value;
      break;
    }
  }
  document.querySelector('.out-7').innerHTML = data;
})



//8.password
document.querySelector('.b-8').addEventListener('click', ()=>{
  let i8 = document.querySelector('.i-8').value;

  document.querySelector('.out-8').innerHTML = i8;
})



//9.email
document.querySelector('.b-9').addEventListener('click', ()=>{
  let i9 = document.querySelector('.i-9').value;

  let z = 0;

  for (let i = 0; i < i9.length; i++) {
    if (i9[i] != '@') {
      z++;
    }
    if (z == i9.length) {
      document.querySelector('.out-9').innerHTML = 'Введите корректный E-mail';
    }
    else {
      document.querySelector('.out-9').innerHTML = '';
    }//проверка на ввод емэйла
  }

  // document.querySelector('.out-9').innerHTML = i9;
})


//select
document.querySelector('.b-10').addEventListener('click', ()=>{
  let i10 = document.querySelector('.s-10').value;

  document.querySelector('.out-10').innerHTML = i10;

  // document.querySelector('.s-10').value = '2';//теперь по умолчанию будет выбран селект номер 2
})


document.querySelector('.b-11').addEventListener('click', ()=>{
  let i11 = document.querySelector('.i-11').value;

  document.querySelector('.out-11').innerHTML = i11;

  // document.querySelector('.i-11').value = '2';//теперь по умолчанию будет выбран селект номер 2
})


//form
document.querySelector('form').addEventListener('submit', (event)=>{
  event.preventDefault();//предотвращает перезагрузку страницы
  const form = document.querySelector('form');
  console.dir(form.elements.myinput.value);
  console.dir(form.elements);
  form.reset();//очистить форму, Чтоб не прописывать каждому элементу value = '';
})
