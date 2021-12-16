const clearButton = document.getElementById('clear')
const display = document.getElementById('screen')
const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')

clearButton.addEventListener('click', clearScreen)

numbers.forEach((button) => 
    button.addEventListener('click', () => inputNumber(button.value))
)

operators.forEach((button) => 
    button.addEventListener('click', () => inputOperator(button.value))
)

function clearScreen() {
    display.value = '0'
}

function inputNumber(number) {
    if(display.value === '0') {
        clearScreen
        display.value = number
    } else {
        display.value += number
    }
}

function add(a, b) {
    return a + b
  }
  
  function substract(a, b) {
    return a - b
  }
  
  function multiply(a, b) {
    return a * b
  }
  
  function divide(a, b) {
    return a / b
  }
