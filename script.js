'use strict'

/* ==========================
=============Selectors============= 
==========================*/
const screen = document.querySelector('.screen');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const multiplication = document.querySelector('.multiplication');
const division = document.querySelector('.division');
const clear = document.querySelector('.clear');
const equal = document.querySelector('.equal');
const deleteButton = document.querySelector('.delete');

/* Numbers */
const zero = document.querySelector('.zero');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');


/* ==============================
=============FUNCTIONALITIES============= 
================================*/
let currentNumber = [];


/* ==========================
=============BUTTONS============= 
==========================*/
plus.addEventListener('click', function() {
    currentNumber.push('+');
})

minus.addEventListener('click', function() {
    currentNumber.push('-');
})

multiplication.addEventListener('click', function() {
    currentNumber.push('*');
})

division.addEventListener('click', function() {
    currentNumber.push('/');
})

equal.addEventListener('click', function() {
    let result = eval(currentNumber.join(''));
    currentNumber = [];
    console.log(result);
})

clear.addEventListener('click', function() {
    screen.textContent = '';
    currentNumber = [];
});


/* ==========================
=============NUMBERS============= 
==========================*/
zero.addEventListener('click', function() {
    /* screen.textContent = 2; */
    currentNumber.push('0');
    console.log(currentNumber);
})

one.addEventListener('click', function() {
    /* screen.textContent = 2; */
    currentNumber.push('1');
    console.log(currentNumber);
})


two.addEventListener('click', function() {
    /* screen.textContent = 2; */
    currentNumber.push('2');
    console.log(currentNumber);
})

three.addEventListener('click', function() {
    /* screen.textContent = 3; */
    currentNumber.push('3');
    console.log(currentNumber);
})

four.addEventListener('click', function() {
    /* screen.textContent = 2; */
    currentNumber.push('4');
    console.log(currentNumber);
})

five.addEventListener('click', function() {
    /* screen.textContent = 2; */
    currentNumber.push('5');
    console.log(currentNumber);
})

six.addEventListener('click', function() {
    /* screen.textContent = 2; */
    currentNumber.push('6');
    console.log(currentNumber);
})

seven.addEventListener('click', function() {
    /* screen.textContent = 2; */
    currentNumber.push('7');
    console.log(currentNumber);
})

eight.addEventListener('click', function() {
    /* screen.textContent = 2; */
    currentNumber.push('8');
    console.log(currentNumber);
})

nine.addEventListener('click', function() {
    /* screen.textContent = 2; */
    currentNumber.push('9');
    console.log(currentNumber);
})














