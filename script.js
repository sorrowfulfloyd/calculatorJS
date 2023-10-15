const display = document.getElementById("display");
let firstNumber = "", lastNumber = "", operator = "", sum;

function add(a, b) {
    sum = a + b;
    display.innerText = (sum);
    firstNumber = sum;
    lastNumber = "";
}

function subtract(a, b) {
    sum = a - b;
    display.innerText = (sum);
    firstNumber = sum;
    lastNumber = "";
}

function multiply(a, b) {
    sum = a * b;
    display.innerText = (sum);
    firstNumber = sum;
    lastNumber = "";
}

function divide(a, b) {
    if (b === 0) { display.innerText = ("Can't divide by 0") }
    else {
        sum = a / b;
        display.innerText = (sum);
        firstNumber = sum;
        lastNumber = "";
    }
}


function operate(firstNum, op, lastNum) {
    switch (op) {
        case "+":
            add(firstNum, lastNum);
            break;
        case "-":
            subtract(firstNum, lastNum);
            break;
        case "x":
            multiply(firstNum, lastNum);
            break;
        case "/":
            divide(firstNum, lastNum);
            break;
        default:
            resetAll();
            display.innerText = "invalid operator!";
            break;
    }
}

function determineOperator(op) {
    if (op === "-") {
        if (firstNumber === "") {
            firstNumber += op;
            display.innerText += op;
        }
        else if (operator !== "" && lastNumber === "") {
            lastNumber += op;
            display.innerText += op;
        } else {
            operator = op;
            display.innerText += op;
        }
    }
    else if (firstNumber !== "" && firstNumber !== "-" && operator.length == 0) {
        operator = op;
        display.innerText += op;
    }

}

function setNumber(num) {
    if (operator == "") {
        firstNumber += num;
        display.innerText += num;
    }
    else {
        display.innerText += num;
        lastNumber += num;
    }
}

function equalsTo() {
    operate(Number(firstNumber), operator, Number(lastNumber));
    operator = "";
    console.log("first num: " + firstNumber + " last num: " + lastNumber + " sum: " + sum)
}

function resetAll() {
    firstNumber = ""; lastNumber = ""; operator = ""; display.innerText = "", sum = 0;
}