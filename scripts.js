function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;  //what if b=0
}

function operate(operator,num1,num2) {
    switch (operator) {
        case "+":
            return add(num1,num2);
        case "-":
            return subtract(num1,num2);
        case "*":
            return multiply(num1,num2);
        case "/":
            return divide(num1,num2);  
    }
}

const display = document.querySelector(".display");
const secondDisplay = document.querySelector(".secondaryDisplay");

const numberbtns = document.querySelectorAll(".number");

var firstNumber=0;
var secondNumber=0;
var operator;

numberbtns.forEach((button) => {
    button.addEventListener('click', (e) => {

        if(e.target.textContent.includes(".")){
            if(!display.textContent.includes(".")) {
                display.textContent += e.target.textContent;
                secondNumber = Number(display.textContent);
            }
        }else if(display.textContent == "0") {
            display.textContent = e.target.textContent;
            secondNumber = Number(display.textContent);
        }else {
            display.textContent += e.target.textContent;
                secondNumber = Number(display.textContent);
        }
    });
});
    
const operators = document.querySelectorAll(".operator");
const operatorDisplay = document.querySelector(".operatorDisplay");

operators.forEach((op) => {
    op.addEventListener('click', (e) => {
        operator=e.target.textContent;
        operatorDisplay.textContent = e.target.textContent;
        secondDisplay.textContent = display.textContent;
        display.textContent = "";
        firstNumber = secondNumber;
    });
});


const resultBtn = document.querySelector(".result");

resultBtn.addEventListener('click', e => {
    if(operator=="/" && secondNumber==0){
        alert("You can not divide by 0")
    }else {
        display.textContent= Math.round(operate(operator,firstNumber,secondNumber) * 100) / 100;
    secondNumber = Number(display.textContent);
    operatorDisplay.textContent = "";
    display.textContent = secondNumber;
    secondDisplay.textContent = "";
    }
    
});


const clearBtn = document.querySelector(".clear");

clearBtn.addEventListener('click', e => {
    operatorDisplay.textContent = "";
    secondDisplay.textContent = "";
    display.textContent = "0";
    firstNumber=0;
    secondNumber=0;
});

const deleteBtn = document.querySelector(".delete");

deleteBtn.addEventListener('click', e => {
    display.textContent = display.textContent.slice(0,-1);
});