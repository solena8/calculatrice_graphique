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
            else if (buttonValues.join("").length < 20) {
                buttonValues.push(buttonValue);
                updateDisplay();
            }
        });
    });
});
function updateDisplay() {
    var resultElement = document.getElementById("resultat");
    if (resultElement) {
        resultElement.innerText = buttonValues.join("");
    }
}
function displayresult() {
    var resultElement = document.getElementById("resultat");
    if (resultElement) {
        var expression = buttonValues.join("").replace(/x/g, "*");
        try {
            var result = eval(expression);
            resultElement.innerText = result.toString();
        }
        catch (error) {
            resultElement.innerText = "Error";
        }
    }
}
function erraseResult() {
    buttonValues = [];
    var resultElement = document.getElementById("resultat");
    if (resultElement) {
        resultElement.innerText = "";
    }
}
