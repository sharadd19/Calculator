const calculator = document.querySelector('.calculator');
const displayInput = document.querySelector('.display-input');
const displayOutput = document.querySelector('.display-output');
const buttons = document.querySelectorAll('button');
console.log(buttons);

for (button in buttons) { 
    const value = button.id;
    console.log('value',value);
}
let firstNumber; 
let operator; 
let secondNumber;


add = (a, b) => {
    return a + b;
}

subtract = (a, b) => {
    return a - b;
}

multiply = (a, b) => {
    return a * b;
}

divide = (a, b) => {
 return a / b;
}

operate = (firstNumber, secondNumber, operator) => {

}

