// 1
let name1 = prompt("Enter your name:");
alert("Hello, " + name1 + "!");

// 2
let num2 = Number(prompt("Enter a number:"));
if (num2 > 10) {
    alert("Number is big");
}
// 1
let name3 = prompt("Enter your name:");
alert("Hello, " + name3 + "!");

// 2
let num4 = Number(prompt("Enter a number:"));
if (num4 > 10) {
    alert("Number is big");
}

// 3
let total = 50;
total += 25;
alert(total);

// 4
let color = prompt("Enter your favorite color:");
alert("Wow! " + color + " is my favorite too!");

// 5
let age = Number(prompt("Enter your age:"));
if (age >= 18) {
    alert("You are eligible to vote");
}

// 6
let num61 = Number(prompt("Enter first number:"));
let num62 = Number(prompt("Enter second number:"));
alert("Sum: " + (num61 + num62));

// 7
let answer = prompt("Enter 'yes' or 'no':").toLowerCase();
if (answer === "yes") {
    alert("Great!");
}

// 8
let password = prompt("Enter password:");
if (password === "12345") {
    alert("Access granted");
}

// 9
let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));
if (a === b) {
    alert("Both are equal");
}

// 10
let myName = "Rayyan Salman"; 
alert(myName);

// 11
let temperature = Number(prompt("Enter temperature:"));
if (temperature > 30) {
    alert("It's hot today");
}

// 12
let greeting = "Hello" + " " + "World";
alert(greeting);

// 13
let number = Number(prompt("Enter a number:"));
if (number % 2 === 0) {
    alert("Even number");
}

// 14
let city = prompt("Enter your city name:");
if (city.toLowerCase() === "karachi") {
    alert("Welcome to the city of lights");
}

// 15
let marks = Number(prompt("Enter your marks:"));
if (marks >= 50) {
    alert("Pass");
} else {
    alert("Fail");
}
