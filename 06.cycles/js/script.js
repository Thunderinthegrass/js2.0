document.querySelector('button').onclick = function f1(){
  let out = '';
  for(let i = 1; i <=50; i++){
    out += i + ' ';
  }
  document.querySelector('.out-1').innerHTML = out;
}
