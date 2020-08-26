// for (let i = 0; i < 6; i++) {
//   console.log(i);
// }

// let k = 0;
// while (k < 5) {
//   console.log('k' + k);
//   k++;
// }

// находим сумму чисел от 1 до 10
// let a = 0;
// let i = 0;

// while(a < 11) {
//   i = i + a;
//   a++;
// }

// console.log(i);


// выводим звёздочки
let out = document.querySelector('.out');

let p = 0;
let outStr = '';
let flag = 3;

while(p < 4){
  let p1 = 0;
  while(p1 < 4) {
    if(p1 < flag){
      outStr += '&nbsp';
    }
    else{
      outStr += '*';
    }
    p1++; 
  }
  flag--;
  outStr += '<br>';
  p++;
}

out.innerHTML = outStr;
