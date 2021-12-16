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
clearButton.addEventListener('click', clear)

// Clears all values
function clear() {
    currentValue.value = ''
    previousValues.value = ''
}

// Adds number button input to display
function appendNumber(number) {
    if(currentValue.value == '0') {
        currentValue.value = number
    } else {
        currentValue.value += number
    }
}