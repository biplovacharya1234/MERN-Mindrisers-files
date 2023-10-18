// alert('Hello');
// let names = 'Ram';
// console.log('Hello ' + names);

// function st_names (names){
//     return names;
// }

// console.log('My name is ' +  st_names('Ramesh'));

firstName = "Kp";
lastName = "oli";
console.log(firstName, lastName);

//
let count // declaration
count = 100; // initalization
// const variables cannot be re initialized once delcared
// let variables can be updated as much as you want as it is dynamic
// cont variables should be declared and initialized at once
// cosnt myRoll 
// myRoll = 90;
// the aboce shown is wrong and below is right
let myRoll = 90;// Both declared and initialized in a single line.

//arrays
let fruits = ["apple", "banana", "mango", "kiwi"];
console.log(fruits[2]);

let persons = ["ram", "sam", "hari"];
persons[1] = "Sita";
console.log(persons[1]);


// Objects
let apple = {
    companyname: "Apple",
    website: "Applce.com"
}
let google = {
    companyname: "Google",
    website: "Google.com"
}
let youtube = {
    companyname: "Youtube",
    website: "Youtube.com"
}
console.log(youtube.companyname)

// arrays of objects

let companies = [apple, google, youtube];
console.log(companies.facebook);

let unis = [
    {
        uniname: "harvard",
        rank: 1
    },
    {
        uniname: "Standford",
        rank: 2
    },
    {
        uniname: "Mit",
        rank: 3
    }
]

unis[2].rank = 10;
console.log(unis)

// Operators
let value = 0;
value++;
value++;
console.log({ value });//Putting inside curly brackets gives the label

// strict equality operator

// type cohersion // type conversion
console.log(1 == "1");// true//here js converts types if possible
console.log(1 === "1");// false//no type conversion, checks for data types too

// if else

function checkRain() {
    let userInput = document.getElementById("userInput").value;
    if (userInput === 'yes') {
        console.log(userInput);
        var outputElement = document.getElementById("display");
        var textNode = document.createTextNode("take umbrella");
        outputElement.appendChild(textNode);
    }
    else {
        console.log("dont bring umbrella")
        var outputElement = document.getElementById("display");
        var textNode = document.createTextNode("dont bring umbrella");
        outputElement.appendChild(textNode);
    }
}
// nested if else   
willRain = false;
hasProb = true;
if (willRain) {
    console.log('Take raincoat')
}
else {
    if (hasProb) {
        console.log('take umbrella')
    }
    else {
        console.log('Dont bring anything')
    }
}

// else-if

// falsy condition in js
ourConditon = false;
ourConditon = 0; // 0 is false conditon and 1 is true condition
ourCondition = undefined // It is also taken as false condition
ourCondition = ''//empty string will also give false condition but ' ' is true beacuse it has space.
ourCondition = NaN // this will also give false condition
ourCOndition = null // this will also give false condition

// true condition
ourCondition = "string";
ourCondition = 12; // number other than 0 will give true
ourCondition = [1, 2]; // array with numbers give true
ourCondition = []; // empty array will give true
ourCondition = {}; // empty object will also give true

// Type conversion
//1+"1" = "11"; // this is because type conversion of number 1 to string 1


let personnames = {
    firstName: "ramesh",
    hasSubmittedAssignment: true,
    personage : 30
}
if (personnames.hasSubmittedAssignment) {
    console.log("can take exam")
}
else {
    console.log("cant take exam")
}
if (personnames.personage > 23) {
    console.log("Can marry");
}
else {
    console.log("cant marry");
}

//logical operator
// and &&
// or ||
// not !
//AND gets more priority that OR

