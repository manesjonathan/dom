const NUMBERS = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const OPERATORS = ["+", "-", "x", "÷"];
const EQUAL = "=";
const CLEAR = "AC";

const calculator = {
    displayValue: "0",
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

let main = document.querySelector("main");
let screen = document.createElement("input");
screen.setAttribute("type", "text");
screen.setAttribute("disabled", "true");
screen.setAttribute("value", 0);
screen.setAttribute("class", "screen");

let divDigits = document.createElement("div");
divDigits.className = "div-digit";
let divOperators = document.createElement("div");
divOperators.className = "div-operator";


for (let operator of OPERATORS) {
    let button = document.createElement("button");
    button.classList.toggle(operator);
    button.classList.toggle("operator");
    button.innerText = operator;
    divOperators.appendChild(button);
}

for (let number of NUMBERS) {
    let button = document.createElement("button");
    button.classList.toggle(number);
    button.innerText = number;
    divDigits.appendChild(button);
}

let dot = document.createElement("button");
dot.classList.toggle("decimal");
dot.classList.toggle("function");
dot.innerText = ".";
divDigits.appendChild(dot);

let reset = document.createElement("button");
reset.classList.toggle("clear");
reset.classList.toggle("function");
reset.innerText = "AC";
divDigits.appendChild(reset);

let equal = document.createElement("button");
equal.classList.toggle("equal");
equal.classList.toggle("operator");
equal.innerText = "=";

let divCalculator = document.createElement("div");
divCalculator.className = "div-calculator";
divCalculator.appendChild(divDigits);
divCalculator.appendChild(equal);

main.appendChild(screen);
main.appendChild(divOperators);
main.appendChild(divCalculator);




const keys = document.querySelector("main");
keys.addEventListener("click", (event) => {
    const { target } = event;

    if (!target.matches("button")) {
        console.log("error");

        return;
    }
    console.log(target.classList[0]);

    switch (target.classList[0]) {
        case '+':
        case '-':
        case '=':
            handleOperator(target.innerText);
            break;
        case 'x':
            handleOperator("*");
            break;
        case '÷':
            handleOperator("/");
            break;
        case '.':
            inputDecimal(target.innerText);
            break;
        case 'clear':
            resetCalculator();
            break;
        default:
            if (Number.isInteger(parseFloat(target.innerText))) {
                inputDigit(target.innerText);
            }
    }
    updateDisplay();
});

function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator;

    if (waitingForSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    } else {
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }

    console.log(calculator);
}

function calculate(firstOperand, secondOperand, operator) {
    if (operator === '+') {
        return firstOperand + secondOperand;
    } else if (operator === '-') {
        return firstOperand - secondOperand;
    } else if (operator === '*') {
        return firstOperand * secondOperand;
    } else if (operator === '/') {
        return firstOperand / secondOperand;
    }

    return secondOperand;
}

function inputDecimal(dot) {
    if (calculator.waitingForSecondOperand === true) {
        calculator.displayValue = '0.'
        calculator.waitingForSecondOperand = false;
        return
    } if (!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot;
    }
}

function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator
    const inputValue = parseFloat(displayValue);
    if (operator && calculator.waitingForSecondOperand) {
        calculator.operator = nextOperator;
        console.log(calculator);
        return;
    }
    if (firstOperand === null && !isNaN(inputValue)) {
        calculator.firstOperand = inputValue;
    } else if (operator) {
        const result = calculate(firstOperand, inputValue, operator);

        calculator.displayValue = String(result);
        calculator.firstOperand = result;
    }

    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
    console.log(calculator);

}
function resetCalculator() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
    console.log(calculator);
}
function updateDisplay() {
    screen.value = calculator.displayValue;
}

function computeResult(str) {
    console.log(str);
    return Function("return " + str)()
}

updateDisplay();

