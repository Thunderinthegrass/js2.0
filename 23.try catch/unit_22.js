//код урока
// let z = 5;
// z = z * 2;
// try {
//     document.querySelector('.z-test').innerHTML = z;
// }
// catch(err) {
//     console.log('Ошибка есть!!!', err);
// }
// finally {
//     console.log('это finally, оно выполнится всегда, независимо от того, были ли ошибки');
// }
// console.log(z);
// z1();

// function z1() {
//     console.log('Привет');
// }

//  Task 1
// Добавьте в код функции try catch так, чтобы вместо ошибки выводилось в out-1 цифра 1.


function t1() {
    // тут добавляете try
    let a = 22;
    try {
        let c = a + d;
    }
    catch(err) {
        console.log('тут вот такая ошибка:', err);
    }
    // тут catch
    // .. и вывод
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// Добавьте в код функции try catch так, чтобы вместо ошибки был вывод результата в out-2.

function t2() {
    let a = 4;
    let b = 5;
    try {
        document.querySelector('.out-2222222').innerHTML = a*b;
    }
    catch(err) {
        document.querySelector('.out-2').innerHTML = ('тут возникла ошибка: ' + err);
    }

}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// Добавьте в код функции try catch так, чтобы вместо ошибки был вывод результата в out-3. Если его нет - создавайте в коде. 
// т.е. вы не знаете будет или нет он в html.

function t3() {
    let a = 4;
    let b = 5;
    try {
        document.querySelector('.out-3').innerHTML = a*b;
    }
    catch(err) {
        let div = document.createElement('div');
        div.className = 'out-3';
        document.body.append(div);
        div.innerHTML = a*b;
    }
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// Дана переменная a. В переменную делается push. Используя try catch отловите ошибки если они есть. Если ошибка вывести в out-4 число 0. Если не ошибка - то результирующий массив через пробел.

try {
    let a = [2,3,4];
// a = 5;
function t4() {
    a.push(7);
}
}
catch(err) {
    document.querySelector('.out-4').innerHTML = err;
}

document.querySelector('.b-4').onclick = t4;
// document.querySelector('.out-4').innerHTML = a;



//  Task 5
// Добавьте try, catch, finnaly так, чтобы в out-5 выводился 0 при ошибки. А в out-5-1 всегда выводилось слово 'finnaly';

function t5() {
    let p = document.querySelectorAll('p');
    p.push(3);
}

document.querySelector('.b-5').onclick = t5;

