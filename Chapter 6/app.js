var num = 10;
var arithmeticResult = ((num + 5) * 10) / 2;
document.write("<h3>Arithmetic Result: " + arithmeticResult + "</h3>");

var a = 2, b = 1;

document.write("<h3>Step by Step Output</h3>");

document.write("Initial values: a = " + a + ", b = " + b + "<br>");

var step1 = --a;
document.write("--a = " + step1 + "<br>");

var step2 = step1 - --b;
document.write("--a - --b = " + step2 + "<br>");

var step3 = step2 + ++b;
document.write("--a - --b + ++b = " + step3 + "<br>");

var step4 = step3 + b--;
document.write("--a - --b + ++b + b-- = " + step4 + "<br>");

document.write("Final values: a = " + a + ", b = " + b + ", result = " + step4 + "<br>");////////////////////ppppppppppppppppppppp

var userName = prompt("Enter your name:");
alert("Hello " + userName + "! Welcome!");

var tableNum = prompt("Enter a number for multiplication table:", 5);
document.write("<h3>Multiplication Table of " + tableNum + "</h3>");

for (var i = 1; i <= 10; i++) {
    document.write(tableNum + " x " + i + " = " + (tableNum * i) + "<br>");
}

var subject1 = prompt("Enter first subject name:");
var subject2 = prompt("Enter second subject name:");
var subject3 = prompt("Enter third subject name:");

var totalMarksPerSubject = 100;

var marks1 = +prompt("Enter obtained marks for " + subject1 + ":");
var marks2 = +prompt("Enter obtained marks for " + subject2 + ":");
var marks3 = +prompt("Enter obtained marks for " + subject3 + ":");

var totalMarks = totalMarksPerSubject * 3;
var obtainedMarks = marks1 + marks2 + marks3;
var percentage = (obtainedMarks / totalMarks) * 100;

document.write("<h3>Marks Sheet</h3>");
document.write("<table border='1'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>100</td><td>" + marks1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>100</td><td>" + marks2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>100</td><td>" + marks3 + "</td></tr>");
document.write("</table>");

document.write("<br>Total Marks: " + totalMarks);
document.write("<br>Obtained Marks: " + obtainedMarks);
document.write("<br>Percentage: " + percentage.toFixed(2) + "%");