let inputNumber = []

function findLarger(array) {
    if (array[0] > array[1]) {
        return array[0]
    } else {
        return array[1]
    }
}

function isValidInput(array) {
    for(i in array){
        if(isNaN(array[i])){
            return false
        }
    }

    return true
}

while(inputNumber.length < 2){
    if (inputNumber <= 0) {
        let number = prompt("Enter the first number")
        number = parseInt(number)
            inputNumber.push(number)
    
    } else {
        let number = prompt("Enter the second number")
        number = parseInt(number)
            inputNumber.push(number)
    }    
}

if (isValidInput(inputNumber)) {
    document.getElementById("input-1").innerHTML = inputNumber[0] + " and"
    document.getElementById("input-2").innerHTML = inputNumber[1] + " is"
    document.getElementById("larger-input").innerHTML = findLarger(inputNumber)
} else {
    document.getElementById('result').innerHTML = "Please enter a valid number"
}


