let valueA = ''
let valueB = ''
let operatorValue = ''

const clearButton = document.getElementById('clear')
const display = document.getElementById('screen')
const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')

clearButton.addEventListener('click', clear)

numbers.forEach(function (currentNumber) {
    currentNumber.addEventListener('click', number)
})
operators.forEach(function (currentOperator) {
    currentOperator.addEventListener('click', operator)
})

function clear() {
    display.value = ""
}

function number() {
    if (operatorValue === '') {
        valueA = this.value
        appendValue(valueA)
    } else {
        valueA = this.value
        clear()
        appendValue(valueA)
    }
}

function operator() {
    operatorValue = this.value
    if (valueA === '') {
        return 
    } else {
        clear()
        appendValue(operatorValue)
    }
}

function appendValue(value) {
    display.value += value
}
