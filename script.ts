let buttonValues: string[] = [];

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll<HTMLInputElement>(
    'input[type="button"], button'
  );

  buttons.forEach((button) => {
    button.addEventListener("click", (event: Event) => {
      const target = event.target as HTMLInputElement | HTMLButtonElement;
      const buttonValue = target.value || target.innerText;

      if (buttonValue === "=") {
        displayresult();
      } else if (buttonValue === "AC") {
        erraseResult();
      } else if (buttonValue === "D") {
        buttonValues.pop();
        updateDisplay();
      } else if (buttonValue !== "D") {
        buttonValues.push(buttonValue);
        updateDisplay();
      }
    });
  });
});

function updateDisplay(): void {
  const resultElement: HTMLElement = document.getElementById(
    "result"
  ) as HTMLParagraphElement;
  if (resultElement) {
    resultElement.innerText = buttonValues.join("");
  }
}

function displayresult(): void {
  const resultElement: HTMLElement = document.getElementById(
    "result"
  ) as HTMLParagraphElement;

  if (resultElement) {
    // Convert button values to a string and replace any 'x' with '*' for multiplication
    const expression: string = buttonValues.join("").replace(/x/g, "*");

    try {
      // Evaluate the mathematical expression safely
      const result = eval(expression); // Caution: Make sure inputs are safe before using eval
      resultElement.innerText = result.toString();
      buttonValues = [result.toString()];
    } catch (error) {
      resultElement.innerText = "Error";
    }
  }
}

function erraseResult(): void {
  const buttonValues: string[] = [];
  const resultElement = document.getElementById(
    "result"
  ) as HTMLParagraphElement;
  if (resultElement) {
    resultElement.innerText = "";
  }
}
