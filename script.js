'use strict'

/* ==========================
=============Selectors============= 
==========================*/
const display = document.querySelector('.display');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const multiplication = document.querySelector('.multiplication');
const division = document.querySelector('.division');
const clear = document.querySelector('.clear');
const equal = document.querySelector('.equal');
const deleteButton = document.querySelector('.delete');
const dot = document.querySelector('.dot');

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
let operation = [];


/* ==========================
=============BUTTONS============= 
==========================*/
plus.addEventListener('click', function() {
    display.textContent = '+';
    operation.push('+');
})

minus.addEventListener('click', function() {
    display.textContent = '-';
    operation.push('-');
})

multiplication.addEventListener('click', function() {
    display.textContent = 'x';
    operation.push('*');
})

division.addEventListener('click', function() {
    display.textContent = '÷';
    operation.push('/');
})

equal.addEventListener('click', function() {
    let result = eval(operation.join(''));
    operation = [];
    display.textContent = result;
    console.log(result);
})

clear.addEventListener('click', function() {
    display.textContent = '0';
    operation = [];
});

deleteButton.addEventListener('click', function(){
    operation.pop();
    display.textContent = operation[operation.length - 1];
    if(display.textContent === '') {
        display.textContent = '0';
    } 
})

dot.addEventListener('click', function() {
    operation.push('.');
    display.textContent = '.'
})


/* ==========================
=============NUMBERS============= 
==========================*/
zero.addEventListener('click', function() {
    display.textContent =  '0';
    operation.push(0);
    console.log(operation);
});

one.addEventListener('click', function() {
    display.textContent =  '1';
    operation.push(1);
    console.log(operation);
});

two.addEventListener('click', function() {
    display.textContent =  '2';
    operation.push(2);
    console.log(operation);
});

three.addEventListener('click', function() {
    display.textContent =  '3';
    operation.push(3);
    console.log(operation);
});

four.addEventListener('click', function() {
    display.textContent =  '4';
    operation.push(4);
    console.log(operation);
});

five.addEventListener('click', function() {
    display.textContent =  '5'
    operation.push(5);
    console.log(operation);
});

six.addEventListener('click', function() {
    display.textContent =  '6';
    operation.push(6);
    console.log(operation);
});
seven.addEventListener('click', function() {
    display.textContent =  '7';
    operation.push(7);
    console.log(operation);
});

eight.addEventListener('click', function() {
    display.textContent =  '8';
    operation.push(8);
    console.log(operation);
});

nine.addEventListener('click', function() {
    display.textContent =  '9';
    operation.push(9);
    console.log(operation);
});


