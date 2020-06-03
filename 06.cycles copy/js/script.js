// let out = document.querySelectorAll('.out');
// console.log(out);
// out.style.backgroundColor = 'red';

// for (let i = 0; i < out.length; i = i + 1) {
//   console.log(out[i]);
//   out[i].style.background = '#AEB3DB';
  // out[i].onclick = two;
// }

// function two() {
//   console.log('привет!!11');  
// }

// let b = document.getElementsByClassName('out');
// let c = document.getElementsByTagName('div');
// console.log(b);
// console.log(c);

// for (let i = 0; i < b.length; i = i + 1) {
//   b[i].style.color = '#212121'; 
// }

// document.querySelector('button').onclick = () => {
//   let r = document.querySelectorAll('input[type="radio"]');
//   console.log(r);
//   for(let i = 0; i < r.length; i++) {
//     if(r[i].checked) {
//       console.log(r[i].value);
//     }
//   }
// }
// document.querySelector('button').onclick = function() {
// let out1 = '';
// for (let i = 0; i < 10; i++) {
//   if(i == 6) continue;
//   out1 += i + ' ';
//   //if (i == 6) break;
// } 

// document.querySelector('.out-1').innerHTML = out1;
// }


// Домашнее задание

// 1
// document.querySelector('button').onclick = function f1() {
//   let out = '';
//   for (let i = 1; i < 51; i++) {
//     out += i + ' ';
//   }

// document.querySelector('.out-1').innerHTML = out;
// }

// 2
// let btn = document.querySelector('.f2');

// let btn = document.querySelector('.f2');
// btn.onclick = () => {
//   let out = '';
//   for(let i = 0; i < 123; i = i + 2) {
//     out += i + ' ';
//   }
//   document.querySelector('.out-2').innerHTML = out;
// }


// 3
// let btn = document.querySelector('.b3');

// btn.onclick = function f3() {
//   let out = '';
//   for(let i = 25; i > 6; i--) {
//     out += i + ' ';
//   }
//   document.querySelector('.out-3').innerHTML = out;
// }


// 4
// let btn = document.querySelector('.b-4');

// btn.onclick = function t4() {
//   let out = '';
//   for (i = 77; i > 34; i = i - 3) {
//     out += i + '_';
//   }
//   document.querySelector('.out-4').innerHTML = out;
// }


// 5
// let btn = document.querySelector('.b-5');
// let out5 = document.querySelector('.out-5'); 

// btn.onclick = function f5() {
//   let out = '';
//   for(i = 1; i < 18; i++) {
//     if(i % 2 ==0) {
//       out += i + '**';
//     }
//     else {
//       out += i + '_*';
//     }
//   }
//   out5.innerHTML = out;
// }


// 6

// let btn = document.querySelector('.b-6');
// let out6 = document.querySelector('.out-6');
// let i6 = document.querySelector('.i-6')

// btn.onclick = function f6() {
//   let out = '';
//   let z = i6.value;
//   for (i = 1; i <= z; i++) {
//   out += '******' + '<br>';
//   if(i <= z) {
//     out6.innerHTML = out;
//   }
//   }
// }


// 7
// let btn = document.querySelector('.b-7');
// let out7 = document.querySelector('.out-7');
// let i7 = document.querySelector('.i-7');

// btn.onclick = function f7() {
//   let out = '';
//   let z = i7.value;
//   for (i = z; i >= 0; i--) {
//   out += i;
//   }
//   out7.innerHTML = out;
// }


// 8
// let btn = document.querySelector('.b-8');
// let out8 = document.querySelector('.out-8');
// let i81 = document.querySelector('.i-81');
// let i82 = document.querySelector('.i-82');

// btn.onclick = function f7() {
//   let out = '';
//   let v1 = i81.value;
//   let v2 = i82.value;
//   for(i = v1; i <= v2; i++) {
//     out += i + ' ';
//   }
//   out8.innerHTML = out;
//  }


// 9
// let btn = document.querySelector('.b-9');
// let out9 = document.querySelector('.out-9');
// let i91 = document.querySelector('.i-91');
// let i92 = document.querySelector('.i-92');


// btn.onclick = function f7() {
//   let out = '';
//   let v1 = i91.value;
//   let v2 = i92.value;
//   if (v1 > v2) {
//     for (i = v2; i <= v1; i++) {
//       out += i + ' ';
//     }
//   }
//   else if (v2 > v1) {
//     for (i = v1; i <= v2; i++) {
//       out += i + ' ';
//     }
//   }
//   out9.innerHTML = out;
// }


// 10
// let btn = document.querySelector('.b-10');
// let out9 = document.querySelector('.out-10');

// btn.onclick = function f10() {
//   let out = '';
//   for(i = 1950; i <=2000; i = i + 2) {
//     out += i + ' ';
//   }
//   out9.innerHTML = out;
// }


// 11

// let btn = document.querySelector('.b-11');
// let d11 = document.querySelectorAll('.div-11');
// let out11 = document.querySelector('.out-11');

// btn.onclick = function f11() {
//   let out = '';
//   for(i = 0; i < d11.length; i++) {
//     out += d11[i].innerHTML + ' ';
//   }

//   out11.innerHTML = out;
// };



// 12
// let btn = document.querySelector('.b-12');
// let d12 = document.querySelectorAll('.div-12');

// btn.onclick = function f12() {
//   for (let i = 0; i < d12.length; i++) {
//     d12[i].style.backgroundColor = 'orange';
//   }
// }



// 13
// let btn = document.querySelector('.b-13');
// let i13 = document.querySelectorAll('.i-13');

// btn.onclick = function f13() {
//   for(let i = 0; i < i13.length; i++) {
//     i13[0].value = 1;
//     i13[1].value = 2;
//     i13[2].value = 3;
//   }
// }


// 14
let btn = document.querySelector('.b-14');
let i14 = document.querySelectorAll('.i-14');
let out = document.querySelector('.out-14');

btn.onclick = function f14() {
  for(i = 0; i < i14.length; i++) {
    i14[0].value = 1;
    i14[1].value = 2;
    i14[2].value = 3;
    if(i14[i].checked) {
      out.innerHTML = i14[i].value;
    }
  }
}