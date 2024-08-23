function isPositive(input){
    try {
        if (input >= 0) {
            return true
        } else {
            return false
    }
    } catch (error) {
        return false
    }
}

function isPrime(number) {
    for(let i = 2; i < number; i++){
        if (number % i == 0) {
            return false
        }
    }
    return true
}

function showPrime(number) {
    let prime = []
    for (let i = 2; i < number; i++){
        if (isPrime(i)) {
            prime.push(i)
        }
    }
    alert(`For n = ${number}, prime number are ${prime}`)
}

let inputValue = 0

while(true){
    let number = prompt("Enter a positive integer")
    number = parseInt(number)
    if(isPositive(number)){
        inputValue = number
        break
    }
}

showPrime(inputValue)

