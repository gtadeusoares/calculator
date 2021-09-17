let firstNum = 0;
let secondNum = 0;
let firstOp = false;
let operatorOne; 
let operatorTwo;
let sum = 0;
let numDisplay = document.querySelector(".answer-box");

const greys = document.querySelectorAll(".grey");
const oranges = document.querySelectorAll(".orange");

function calculate(n, m, op) {
    if (op === "÷")
        return n / m;
    else if (op === "x")
        return n * m;
    else if (op === "-")
        return n - m;
    else // if (op === "+") 
        return n + m;
}

greys.forEach((e, i) => {
    e.addEventListener('click', function(event) {
        if (firstOp) { // If the first operator has been pushed
            const num = e.firstElementChild.innerHTML;
            if (num == 'C') {
                secondNum = 0;
            }
            else if (num == '←') {
                secondNum = Math.floor(secondNum / 10);
            }
            else {
                secondNum *= 10;
                secondNum += parseInt(num);
            }
            numDisplay.firstElementChild.innerHTML = secondNum;
        }
        else {
            const num = e.firstElementChild.innerHTML;
            if (num == 'C') {
                firstNum = 0;
            }
            else if (num == '←') {
                firstNum = Math.floor(firstNum / 10);
            }
            else {
                firstNum *= 10;
                firstNum += parseInt(num);
            }
            numDisplay.firstElementChild.innerHTML = firstNum;
        }
    });
});

oranges.forEach((e, i) => {
    e.addEventListener('click', function(event) {
        if (firstOp) {
            operatorTwo = e.firstElementChild.innerHTML;
            if (operatorTwo === '=') {
                sum = calculate(firstNum, secondNum, operatorOne);
                numDisplay.firstElementChild.innerHTML = sum;
                sum = 0;
                firstNum = 0;
                secondNum = 0;
                firstOp = false;
            }
        }
        else {
            operatorTwo = e.firstElementChild.innerHTML;
            if (operatorTwo !== '=') {
                firstOp = true;
                operatorOne = operatorTwo;
                numDisplay.firstElementChild.innerHTML = 0;
            }
        }
        // operatorOne = e.firstElementChild.innerHTML;
        // if (operatorOne !== '=') {
        //     startCalculator(firstNum);
        // }
    });
    
});

