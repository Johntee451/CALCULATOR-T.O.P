//additon Function:
function add(num1,num2,operator) {
    let result;
    if (operator === "+") {
        result = (num1) + (num2);
        return(result);
    }
}

//subtraction Function:
function subtract(num1,num2,operator) {
    let result;
    if (operator === "-") {
        result = (num1) - (num2);
        return (result);
    }
}

//multiplication Function:
function multiply(num1,num2,operator) {
    let result;
    if (operator === "x") {
        result = (num1) * (num2);
        return (result);
    }
}

//division Function:
function divide(num1,num2,operator) {
    let result;
    if (operator === "÷" && num2 !== 0) {
        result = (num1) / (num2);
        return (result);
    }
    else{
        return ("Cannot divide by zero");
    }
}













let number1;
let number2;
let sign;

let displayParaDiv = document.querySelector("#displayParaDiv");
let displayParaDiv1 = document.querySelector("#displayParaDiv1");

let onSymbolDiv = document.querySelector("#onSymbolDiv");
let offSymbolDiv = document.querySelector("#offSymbolDiv");
let deleteSymbolDiv = document.querySelector("#deleteSymbolDiv");
let clearSymbolDiv = document.querySelector("#clearSymbolDiv");

let button1Div = document.querySelector("#button1Div");
let button2Div = document.querySelector("#button2Div");
let button3Div = document.querySelector("#button3Div");
let button4Div = document.querySelector("#button4Div");
let button5Div = document.querySelector("#button5Div");
let button6Div = document.querySelector("#button6Div");
let button7Div = document.querySelector("#button7Div");
let button8Div = document.querySelector("#button8Div");
let button9Div = document.querySelector("#button9Div");
let button0Div = document.querySelector("#button0Div");
let button00Div = document.querySelector("#button00Div");
let buttonDotDiv = document.querySelector("#buttonDotDiv");

let signButtonAdditionDiv = document.querySelector("#signButtonAdditionDiv");
let signButtonSubtractionDiv = document.querySelector("#signButtonSubtractionDiv");
let signButtonMultiplicationDiv = document.querySelector("#signButtonMultiplicationDiv");
let signButtonDivisionDiv = document.querySelector("#signButtonDivisionDiv");
let signButtonEqualtoDiv = document.querySelector("#signButtonEqualtoDiv");


//number buttons
button1Div.addEventListener("click", function(){
    displayParaDiv.textContent += button1Div.textContent;
})
button2Div.addEventListener("click", function(){
    displayParaDiv.textContent += button2Div.textContent;
})
button3Div.addEventListener("click", function(){
    displayParaDiv.textContent += button3Div.textContent;
})
button4Div.addEventListener("click", function(){
    displayParaDiv.textContent += button4Div.textContent;
})
button5Div.addEventListener("click", function(){
    displayParaDiv.textContent += button5Div.textContent;
})
button6Div.addEventListener("click", function(){
    displayParaDiv.textContent += button6Div.textContent;
})
button7Div.addEventListener("click", function(){
    displayParaDiv.textContent += button7Div.textContent;
})
button8Div.addEventListener("click", function(){
    displayParaDiv.textContent += button8Div.textContent;
})
button9Div.addEventListener("click", function(){
    displayParaDiv.textContent += button9Div.textContent;
})
button0Div.addEventListener("click", function(){
    displayParaDiv.textContent += button0Div.textContent;
})
button00Div.addEventListener("click", function(){
    displayParaDiv.textContent += button00Div.textContent;
})
buttonDotDiv.addEventListener("click", function(){
    let displayContent = displayParaDiv.textContent;
    if (displayContent !== "" && displayContent[displayContent.length-1] !== "-" && displayContent[displayContent.length-1] !== "+" && displayContent[displayContent.length-1] !== "x" && displayContent[displayContent.length-1] !== "÷" && displayContent[displayContent.length-1] !== ".") {
        displayParaDiv.textContent += buttonDotDiv.textContent;
    }
    else if(displayContent === "" || displayContent[displayContent.length-1] === "-" || displayContent[displayContent.length-1] === "+" || displayContent[displayContent.length-1] === "x" || displayContent[displayContent.length-1] === "÷"){
        displayParaDiv.textContent += "0"+ buttonDotDiv.textContent;
    }
    else{
        displayParaDiv.textContent += "";
    }
})






//symbol buttons
onSymbolDiv.addEventListener("click", function(){
    displayParaDiv.textContent = "CALCULATOR IS ON";
    console.log("CALCULATOR IS ON");
})
offSymbolDiv.addEventListener("click", function(){
    displayParaDiv.textContent = "CALCULATOR IS OFF";
    console.log("CALCULATOR IS OFF");
})
deleteSymbolDiv.addEventListener("click", function(){
    let dispCont = displayParaDiv.textContent;
    let arrDisp = dispCont.split("");
    arrDisp.pop();
    let joinDisp = arrDisp.join("");
    displayParaDiv.textContent = joinDisp;
})
clearSymbolDiv.addEventListener("click", function(){
    displayParaDiv.textContent = "";
    displayParaDiv1.textContent = "";
})





//sign input buttons
signButtonAdditionDiv.addEventListener("click", function(){
    let displayContent = displayParaDiv.textContent;
    if (displayContent !== "" && displayContent[displayContent.length-1] !== "-" && displayContent[displayContent.length-1] !== "+" && displayContent[displayContent.length-1] !== "x" && displayContent[displayContent.length-1] !== "÷" && displayContent[displayContent.length-1] !== ".") {
        displayParaDiv.textContent += signButtonAdditionDiv.textContent;
    }
    else if (displayContent[displayContent.length-1] === "-" || displayContent[displayContent.length-1] === "+" || displayContent[displayContent.length-1] === "x" || displayContent[displayContent.length-1] === "÷" || displayContent[displayContent.length-1] === ".") {
        let dispCont = displayParaDiv.textContent;
        let arrDisp = dispCont.split("");
        arrDisp.pop();
        arrDisp.push(signButtonAdditionDiv.textContent);
        let joinDisp = arrDisp.join("");
        displayParaDiv.textContent = joinDisp;
    }
})

signButtonSubtractionDiv.addEventListener("click", function(){
    let displayContent = displayParaDiv.textContent;
    if (displayContent[displayContent.length-1] !== "-" && displayContent[displayContent.length-1] !== "+" && displayContent[displayContent.length-1] !== ".") {
        displayParaDiv.textContent += signButtonSubtractionDiv.textContent;
    }
    else if (displayContent[displayContent.length-1] === "-" || displayContent[displayContent.length-1] === "+" || displayContent[displayContent.length-1] === ".") {
        let dispCont = displayParaDiv.textContent;
        let arrDisp = dispCont.split("");
        arrDisp.pop();
        arrDisp.push(signButtonSubtractionDiv.textContent);
        let joinDisp = arrDisp.join("");
        displayParaDiv.textContent = joinDisp;
    }
})

signButtonMultiplicationDiv.addEventListener("click", function(){
    let displayContent = displayParaDiv.textContent;
    if (displayContent !== "" && displayContent[displayContent.length-1] !== "-" && displayContent[displayContent.length-1] !== "+" && displayContent[displayContent.length-1] !== "x" && displayContent[displayContent.length-1] !== "÷" && displayContent[displayContent.length-1] !== ".") {
        displayParaDiv.textContent += signButtonMultiplicationDiv.textContent;
    }
    else if (displayContent[displayContent.length-1] === "-" || displayContent[displayContent.length-1] === "+" || displayContent[displayContent.length-1] === "÷" || displayContent[displayContent.length-1] === "x" || displayContent[displayContent.length-1] === ".") {
        let dispCont = displayParaDiv.textContent;
        let arrDisp = dispCont.split("");
        arrDisp.pop();
        arrDisp.push(signButtonMultiplicationDiv.textContent);
        let joinDisp = arrDisp.join("");
        displayParaDiv.textContent = joinDisp;
    }
})

signButtonDivisionDiv.addEventListener("click", function(){
    let displayContent = displayParaDiv.textContent;
    if (displayContent !== "" && displayContent[displayContent.length-1] !== "-" && displayContent[displayContent.length-1] !== "+" && displayContent[displayContent.length-1] !== "x" && displayContent[displayContent.length-1] !== "÷" && displayContent[displayContent.length-1] !== ".") {
        displayParaDiv.textContent += signButtonDivisionDiv.textContent;
    }
    else if (displayContent[displayContent.length-1] === "-" || displayContent[displayContent.length-1] === "+" || displayContent[displayContent.length-1] === "÷" || displayContent[displayContent.length-1] === "x" || displayContent[displayContent.length-1] === ".") {
        let dispCont = displayParaDiv.textContent;
        let arrDisp = dispCont.split("");
        arrDisp.pop();
        arrDisp.push(signButtonDivisionDiv.textContent);
        let joinDisp = arrDisp.join("");
        displayParaDiv.textContent = joinDisp;
    }
})









signButtonEqualtoDiv.addEventListener("click", function(){
    let displayContent = displayParaDiv.textContent;

    if (displayContent.includes("-", 1) && !(displayContent.includes("x-", 1)) && !(displayContent.includes("÷-", 1))) {
        let signIndex = displayContent.indexOf("-", 1);
        number1 = displayContent.slice(0, signIndex);
        sign = displayContent[signIndex];
        number2 = displayContent.slice(signIndex+1, displayContent.length);

        displayParaDiv.textContent = "";
        displayParaDiv1.textContent = subtract(Number(number1),Number(number2),sign);
    }

    else if (displayContent.includes("+", 1)) {
        let signIndex = displayContent.indexOf("+", 1);
        number1 = displayContent.slice(0, signIndex);
        sign = displayContent[signIndex];
        number2 = displayContent.slice(signIndex+1, displayContent.length);

        displayParaDiv.textContent = "";
        displayParaDiv1.textContent = add(Number(number1),Number(number2),sign);
    }

    else if (displayContent.includes("x", 1)) {
        let signIndex = displayContent.indexOf("x", 1);
        number1 = displayContent.slice(0, signIndex);
        sign = displayContent[signIndex];
        number2 = displayContent.slice(signIndex+1, displayContent.length);

        displayParaDiv.textContent = "";
        displayParaDiv1.textContent = multiply(Number(number1),Number(number2),sign);
    }

    else if (displayContent.includes("÷", 1)) {
        let signIndex = displayContent.indexOf("÷", 1);
        number1 = displayContent.slice(0, signIndex);
        sign = displayContent[signIndex];
        number2 = displayContent.slice(signIndex+1, displayContent.length);

        displayParaDiv.textContent = "";
        displayParaDiv1.textContent = divide(Number(number1),Number(number2),sign);
    }
    
    else if (displayContent === "") {
        displayParaDiv.textContent = displayParaDiv1.textContent;
    }
})
