function calculator (number1, number2, operation){
    console.log(operation(number1, number2))
}

function add(number1, number2){
    return number1 + number2
}

function subtract(number1, number2){
    return number1 - number2
}

function multiply(number1, number2) {
    return number1 * number2
}

function divide(number1, number2) {
    return number1 / number2
}

calculator(1,2,add)
calculator(1,2,subtract)
calculator(1,2,multiply)
calculator(1,2,divide)