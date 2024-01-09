// Get all our elements
let displayInput = document.querySelector('.display-input');
let displayResult = document.querySelector('.display-result');
const clear = document.querySelector('#clear');
const equal = document.querySelector('.equal');
const decimal = document.querySelector('.decimal');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

let operator = "";
let currentValue = "";
let previousValue = "";

numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        currentValue = '';
        let numClicked = e.target.textContent;
        if (currentValue.length <= 5) {
            currentValue += numClicked;  
        }

        displayResult.textContent = currentValue;
        console.log([previousValue, currentValue])
    })
});

operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
        let operatorClicked = e.target.textContent;
        operator = operatorClicked;
        previousValue = currentValue;
        currentValue = ''
        displayInput.textContent = previousValue + " " + operator;
        displayResult.textContent = currentValue;
        
    })
});

clear.addEventListener('click', () => {
    previousValue = '';
    currentValue = ''; 
    operator = '';
    displayInput.textContent = '';
    displayResult.textContent = '';
})

equal.addEventListener('click', () => {
    if (currentValue != '' && previousValue != '') {
        calculate(previousValue, currentValue);
        displayInput.textContent = '';
        console.log([previousValue, currentValue])
        // Check to see if the answer is bigger than 5 digits.
        if (previousValue.length <= 5)
        {
            displayResult.textContent = previousValue;
        }
        else {
            displayResult.textContent = previousValue.slice(0,5) + "...";
        }
    }
    
})

decimal.addEventListener('click', () => {
    if (!currentValue.includes(".")) {
        currentValue += '.';
    }
})

calculate = () => {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);
    //  Couldn't figure out why operator wasn't being logged 
    // so found another way round
    operator = displayInput.textContent.split(" ")[1];
    console.log(operator); //Doesn't log anything.
    if (operator === '/') {
        previousValue /= currentValue;
    }
    else if (operator === 'x') {
        previousValue *= currentValue;
    }
    else if (operator === '-') {
        previousValue -= currentValue;
    }
    else if (operator === '+') {
        previousValue += currentValue;
    }
    previousValue = roundAnswer(previousValue);
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();

}

roundAnswer = (ans) => {
    return Math.round(ans * 1000) / 1000;
}