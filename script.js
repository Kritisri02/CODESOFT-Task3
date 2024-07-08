const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let displayValue = '';
let operator = '';
let firstValue = '';
let secondValue = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === 'C') {
            displayValue = '';
            firstValue = '';
            secondValue = '';
            operator = '';
            display.innerText = '';
        } else if (value === '=') {
            secondValue = displayValue;
            displayValue = calculate(firstValue, operator, secondValue);
            display.innerText = displayValue;
            firstValue = displayValue;
            secondValue = '';
            operator = '';
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (firstValue && operator && displayValue) {
                secondValue = displayValue;
                displayValue = calculate(firstValue, operator, secondValue);
                display.innerText = displayValue;
                firstValue = displayValue;
                secondValue = '';
            } else {
                firstValue = displayValue;
            }
            operator = value;
            displayValue = '';
        } else {
            displayValue += value;
            display.innerText = displayValue;
        }
    });
});

function calculate(first, operator, second) {
    const a = parseFloat(first);
    const b = parseFloat(second);

    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return 0;
    }
}
