let currentOperator = null
let storedValue = ''

const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const equalsButton = document.getElementById('equals')
const decimalButton = document.getElementById('decimal')
const clearButton = document.getElementById('clear')
const previousValues = document.getElementById('previousScreen')
const currentValue = document.getElementById('currentScreen')

/** 
 * Event Listeners
 */
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.value)
    })
})
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        operator(button.value)
    })
})
clearButton.addEventListener('click', clear)
equalsButton.addEventListener('click', equals)

// Clears all values
function clear() {
    currentValue.value = ''
    previousValues.value = ''
    storedValue = ''
}

// Adds number button input to display
function appendNumber(number) {
    if (currentValue.value == '0') {
        currentValue.value = number
    } else {
        currentValue.value += number
    }
}

// Updates the operator being used
function operator(sign) {
    if (storedValue == '') {
        storedValue = currentValue.value
        currentValue.value = ''
        previousValues.value = storedValue
        currentOperator = sign
    } else {
        currentOperator = sign
    }
}

// Performs calculation 
function equals() {
    if (storedValue != '' && currentOperator != null) {
        switch (currentOperator) {
            case '+':
                storedValue = add(parseInt(storedValue), parseInt(currentValue.value))
                previousValues.value = storedValue
                currentValue.value = ''
                break

            case '-':
                storedValue = minus(parseInt(storedValue), parseInt(currentValue.value))
                previousValues.value = storedValue
                currentValue.value = ''
                break

            case 'x':
                storedValue = multiply(parseInt(storedValue), parseInt(currentValue.value))
                previousValues.value = storedValue
                currentValue.value = ''
                break
            case '/':
                storedValue = divide(parseInt(storedValue), parseInt(currentValue.value))
                previousValues.value = storedValue
                currentValue.value = ''
                break
        }
    }
}

function add(a, b) {
    return a + b
}

function minus(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    if(b == 0) {
        clear
    } else {
        return a / b
    }
}