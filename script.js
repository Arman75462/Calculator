'use strict'

/* ==========================
=============Selectors============= 
==========================*/
let screen = document.querySelector('.screen');
let displayNumber = document.querySelector('.display-number');
let displayOperation = document.querySelector('.display-operation');
let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let multiplication = document.querySelector('.multiplication');
let division = document.querySelector('.division');
let clear = document.querySelector('.clear');
let equal = document.querySelector('.equal');
let deleteButton = document.querySelector('.delete');
let dot = document.querySelector('.dot');

/* Numbers */
let zero = document.getElementById('zero');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');


/* ==============================
=============FUNCTIONALITIES============= 
================================*/
let operation = [];
let numberLengthChecker = [];
const maxCharacters = 20;


function updateDisplayNumber() {
    const displayText = operation.map((item) => {
        if (item === '*') {
            return ' x ';
        } else if (item === '/') {
            return ' ÷ ';
        } else if (item === '+') {
            return ' + ';
        } else if (item === '-') {
            return ' - ';
        } else if (['+', '-', 'x', '÷'].includes(item)) {
            return ` ${item} `;
        } else {
            return item;
        }
       
    }).join('');
    
    // Check if the text exceeds the character limit
    if (displayText.length > maxCharacters || operation.length > maxCharacters) {
        // Truncate the text and the operation array to the character limit
        displayOperation.textContent = displayText.slice(0, maxCharacters);
        operation = operation.slice(0, maxCharacters);
    } else {
        displayOperation.textContent = displayText;
    }

    console.log(operation);
}

function displayMessageTooMuchCharacters(number) {
    if(operation.length === maxCharacters) {
        numberLengthChecker.push(number);
        if(numberLengthChecker.length >= 5) {
            displayOperation.textContent = '';
            displayNumber.textContent = 'Too many numbers. Clear the calculator.';
            displayNumber.style.color = 'red';
            displayNumber.style.textAlign = 'center';
            displayNumber.style.marginTop = '35px';
            displayNumber.style.position = 'static';
            console.log(numberLengthChecker.length)
        } 
    } else {
        operation.push(number);
        updateDisplayNumber();
    }
}


/* ==========================
=============BUTTONS============= 
==========================*/
plus.addEventListener('click', function() {
    displayOperation.textContent = `${operation.join('')} +`;
    operation.push('+');
})

minus.addEventListener('click', function() {
    displayOperation.textContent = `${operation.join('')} -`;
    operation.push('-');
})

multiplication.addEventListener('click', function() {
    displayOperation.textContent = `${operation.join('')} x`;
    operation.push('*');
})   

division.addEventListener('click', function() {
    displayOperation.textContent = `${operation.join('')} ÷`;
    operation.push('/');
})

equal.addEventListener('click', function() {
    let result = eval(operation.join(''));
    displayNumber.textContent = result;
    console.log(result);
})

clear.addEventListener('click', function() {
    displayNumber.textContent = '0';
    displayOperation.textContent = '';
    operation = [];
    numberLengthChecker = [];

    /* Delete error message */
    displayNumber.textContent = '0';
    displayNumber.style.color = 'rgb(73, 73, 73)';
    displayNumber.style.textAlign = 'left';
    displayNumber.style.marginTop = '0px';
    displayNumber.style.position = 'absolute';
    displayNumber.style.bottom = '15px'
    displayNumber.style.right = '35px'
});

deleteButton.addEventListener('click', function(){
    operation.pop();
    updateDisplayNumber();
})

dot.addEventListener('click', function() {
    operation.push('.');
    displayNumber.textContent = '.'
})


/* ==========================
=============NUMBERS============= 
==========================*/
zero.addEventListener('click', function() {
   displayMessageTooMuchCharacters(i);
});

one.addEventListener('click', function() {
    displayMessageTooMuchCharacters(1);
});

two.addEventListener('click', function() {
    displayMessageTooMuchCharacters(2);
}); 

three.addEventListener('click', function() {
    displayMessageTooMuchCharacters(3);
});

four.addEventListener('click', function() {
    displayMessageTooMuchCharacters(4);
});

five.addEventListener('click', function() {
    displayMessageTooMuchCharacters(5);
});

six.addEventListener('click', function() {
    displayMessageTooMuchCharacters(6);
});

seven.addEventListener('click', function() {
    displayMessageTooMuchCharacters(7);
});

eight.addEventListener('click', function() {
    displayMessageTooMuchCharacters(8);
});

nine.addEventListener('click', function() {
    displayMessageTooMuchCharacters(9);
}); 