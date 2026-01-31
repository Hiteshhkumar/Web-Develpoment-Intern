// console.log('This is a Java Script File');

// let name = 'Hitesh'
// const city = 'Marwad'

// let age = 15;
// if (age >=18) {
//     console.log('Adult')
// } else {
//     console.log('Minor')
// }

// console.log(name,city);

// // Function Decleration
// console.log(add(5,10));

// function add(a,b) {
//     return a+b;
// }

// // Function Expression
// const Multiply = function(x,y) {
//     return x * y
// }

// console.log(Multiply(10,5))

// // Arrow Function
// const greet = (name) => {
//     return 'Welcome' + name;
// }

let count = 0;

function increase() {
    count ++;
    document.getElementById('count').innerText = count;
}

function decrease() {
    count --;
    document.querySelector('#count').innerText = count;
}

function changebg() {
    let r = Math.trunc(Math.random() * 256);
    let g = Math.trunc(Math.random() * 256);
    let b = Math.trunc(Math.random() * 256);

    const bodybg = document.querySelector('body');
    bodybg.style.cssText = `background-color: rgb(${r} ${g} ${b})`;

    const h2_bg = document.querySelector('#rgb');
    h2_bg.innerHTML = `RGB: (${r} ${g} ${b})`
}