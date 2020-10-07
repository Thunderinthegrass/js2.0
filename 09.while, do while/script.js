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

// находим сумму чисул от 0 до 10
// let k = 0;
// let z = 0;

// while (k < 10) {
//   k++;
//   z = z + k;
// }
// console.log('сумма чисел от 1 до 10 = ' + z);



// выводим фигуру: 
// ****
// ****
// ****
let out = document.querySelector('.out');
let k = 0;
let outStr = '';
while (k < 4) {
  let k1 = 0;
  while(k1 < 4) {
  outStr += '*'
  k1++;
  }
  outStr += '<br>';
  k++;
}

out.innerHTML = outStr;