/*math functions*/
function add(num1,num2){
    let result = num1 + num2;
    return result;
}

function subtract(num1,num2){
    let result = num1 - num2;
    return result;
}

function multiply(num1, num2){
    let result = num1 * num2;
    return result;
}

function divide(num1,num2){
    let result = num1 / num2;
    return result;
}

function operate(num1,num2,operator){
    num1 = Number(num1);
    num2 = Number(num2);
    if(operator=="+"){
        let result = add(num1,num2);
        return result;
    }
    else if(operator=="-"){
        let result = subtract(num1,num2);
        return result;
    }
    else if(operator=="*"){
        let result = multiply(num1,num2);
        return result;
    }
    else if(operator=="/"){
        let result = divide(num1,num2);
        return result;
    }
}

/* add number to number display*/
const display = document.querySelector(".number-display");
const number = document.querySelectorAll(".num");
const operator = document.querySelectorAll(".operator");
const del = document.querySelector(".delete");
const clear = document.querySelector(".clear");
const equals = document.querySelector(".equals");
let num1, num2;
num1 = num2 = Number("0");
let functionOperator = "a";

number.forEach((num) => {
    num.addEventListener("click",function(){
        if(display.textContent.at(0) === "0"){
            display.textContent = num.value;
        }
        else{
            if(num1 != 0 && display.textContent == num1){
                display.textContent = "";
            }
            display.append(num.value);
        }
    });
});

operator.forEach((op) => {
    op.addEventListener("click", function(){
        functionOperator = op.value;
        if(num1 === 0){
            num1 = Number(display.textContent);
            if(num2 === 0){
                display.textContent = "";
            }
        }
        else{
            num2 = Number(display.textContent);
            if(num2 === 0 && functionOperator === "/"){
                num1 = NaN;
                display.textContent = "Math Error";
                number.forEach((num)=> {num.disabled = true});
                operator.forEach((op)=>{op.disabled = true});
                equals.disabled = true;
                del.disabled = true;
            }
            display.textContent = num1 = operate(num1,num2,functionOperator);
            num2 = Number("0");  
            
        }
    });
});

del.addEventListener("click",function(){
    let text = display.textContent;
    display.textContent = text.substr(0,text.length-1);
    if(display.textContent === ""){
        display.textContent = "0";
    }
});

clear.addEventListener("click",function(){
    display.textContent = "0";
    num1 = num2 = Number("0");
    number.forEach((num)=> {num.disabled = false});
    operator.forEach((op)=>{op.disabled = false});
    equals.disabled = false;
    del.disabled = false;
});

equals.addEventListener("click",function(){
    if(num1 != 0){  
        if(functionOperator != "a"){
            num2 = Number(display.textContent);
            if(num2 === 0 && functionOperator === "/"){
                num1 = NaN;
                display.textContent = "Math Error";
                number.forEach((num) => {num.disabled = true});
                operator.forEach((op) => {op.disabled = true});
                equals.disabled = true;
                del.disabled = true;
            }
            num1 = operate(num1,num2,functionOperator);
            result = num1;
            display.textContent = num1; 
            num2 = Number("0");
            functionOperator = "a";
        }
    }
});
