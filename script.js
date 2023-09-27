'use strict'

/* ==========================
=============Selectors============= 
==========================*/

// DOM elements
let screen = document.querySelector('.screen');
let displayResult = document.querySelector('.display-result');
let displayOperation = document.querySelector('.display-operation');
let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let multiplication = document.querySelector('.multiplication');
let division = document.querySelector('.division');
let clear = document.querySelector('.clear');
let equal = document.querySelector('.equal');
let deleteButton = document.querySelector('.delete');
let dot = document.querySelector('.dot');

// Number buttons
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

// Initialize calculator variables
let operation = []; // Stores the current mathematical operation
let numberLengthChecker = []; // Helps detect excessive numbers
const maxCharacters = 20; // Maximum characters allowed in the display

// Update the display with the current operation
function updateDisplayResult() {
    const displayText = operation.map((item) => {
         // Replace operators with more readable symbols
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

// Display an error message when too many characters are entered
function displayMessageTooMuchCharacters(number) {
    if(operation.length === maxCharacters) {
        numberLengthChecker.push(number);
        if(numberLengthChecker.length >= 5) {
            // Display an error message in displayResult
            displayOperation.textContent = '';
            displayResult.textContent = 'Too many numbers. Clear the calculator.';
            displayResult.style.color = 'red';
            displayResult.style.textAlign = 'center';
            displayResult.style.marginTop = '35px';
            displayResult.style.position = 'static';
            console.log(numberLengthChecker.length)
        } 
    } else {
        operation.push(number);
        updateDisplayResult();
    }
}


/* ==========================
=============BUTTONS============= 
==========================*/

// Event listeners for operator buttons
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
     // Calculate and display the result
    let result = eval(operation.join(''));
    displayResult.textContent = result;
    console.log(result);
})

clear.addEventListener('click', function() {
    // Reset the calculator and clear any error messages
    displayResult.textContent = '0';
    displayOperation.textContent = '';
    operation = [];
    numberLengthChecker = [];

    /* Delete error message */
    displayResult.textContent = '0';
    displayResult.style.color = 'rgb(73, 73, 73)';
    displayResult.style.textAlign = 'left';
    displayResult.style.marginTop = '0px';
    displayResult.style.position = 'absolute';
    displayResult.style.bottom = '15px'
    displayResult.style.right = '35px'
});

deleteButton.addEventListener('click', function(){
     // Remove the last character from the operation and update the display
    operation.pop();
    updateDisplayResult();
})

dot.addEventListener('click', function() {
    // Add a decimal point to the current number
    operation.push('.');
    displayResult.textContent = '.'
})


/* ==========================
=============NUMBERS============= 
==========================*/

// Event listeners for number buttons
zero.addEventListener('click', function() {
   displayMessageTooMuchCharacters(0);
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