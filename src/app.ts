const resultElement = document.querySelector('#result') as HTMLParagraphElement
const form = document.querySelector("form") as HTMLFormElement

form.addEventListener("submit", function (event) {
    event.preventDefault();
    result(resultElement);
});

function result(resultElement : any) {
    const currency = document.querySelector('#currency') as HTMLSpanElement
    const weight = document.querySelector('#weight-select') as HTMLSelectElement
    const size = document.querySelector('#size-select') as HTMLSelectElement
    const sendTo = document.querySelector('#send-to-select') as HTMLSelectElement


    let weightResult: number = 0

    if (weight.value === "less-1kg") {
        weightResult = 10;
    } else if (weight.value === "between-one-and-three") {
        weightResult = 20;
    } else {
        weightResult = 30;
    };

    let sizeResult: number = 0

    if (size.value === "more-150cm") {
        sizeResult = 5
    };

    let totalCost: number = weightResult + sizeResult;

    if (sendTo.value === "france") {
        currency.textContent = "€"
    } else if (sendTo.value === "canada") {
        if (totalCost > 12.5) {
            totalCost *= 1.15
        }
        totalCost *= 1.5
        currency.textContent = "$"
    } else {
        totalCost *= 130
        currency.textContent = "¥"
    };


    resultElement.textContent = totalCost;
}