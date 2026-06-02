//Task 1: Write a function that takes a number as an argument and returns its absolute value.

function absoluteValue(num) {
    return Math.abs(num);
   
} 

console.log(absoluteValue(-46.67));


//Task 2: Calculate and return the value of a base raised toa specific power.

let x = 5;
let y = 3;

function power(base, exponent) {
    return Math.pow(base, exponent);
}

console.log(power(x,y));

// Task 3 square root 

function squareRoot(num) {
   let sum = Math.pow(num, 0.5);
    return sum;
}
console.log(squareRoot(144));



//Tasks 4 Max and min array

let arrNumbers = [3, 78, -12, 0.5, 27];

function maximumNums(arrInput){
    let max = Math.max(...arrInput);
    let min = Math.min(...arrInput);

    return {
        highestNum: max,
        lowestNum: min
    };
}

let finalResult = maximumNums(arrNumbers);
console.log(finalResult);

//Task 5 random 1-50

function randomNum(){
     return Math.floor(Math.random() * 50) + 1;
}
console.log(randomNum());

//Task 6 round up 2x

function roundUp(num){
    return Math.round(num * 100) / 100;
}
console.log(roundUp(23.67891));


function calculator(operation, value1, value2) {

    if (operation === "absolute" || operation === "absoluteValue") {
        return absoluteValue(value1);
    }

    if (operation === "power") {
        return power(value1, value2);
    }

    if (operation === "squareRoot") {
        return squareRoot(value1);
    }

    if (operation === "maximumNums") {
        return maximumNums(value1);
    }

    if (operation === "randomNums") {
        return randomNum();
    }

    if (operation === "roundUp") {
        return roundUp(value1);
    }

    return "Invalid operation";
}
console.log(calculator("absoluteValue", -18.03));

console.log(calculator("power", 2, 3));

console.log(calculator("squareRoot", 3.14));

console.log(calculator("maximumNums", [18, 3, 25, -8, -26]));

console.log(calculator("randomNums"));

console.log(calculator("roundUp", 20.2326));