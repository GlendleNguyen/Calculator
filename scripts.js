let currentOperator = null

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
decimalButton.addEventListener('click', appendDecimal)

// Clears all values
function clear() {
    currentValue.value = ''
    previousValues.value = ''
    currentOperator = null
}

// Adds a decimal if one doesn't already exist
function appendDecimal() {
    if (currentValue.value.includes(".")) {
        return
    } else {
        currentValue.value += "."
    }
}

// Adds number button input to display
function appendNumber(number) {
    if (currentValue.value == '0') {
        currentValue.value = number
    } else {
        if (currentValue.value.length < 13) {
            currentValue.value += number
        }
    }
}

// Updates the operator being used and calls equal function if conditions met
function operator(sign) {
      // move a 0 up and change the sign
    if (currentValue.value == '' && previousValues.value == '') {
        previousValues.value += '0'
        currentOperator = sign
    } // move current value up and change the sign
    else if (currentValue.value != '' && previousValues.value == '') {
        currentOperator = sign
        previousValues.value = currentValue.value
        currentValue.value = ''
    } // just change the sign
    else if (currentValue.value == '' && previousValues.value != '') {
        currentOperator = sign
    } // normal operation
    else if (currentValue.value != '' && previousValues.value != '') {
        equals()
        currentOperator = sign
    }
}

// Performs calculation based on operator
function equals() {
    switch (currentOperator) {
        case '+':
            previousValues.value = add(parseFloat(previousValues.value), parseFloat(currentValue.value))
            currentValue.value = ''
            break

        case '-':
            previousValues.value = minus(parseFloat(previousValues.value), parseFloat(currentValue.value))
            currentValue.value = ''
            break

        case 'x':
            previousValues.value = multiply(parseFloat(previousValues.value), parseFloat(currentValue.value))
            currentValue.value = ''
            break
        case '/':
            previousValues.value = divide(parseFloat(previousValues.value), parseFloat(currentValue.value))
            currentValue.value = ''
            break
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
    if (b == 0) {
        console.log("dividing by 0")
        clear
    } else {
        return a / b
    }
}