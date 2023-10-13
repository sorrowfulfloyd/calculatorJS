let firstNumber = "", lastNumber = "", operator = "";

function add(a, b) {
    // return a + b;
    console.log(a + b);
}

function subtract(a, b) {
    // return a - b;
    console.log(a - b);
}

function multiply(a, b) {
    // return a * b;
    console.log(a * b);
}

function divide(a, b) {
    // return a / b;
    console.log(a / b);
}

function operate(firstNum, op, lastNum) {
    switch (op) {
        case "+":
            add(firstNum, lastNum);
            break;
        case "-":
            subtract(firstNum, lastNum);
            break;
        case "*":
            multiply(firstNum, lastNum);
            break;
        case "/":
            divide(firstNum, lastNum);
            break;
        default: // TODO: update the display saying "invalid"
            break;
    }
}

function determineOperator(op) {
    operator = op;
    console.log(operator);
}

function setNumber(num) {
    if (operator == "") {
        firstNumber += num;
    }
    else {
        lastNumber += num;
    }
    console.log(firstNumber);
    console.log(lastNumber);
}

function equalsTo() {
    operate(Number(firstNumber), operator, Number(lastNumber));
}

function resetAll() {
    firstNumber = ""; lastNumber = ""; operator = "";
}