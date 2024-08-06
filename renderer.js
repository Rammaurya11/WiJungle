let display = document.getElementById('display');
let currentOperation = null;
let firstOperand = '';
let secondOperand = '';

function appendNumber(number) {
  display.value += number;
}

function appendFunction(func) {
  display.value += func;
}

function chooseOperation(operation) {
  if (display.value === '') return;
  firstOperand = display.value;
  currentOperation = operation;
  display.value = '';
}

function calculate() {
  if (currentOperation === null || display.value === '') return;
  secondOperand = display.value;
  try {
    display.value = eval(`${firstOperand} ${currentOperation} ${secondOperand}`);
  } catch (e) {
    display.value = 'Error';
  }
  currentOperation = null;
}

function clearDisplay() {
  display.value = '';
  firstOperand = '';
  secondOperand = '';
  currentOperation = null;
}
