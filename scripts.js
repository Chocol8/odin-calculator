/*math functions*/
function add(num1,num2){
    return num1 + num2;
}

function subtract(num1,num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1,num2){
    return num1 / num2;
}

/* add number to number display*/
const display = document.querySelector(".number-display");
const number = document.querySelectorAll(".num");
const operator = document.querySelectorAll(".operator");
const del = document.querySelector(".delete");
const clear = document.querySelector(".clear");

number.forEach((num) => {
    num.addEventListener("click",function(){
        display.append(num.value);
    });
});

operator.forEach((op) => {
    op.addEventListener("click", function(){
        display.append(op.textContent);
    })
});

del.addEventListener("click",function(){
    let text = display.textContent;
    display.textContent = text.substr(0,text.length-1);
});

clear.addEventListener("click",function(){
    display.textContent = "";
});