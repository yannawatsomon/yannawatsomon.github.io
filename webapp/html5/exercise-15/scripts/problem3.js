let numbers = [1, 2, 3, 4, 5];

// function doubleNumbers(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(arr[i] * 2);
//     }
//     return result;
// }

const getDoubleNumber = (arr) =>
{
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * 2);
    }
    return result;

}

// function calculateSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

const getSum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// let doubledNumbers = doubleNumbers(numbers);
// let sum = calculateSum(doubledNumbers);
let doubledNumbers = getDoubleNumber(numbers);
let sum = getSum(doubledNumbers);

const person = {
    name: "John",
    age: 30,
    // introduce: function() {
    //     return "My name is " + this.name + " and I am " + this.age + " years old.";
    // }
    introduce() {
        return `My name is ${this.name} and I am ${this.age} years old`
    },
};

// console.log("The sum of doubled numbers is: " + sum);
console.log(`The sum of doubled number is: ${sum}`)
console.log(person.introduce());
