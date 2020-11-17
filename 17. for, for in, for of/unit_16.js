//код урока
// let a = [1,2,3];
// for (let i = 0; i < a.length; i++) {
//     console.log(a[i]);//выводит значение
//     // console.log(i);//выводит индекс
// }

// let b = [4,5,6];
// for (let key in b) {
//     // console.log(key);//выводит индекс
//     // console.log(b[key]);//выводит значение
// }

// let z = [1,2,3];
// for (let item of z) {
//     // console.log(item);//выводит значение
//     console.log(z[item]);//выведет undefined, потому что цикл for of предполагает перебор сразу значений. При каждой итерации переменной присваивается значение нового свойства объекта
// }


// let c = {
//     'one':10,
//     'two':[77,88,100],
//     'three':'тридцать',
// }
// console.log(c.two[1]);
// for (let key in c) {
//     console.log(key);
//     console.log(c[key]);
// }



// let p = document.getElementsByClassName('p');
// console.log(p);
// for (let i = 0; i < p.length; i++) {
//     console.log(p[i]);// выведет элементы вместе с содержимым
// }
// for (let key in p) {
//     console.log(key);//выведет не то, что нужно, этот цикл не подходит для вывода HTML-коллекции
// }
// for (let item of p) {
//     console.log(item);//тоже выведет элементы вместе с содержимым
// }

// Task 1
//При нажатии .b-1 выполняете функцию f1. Функция перебирает массив a1  c помощью цикла for (let i. Выведите на страницу в .out-1 формате значение+пробел.

let a1 = [5, 7, 9, 11, 13, 15];
let out1 = document.querySelector('.out-1');

function f1() {
    let z = '';
    for (let i = 0; i < a1.length; i++) {
        z += a1[i] + ' ';
    }
    out1.innerHTML = z;
}

document.querySelector('.b-1').addEventListener('click', f1);

// Task 2
//При нажатии .b-2 выполняете функцию f2. Функция перебирает массив a2  c помощью цикла for (let i. Выведите на страницу в .out-2 формате индекс+пробел+значение+пробел.

let a2 = [5, 7, 9, 11, 13, 15];
let out2 = document.querySelector('.out-2');

function f2() {
    let z = '';
    for (let i = 0; i < a2.length; i++) {
        z += i + ':' + a2[i] + ' ';
    }
    out2.innerHTML = z;
}

document.querySelector('.b-2').addEventListener('click', f2);

// Task 3
//При нажатии .b-3 выполняете функцию f3. Функция получает div.out-3 со страницы с помощью getElementsByClassName и в каждый записывает число 3, перезаписывая содержимое div.
let d = document.getElementsByClassName('out-3');

function f3() {
    for (let i = 0; i < d.length; i++) {
        d[i].innerHTML = 'Привет';
    }
}

document.querySelector('.b-3').addEventListener('click', f3);


// Task 4
//При нажатии .b-4 выполняете функцию f4. Функция получает div.out-4 со страницы с помощью querySelectorAll и в каждый дописывает число 4.
let out4 = document.querySelectorAll('.out-4');

function f4() {
    for (let i = 0; i < out4.length; i++) {
        out4[i].innerHTML += 4;
    }
}

document.querySelector('.b-4').addEventListener('click', f4);

// Task 5
//При нажатии .b-5 выполняете функцию f5. Функция должна с помощью for of перебрать массив a5 и возвратить новый массив куда входят элементы из a5 большие 7.

let a5 = [3, 4, 5, 2, 1, 7, 8, 2, 4, 6, 8, 11, 23, 17];

function f5() {
    let a = [];
    for (let item of a5) {
        if (item > 7) {
            a += item + ' ';
        }
    }
    return a;
}

document.querySelector('.b-5').addEventListener('click', () => {
    document.querySelector('.out-5').innerHTML = f5();
});

// Task 6
//При нажатии .b-6 выполняете функцию f6. Функция должна превратить массив a6 в одномерный. Результат вывести в out-6 через пробел.

let a6 = [[1, 2], [3, 4], [5, 6]];
let out6 = document.querySelector('.out-6');

function f6() {
    let z = [];
    for (let i = 0; i < a6.length; i++) {
        for (let item of a6[i]) {
            z += item + ' ';
            console.log(item);
        }
    }
    out6.innerHTML = z;
    console.log(z);
}

document.querySelector('.b-6').addEventListener('click', f6);

// Task 7
//При нажатии .b-7 выполняете функцию f7. Функция должна переиндексировать массив a7. Что имеется ввиду. Сейчас у нас обычный массив, который содержит вложенные объекты. Вам необходимо сделать из a7 объект, где ключи - значения id из вложенных массивов, а значения - имя (т.е { 23 : Ivan, 45 : Petr}. Функция должна возвращать результирующий массив.

let a7 = [{ id: 23, name: 'Ivan' }, { id: 45, name: 'Petr' }];
let az = {};

function f7() {
    let z = {};
    // for (let key in az) {
    //    key = az[key];
    //    console.log(key);  
    // }
    // // z = az;
    // // return z;


    for (let i = 0; i < a7.length; i++) {
        // console.log(a7[i]);
        console.log(a7[i]);
        // for (let key in a7[i]) {
        //     z += a7[i][key];
        // }
    }
    // return z;
}

document.querySelector('.b-7').addEventListener('click', () => {
    console.log(f7());
});


// Task 8
//При нажатии .b-8 выполняете функцию f8. Функция должна переиндексировать массив a8. Что имеется ввиду. Сейчас у нас обычный массив, который содержит вложенные объекты. Вам необходимо сделать из a8 массив, который будет содержать только числовые id. Т.е. [23, 45]. Функция должна возвращать результирующий массив.

let a8 = [{ id: 23, name: 'Ivan' }, { id: 45, name: 'Petr' }];

function f8() {
    for (let i = 0; i < a8.length; i++) {
        // console.log(a8[i]);
        for (let key in a8[i]) {
            console.log(key);
            if (typeof(a8[i].key) == Number) {
                a8[i].key = a8[i].key;
            }
        }
        // console.log(a8);
    }
    return a8;
}

document.querySelector('.b-8').addEventListener('click', () => {
    console.log(f8());
});

// Task 9
//При нажатии .b-9 выполняете функцию f9. Функция должна возвращать в out-9 самый большой индекс из вложенных в a9 массивов. В данном случае это 4. Т.е. самый большой вложенный массив это [0,0,0,0,0], а в нем самый большой индекс 4.

let a9 = [[4, 3, 2], [2, 5], [0, 0, 0, 0, 0]];

function f9() {
    let z = 0;
    for (let i = 0; i < a9.length; i++) {
        console.log(a9[i].length -1);
        if (a9[i].length - 1 > z) {
            z = a9[i].length - 1;
        }
    }
    return z;
}

document.querySelector('.b-9').addEventListener('click', () => {
    document.querySelector('.out-9').innerHTML = f9();
});

// Task 10
//При нажатии .b-10 выполняете функцию f10. Функция должна преобразовывать массив a10 в ассоциативный массив вида {4: 4, 6: 6, 9: 9, hello : "hello"} и возвращать полученный массив.

let a10 = [4, 6, 9, 'Hello'];

function f10() {
    let aO = {};
    for (let i = 0; i < a10.length; i++) {
        for (let item of a10) {
            let a = a10[i];
            aO.a = item;
        }
    }
    return aO;
}

document.querySelector('.b-10').addEventListener('click', () => {
    console.log(f10());
});

// Task 11
//При нажатии .b-11 выполняете функцию f11. Функция должна c помощью for in перебрать объект a11 и вывести в out-11 только те значения, которые больше 10. Вывод - через пробел.

let a11 = {
    one: 11,
    two: 7,
    three: 13,
    four: 0
}

let out11 = document.querySelector('.out-11');

function f11() {
    let z = '';
    for (let key in a11) {
        if (a11[key] > 10) {
            z += a11[key] + ' ';
        }
    }
    out11.innerHTML = z;
}

document.querySelector('.b-11').addEventListener('click', f11);

// Task 12
//При нажатии .b-12 выполняете функцию f12. Функция должна c помощью for of перебрать a12 и вывести в out-12 через пробел.

let a12 = [4, 5, 6, 7];
let out12 = document.querySelector('.out-12');

function f12() {
    let z = '';
    for (let item of a12) {
        z += item + ' ';
    } 
    out12.innerHTML = z;
}

document.querySelector('.b-12').addEventListener('click', f12);


// Task 13
//При нажатии .b-13 выполняете функцию f13. Функция должна c помощью for of перебрать a13 и вывести по символу в out-13 через пробел.

let a13 = 'testone';
let out13 = document.querySelector('.out-13');


function f13() {
    let z = '';
    for (let item of a13) {
        z += item + ' ';
    }
    out13.innerHTML = z;
}

document.querySelector('.b-13').addEventListener('click', f13);



// Task 14
//При нажатии .b-14 выполняете функцию f14. Функция должна c помощью for of перебрать a14 и вывести по элементам в out-14 через пробел.

let a14 = new Set([4, 5, 6]);
console.log(a14);
let out14 = document.querySelector('.out-14');

function f14() {
    let z = '';
    for (let item of a14) {
        z += item + ' ';
    }
    out14.innerHTML = z;
}

document.querySelector('.b-14').addEventListener('click', f14);

// Task 15
//При нажатии .b-15 выполняете функцию f15. Функция должна получить NodeList элементов .out-15 c помощью document.querySelectorAll, затем c помощью for of перебрать полученную коллекцию элементов .out-15 записать внутрь них число 15 ( затерев содержимое).

let out15 = document.querySelectorAll('.out-15');
console.log(out15);

function f15() {
    for (let item of out15) {
        item.innerHTML = 15;
    }
}

document.querySelector('.b-15').addEventListener('click', f15);