const buttons = document.querySelectorAll('button')
const screenDisplay = document.querySelector('.screen')
let calculation = []
let accumalativeCalculation
function calculate(button) {
    const value = button.textContent

    if(value === "CLEAR") {
        calculation = []
        screenDisplay.textContent = '.'
    } else if (value === "=") {
        screenDisplay.textContent = eval(accumalativeCalculation)
    } else {

    calculation.push(value)
    accumalativeCalculation = calculation.join('')
    screenDisplay.textContent = accumalativeCalculation

    }
}

buttons.forEach(button => button.addEventListener('click', ()=> calculate(button)))