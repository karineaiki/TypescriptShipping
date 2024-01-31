"use strict";
const resultElement = document.querySelector('#result');
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    result(resultElement);
});
function result(resultElement) {
    const weight = document.querySelector('#weight-select');
    const size = document.querySelector('#size-select');
    const sendTo = document.querySelector('#send-to-select');
    let weightResult = 0;
    if (weight.value === "less-1kg") {
        weightResult = 10;
    }
    else if (weight.value === "between-one-and-three") {
        weightResult = 20;
    }
    else {
        weightResult = 30;
    }
    ;
    let sizeResult = 0;
    if (size.value === "more-150cm") {
        sizeResult = 5;
    }
    ;
    let totalCost = weightResult + sizeResult;
    if (sendTo.value === "canada") {
        if (totalCost > 12.5) {
            totalCost *= 1.15;
        }
    }
    ;
    resultElement.textContent = "le coût d'envoi est de : " + totalCost;
}
/*
euro vers CAD
1*1,5
euro vers JPY
1*130
*/ 
