// Arrays

// Array Methods
// push --> add item to the end of the array
// Pop --> remove item from the end of the array
// Shift --> remove item from the beginning of the array
// Unshift --> add item to the beginning of the array
// Concat --> merge array with another array and it gives a new array
// Includes --> look for a matching value in the array
// IndexOf ---> it gives the index of the matching item in the array
// Join --> creates a string from an array
// Reverse --> reverse an array
// Slice --> copies a portion on an array
// Splice --> removes/replaces elements from an array
// Sort --> sorts an array

let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// console.log(num.length)
// num.push(10)
// console.log(num.pop());
// console.log(num.unshift(-1));
// console.log(num.shift());


// console.log(num)

// for (let i = 0; i < num.length; i++) {
//     console.log(num[i]);
// }

// console.log(num.length)

let days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]

// console.log(days.pop());

// Object Literals
const person = {
    fname: 'Uniq',
    lname: 'Boy',
}
person.age = 22
const fullName = `${person.fname} ${person.lname}`

// console.log(fullName);

const intro = `Hey my name is ${fullName} and i am ${person.age} years old!`

// console.log(intro)


// Loops

// for loop
// while loop
// do while loop
// for of loop
// for in loop

// for loop --->
// for (let i = 0; i < 5; i++) {
//     console.log(`I am inside for loop and repeating ${i} times!`);
// }
// let animals = ['lions', 'cats', 'tigers', 'bears', 'dogs']

// for (let i = 0; i < animals.length; i++) {
//     console.log(`At index ${i} ${animals[i]}.`)
// }

// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < i; j++) {
//         console.log('hey')
//     }
//     console.log('\n');

// }


// while loop --->
// let condition = 0;

// while (condition !== 5) {
//     console.log(`repeating until condition is false! :)`)
//     condition++;
// }

// let usrInput = prompt("Say something bustard!")
// while (true) {
//     usrInput = prompt(usrInput)
//     if (usrInput.toLowerCase() === "fuck off") {
//         break;
//     }
// }
// console.log("Ok Bustard!")

// for off loop --->
// let animals = ['lions', 'cats', 'tigers', 'bears', 'dogs']

// for (const item of animals) {
//     console.log(item);
// }

// const owner = "Sp1d3r";

// for (const letter of owner) {
//     console.log(letter.toUpperCase())
// }


// for in loop
const scores = {
    uniq: 55,
    spider: 99,
    adi: 88,
    kim: 47,
    kyle: 100
}

// for (const key in scores) {
//     console.log(`${key} scored ${scores[key]}!`)
// }

// console.log(Object.keys(scores));
// console.log(Object.values(scores));

// let totalScore = 0;
// for (const score of Object.values(scores)) {
//     totalScore += score;
// }
// console.log(totalScore)

// Functions
// normal function
function sayMyName() {
    console.log('Hey Sp1d3r')
}
// normal function call
// sayMyName();

// function with arguments
function greeting(name) {
    console.log(`Hello ${name} !`);
}
//  function call with arguments
// greeting("Sp1d3r")
// greeting("F4r1d")

function sumOfTwoNums(num1, num2) {
    let sum = num1 + num2
    console.log(sum)
}
// Call function with arguments
// sumOfTwoNums(2, 3)

// Return keyword in function
function sumReturn(num1, num2) {
    let sum = num1 + num2
    return sum;
}

let returnedSum = sumReturn(8, 5)
// console.log(returnedSum);

// Function expressions

const add = function (x, y) {
    return x + y;
}
// console.log(add(10, 15))

// Higher order functions -->
//  function that operate on /with other functions  
// they can -->
// # accept other functions as arguments
// # return a function

function callTwice(func) {
    func();
    func();
}

function rollDie() {
    const roll = Math.ceil(Math.random() * 6)
    console.log(roll);
}

// callTwice(rollDie)

function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}

const isChild = makeBetweenFunc(0, 18);
const isAdult = makeBetweenFunc(19, 55);
const isSenior = makeBetweenFunc(56, 120);

// console.log(isChild(12));
// console.log(isAdult(70));
// console.log(isSenior(110));

// Methods -->
// we can add functions properties on objects.
// and we call them methods
// every methods is a function but every functions are not method

const employee = {
    fname: 'Uniq',
    lname: 'Boy',
    age: 22,
    fullName(fname, lname) {
        let fullName = `${fname} ${lname}`
        console.log(fullName)
    },
    intro(fullName, age) {
        console.log(`Hey my name is ${fullName} and i am ${age} years old!`);
    }
}

// 'This' keyword in methods
// use the keyword 'this' to access other properties on the same object

const employeeWithMethods = {
    fname: 'Lucifer',
    lname: 'Morningstar',
    age: 22,
    fullName() {
        return `${this.fname} ${this.lname}`
    },
    intro() {
        return `Hey my name is ${this.fullName()} and i am ${this.age} years old!`
    }
}

// console.log(employeeWithMethods.fullName())
// console.log(employeeWithMethods.intro())

// 'try catch' error handling

// try {
//     fuck.toUpperCase()
// } catch (e) {
//     console.log('What the fuck are you doing man!')
//     console.log(e);
// }


// Arrow functions

const square = num => num * num
const square2 = square(2)
// console.log(square2)
// console.log('HELLO!!!...');
// setTimeout(() => console.log('...are you still there?'), 3000)
// console.log('I am about to go!')

// const id = setInterval(() => {
//     console.log(Math.ceil(Math.random() * 10));
// }, 2000);


// Some advanced methods
// forEach
// map
// filter
// find
// reduce
// some
// every

// ForEach ---> it accepts a callback function. Calls the function once per element in the array
// numbers.forEach(function (num) {
//     console.log(num * num);
// })

const names = ['Sp1d3r', 'Uniq', 'Kristi', 'Ninja', 'Shadow']
// names.forEach(element => {
//     console.log(element.toUpperCase())
// });

// map --> Creates a new array with the results of calling a callback on every element in the array

const count = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const sqrCount = count.map(function (num) {
    return num ** 2;
})
// console.log(sqrCount)

const dudes = ['Sp1d3r', 'Uniq', 'Kristi', 'Ninja', 'Shadow']
const upperDudes = dudes.map(function (dude) {
    return dude.toUpperCase()
})
// console.log(upperDudes);

// filter --> Creates a new array with all the elements that pass the test implemented by the provided function.
const randNums = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
const odds = randNums.filter(num => num % 2 !== 0)
// console.log(odds)

// every --> tests whether all elements in the array pass the provided function. it returns a Boolean value.
const words = ['dog', 'dig', 'log', 'bag', 'wag']
words.every(word => word.length === 3) // --> true
words.every(word => word[0] === 'd') // --> false

// some ---> similar to every, but returns true if any of the array elements pass the test function
const manyWords = ['dog', 'jello', 'log', 'cupcake', 'bag', 'wag']
manyWords.some(word => word.length > 4) // --> true
manyWords.some(word => word[0] === 'z') // --> false
manyWords.some(word => word.includes('cake')) // --> true

// reduce --> executes a reducer function on each element of the array, resulting in a single value.
// in reduce method third argument is initial value for the first argument

const numStuff = [3, 5, 7, 9, 11]

numStuff.reduce((accumulator, currentValue) => accumulator + currentValue) // --> 35
// Example
// Callback     accumulator     currentValue    return value
// first call   3               5               8
// second call  8               7               15
// third call   15              8               24
// fourth call  24               11              35

const price = [50, 70, 88, 56, 99, 12, 88]
const totalPrice = price.reduce((total, price) => total + price)
// console.log(totalPrice)

const minPrice = price.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min;
})
// console.log(minPrice);

const maxPrice = price.reduce((max, price) => {
    if (price > max) {
        return price;
    }
    return max;
})
// console.log(maxPrice);