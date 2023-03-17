const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberinput(){
    return parseInt(userInput.value);
}

function add() {
    const caclDescription = `${currentResult} + ${enteredNumber}`
    const enteredNumber = getUserNumberinput();
  currentResult = currentResult + enteredNumber;
  outputResult(currentResult, caclDescription);
}
function subtrack() {
    const caclDescription = `${currentResult} - ${enteredNumber}`
    const enteredNumber = getUserNumberinput();
  currentResult = currentResult - enteredNumber;
  outputResult(currentResult, caclDescription);
}
function multiply() {
    const caclDescription = `${currentResult} * ${enteredNumber}`
    const enteredNumber = getUserNumberinput();
  currentResult = currentResult * enteredNumber;
  outputResult(currentResult, caclDescription);
}
function divide() {
    const caclDescription = `${currentResult} / ${enteredNumber}`
    const enteredNumber = getUserNumberinput();
  currentResult = currentResult / enteredNumber;
  outputResult(currentResult, caclDescription);
}
//currentResult = add(1, 2);
//let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

addBtn.addEventListener("click", add);
