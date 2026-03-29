var city = prompt("Enter your city:");
if (city.toLowerCase() === "karachi") {
    alert("Welcome to city of lights");
}

var gender = prompt("Enter your gender:");
if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir.");
} else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma’am.");
}

var color = prompt("Enter traffic signal color:");
if (color.toLowerCase() === "red") {
    alert("Must Stop");
} else if (color.toLowerCase() === "yellow") {
    alert("Ready to move");
} else if (color.toLowerCase() === "green") {
    alert("Move now");
}

var fuel = parseFloat(prompt("Enter remaining fuel (litres):"));
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}

var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}

if (true){
    alert("True");
}
if (false){
    alert("False");
}

if("car" < "cat"){
    alert("car is smaller than cat");
}

var m1 = +prompt("Enter marks for subject 1:");
var m2 = +prompt("Enter marks for subject 2:");
var m3 = +prompt("Enter marks for subject 3:");
var totalMarks = +prompt("Enter total marks:");

var obtained = m1 + m2 + m3;
var percentage = (obtained / totalMarks) * 100;

var grade, remarks;

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}

document.write("<h3>Marks Sheet</h3>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + obtained + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks + "<br>");

var secret = 7;
var guess = +prompt("Guess the number (1-10):");

if (guess === secret) {
    alert("Bingo! Correct answer");
} else if (guess + 1 === secret) {
    alert("Close enough to the correct answer");
}

var num = +prompt("Enter a number:");
if (num % 3 === 0) {
    alert("Number is divisible by 3");
}

var number = +prompt("Enter a number:");
if (number % 2 === 0) {
    alert("Even number");
} else {
    alert("Odd number");
}

var temp = +prompt("Enter temperature:");

if (temp > 40) {
    alert("It is too hot outside.");
} else if (temp > 30) {
    alert("The Weather today is Normal.");
} else if (temp > 20) {
    alert("Today’s Weather is cool.");
} else if (temp > 10) {
    alert("OMG! Today’s weather is so Cool.");
}

var num1 = +prompt("Enter first number:");
var num2 = +prompt("Enter second number:");
var op = prompt("Enter operation (+, -, *, /, %):");

var result;

if (op === "+") {
    result = num1 + num2;
} else if (op === "-") {
    result = num1 - num2;
} else if (op === "*") {
    result = num1 * num2;
} else if (op === "/") {
    result = num1 / num2;
} else if (op === "%") {
    result = num1 % num2;
}

alert("Result: " + result);