// VARIABLES //
let display
let calc

// INITIALIZE SETUP //
const init = () => {
    display = document.getElementById('display-calc')
    calc = ""
    display.textContent = calc
}
window.onload = init


// CALCULATOR LOGIC //
window.addToStringCalc = arg => {
    calc += arg
    updateCalc()
}

window.clearCalc = () => {
    calc = ""
    updateCalc()
}

window.updateCalc = () => {
    display.textContent = calc
}

window.updateAnswer = () => {
    let ans = eval(calc)
    if (ans == "Infinity"){
        ans = "Divide by 0 error"
    }
    display.textContent = ans
    calc = ""
}

