let out = document.querySelector('.out');

// for (let i = 0; i < 5; i++) {

//   for (let k = 0; k < 10; k++){
//     out.innerHTML += k;
//   }
//   out.innerHTML += ' ' + '<br>';
// }


// for(let i = 2; i <= 9; i++){

//   for (let k = 1; k <= 9; k++) {
//     // out.innerHTML += '3*' + i + '=' + (i*3) + '<br>';
//     out.innerHTML += `${i}*${k}=${i * k}<br>`;  //интерполяция
//   }
//   out.innerHTML += '<hr>';
// }

// погнали задачи-----------------------

// 1
// for(i = 0; i < 3; i++) {

//   for(k = 0; k < 3; k++) {
//     out.innerHTML += '*';
//   }
//   out.innerHTML += '_';
// }

// 2
// for(i = 1; i < 4; i++) {
//   out.innerHTML += i + '<br>';
//   for(k = 1; k < 4; k++) {
//     out.innerHTML += '* ' + '_';
//   }
//   out.innerHTML += '<br>';
// }

//3
// for(i = 0; i < 4; i++) {
//   for(k = 0; k < 3; k++){
//     out.innerHTML += '*_';
//   } 
//   out.innerHTML += '<br>';
// }


// 4
// for(i = 1; i < 4; i++){
//   out.innerHTML += i + '_';

//   for(k = 1; k < 6; k++) {
//     out.innerHTML += k + ' ';
//   }

// }


// 5
// for(i = 0; i < 3; i++) {
//   for(k = 0; k < 6; k++) {
//     let a = k % 2;
//     if(a == 0) {
//       out.innerHTML += 1;
//     }
//     else{
//       out.innerHTML += 0;
//     }
//   }
//   out.innerHTML += '<br>';
// }


// 6
// for(i = 0; i < 3; i++) {
//     for(k = 0; k < 7; k++) {
//       if(k == 0 || k == 5){
//         out.innerHTML += 1;
//       }
//       else if(k == 1 || k == 4) {
//         out.innerHTML += 0;
//       }
//       else if(k == 3 || k == 6) {
//         out.innerHTML += 'x';
//       }
//     }
//     out.innerHTML += '<br>';
//   }


// 7
// for(i = 1; i < 6; i++) {
//   for(k = 0; k < i; k++){
//     out.innerHTML += '*';
//   }
//   out.innerHTML += '<br>';
// }


// 8
// for(i = 5; i > 0; i--) {
//   for(k = i; k > 0; k--) {
//     out.innerHTML += '*';
//   }
//   out.innerHTML  += '<br>';
// }


// 9
// for(i = 1; i < 6; i++) {
//   for(k = 1; k <= i; k++) {
//     out.innerHTML += k;
//   }
//   out.innerHTML += '<br>'; 
// }


// 10
// for(i = 0; i < 6; i++) {
//   for(k = 0; k < 10; k++){
//     let a = (i * 10 + k);

//     if(a < 10) {
//       a = '0' + a;
//     }
    
//     out.innerHTML += a + ' ';
//   }
//   out.innerHTML += '<br>';
// }


// Задачи на прокачку------------------------------------------

// 1
// for(i = 1; i < 11; i++) {
//   for(k = 1; k < 11; k++) {
//     out.innerHTML += i + 'x' + k + '=' + (i * k) + '<br>';
//   }
//   out.innerHTML += '<br>';
// }


// 2
// for(i = 0; i < 3; i++) {
//   for(k = 0; k < 5; k++) {
//     out.innerHTML += '*';
//   }
//   out.innerHTML += '<br>';
// }


// 4
// for(i = 5; i > 0; i--) {
//   for(k = i; k > 0; k--) {
//     out.innerHTML += '*';
//   }
//   out.innerHTML += '<br>';
// }


// 5
// for(i = 1; i < 4; i++) {
//   if(i == 1) {
//     out.innerHTML += '&nbsp&nbsp';
//   }
//   else if(i == 2) {
//     out.innerHTML += '&nbsp';
//   }
//   for(k = 1; k < 6; k++) {
    
//       out.innerHTML += '*';
    
//   }
//   out.innerHTML += '<br>';
// }


// 6
// for(let i = 0; i < 5; i++) {
//   for(let k = 0; k < 3; k++) {
//     if(i == 0 && (k == 1 || k ==2)){
//       out.innerHTML += ' ';
//     }
//     else if(i == 1 && k ==2){
//       out.innerHTML += ' ';
//     }
//     else if(i == 3 && k == 2) {
//       out.innerHTML +=' ';
//     }
//     else if(i == 4 && (k == 1 || k == 2)) {
//       out.innerHTML +=' ';
//     }
//     else{
//       out.innerHTML += '*';
//     }
//   }
//   out.innerHTML += '<br>';
// }


// 7
// for(let i = 1; i < 10; i++) {
 
//     for(let k = 1; k < 10; k++) {
//       if(i%2 == 0){
//         out.innerHTML += ' ';
//       }
//       else if((i == 1 || i ==9) && (k == 7 || k == 8 || k == 9)) {
//           out.innerHTML += '&nbsp';
//       }
//       else if((i == 3 || i == 5 || i == 7) && (k == 2 || k == 3 || k == 4 || k == 5 || k == 6 || k == 7 || k == 8 )){
//         out.innerHTML += '&nbsp&nbsp';
//       }
//       else{
//           out.innerHTML += '*';
//       }
      
//     }
//     out.innerHTML += '<br>';
//   }


// 8 
// for(let i = 0; i < 5; i++){
//     for(let k = 5; k > 0; k--){
//         if(i == 1 && k == 5) {
//             out.innerHTML += ' ';
//         }
//         else if(i == 2 && (k == 5 || k ==4)) {
//             out.innerHTML += ' ';
//         }
//         else if(i == 3 && (k == 5 || k == 4 || k == 3)) {
//             out.innerHTML += ' ';
//         }
//         else if(i == 4 && (k == 5 || k == 4 || k == 3 || k == 2)) {
//             out.innerHTML += ' ';
//         }
//         else{
//             out.innerHTML += k;
//         }
//     }
//     out.innerHTML += '<br>';
// }


// 9

