let inputHistory = []

function isInteger(input) {
    try {
        if(input >=0 || input <= 0){
            return true
    }
    } catch (error) {
        return false
    }
}

function isPositive(input){
    if(isInteger(input)){
        if (input >= 0) {
            inputHistory.push(input)
            return true
        } else {
            return false
        }
    } else {
        return true
    }
}

function getMin(array) {
    return Math.min(...array)
}

function getMax(array) {
    return Math.max(...array)
}

function getAverage(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return (sum / array.length).toFixed(1)
}

function showStat(array){
    if (array.length == 0) {
        alert(`For the list = Empty
            the average is Empty
            the minimum is Empty
            and the maximum Empty`)
    } else {
        alert(`For the list = ${array}
            the average is ${getAverage(array)}
            the minimum is ${getMin(array)}
            and the maximum is ${getMax(array)}`)
    }
    
}

while (true) {
    let number = prompt("Enter an integer (a negative integer to quit)")
    number = parseInt(number)
    if (!isPositive(number)) {
        break
    }
}

console.log(inputHistory)
showStat(inputHistory)