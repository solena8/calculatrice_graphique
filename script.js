var buttonValues = [];
document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll('input[type="button"], button');
    buttons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            var target = event.target;
            var buttonValue = target.value || target.innerText;
            if (buttonValue === "=") {
                displayresult();
            }
            else if (buttonValue === "AC") {
                erraseResult();
            }
            else if (buttonValue === "D") {
                buttonValues.pop();
                updateDisplay();
            }
            else if (buttonValue !== "D") {
                buttonValues.push(buttonValue);
                updateDisplay();
            }
        });
    });
});
function updateDisplay() {
    var resultElement = document.getElementById("result");
    if (resultElement) {
        resultElement.innerText = buttonValues.join("");
    }
}
function displayresult() {
    var resultElement = document.getElementById("result");
    if (resultElement) {
        // Convert button values to a string and replace any 'x' with '*' for multiplication
        var expression = buttonValues.join("").replace(/x/g, "*");
        try {
            // Evaluate the mathematical expression safely
            var result = eval(expression); // Caution: Make sure inputs are safe before using eval
            resultElement.innerText = result.toString();
            buttonValues = [result.toString()];
        }
        catch (error) {
            resultElement.innerText = "Error";
        }
    }
}
function erraseResult() {
    buttonValues = [];
    var resultElement = document.getElementById("result");
    if (resultElement) {
        resultElement.innerText = "";
    }
}
