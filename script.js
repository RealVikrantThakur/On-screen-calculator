let currentInput = "";
let operator = "";
let previousInput = "";

function handleButtonClick(event) {
    const value = event.target.value;

    if (isNumeric(value) || value === ".") {
        handleNumericInput(value);
    } else if (value === "=") {
        handleEquals();
    } else if (value === "C") {
        handleClear();
    } else {
        handleOperator(value);
    }

    updateDisplay();
}

function handleNumericInput(value) {
    currentInput += value;
}

function handleOperator(value) {
    if (currentInput !== "") {
        if (previousInput !== "") {
            handleEquals();
        }
        operator = value;
        previousInput = currentInput;
        currentInput = "";
    }
}

function handleEquals() {
    if (previousInput !== "" && currentInput !== "") {
        switch (operator) {
            case "+":
                currentInput = (parseFloat(previousInput) + parseFloat(currentInput)).toString();
                break;
            case "-":
                currentInput = (parseFloat(previousInput) - parseFloat(currentInput)).toString();
                break;
            case "*":
                currentInput = (parseFloat(previousInput) * parseFloat(currentInput)).toString();
                break;
            case "/":
                currentInput = (parseFloat(previousInput) / parseFloat(currentInput)).toString();
                break;
        }
        operator = "";
        previousInput = "";
    }
}

function handleClear() {
    currentInput = "";
    operator = "";
    previousInput = "";
}

function updateDisplay() {
    document.getElementById("display").innerText = currentInput || "0";
}

function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}
