// 1
let arr = [[], [], []];

console.log(arr);
document.write(arr + "<br><br>");


// 2
let matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1]
];

console.log(matrix);
document.write(matrix[0] + "<br>");
document.write(matrix[1] + "<br>");
document.write(matrix[2] + "<br><br>");


// 3
for (let i = 1; i <= 10; i++) {
  console.log(i);
  document.write(i + "<br>");
}

document.write("<br>");


// 4
let number = +prompt("Enter table number:");
let length = +prompt("Enter table length:");

for (let i = 1; i <= length; i++) {
  let result = number + " x " + i + " = " + (number * i);

  console.log(result);
  document.write(result + "<br>");
}

document.write("<br>");


// 5
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
  document.write(fruits[i] + "<br>");
}

document.write("<br>");


// 6a
let counting = "";

for (let i = 1; i <= 15; i++) {
  counting += i + ", ";
}

console.log(counting);
document.write("Counting: " + counting + "<br><br>");


// 6b
let reverse = "";

for (let i = 10; i >= 1; i--) {
  reverse += i + ", ";
}

console.log(reverse);
document.write("Reverse Counting: " + reverse + "<br><br>");


// 6c
let even = "";

for (let i = 0; i <= 20; i += 2) {
  even += i + ", ";
}

console.log(even);
document.write("Even: " + even + "<br><br>");


// 6d
let odd = "";

for (let i = 1; i < 20; i += 2) {
  odd += i + ", ";
}

console.log(odd);
document.write("Odd: " + odd + "<br><br>");


// 6e
let series = "";

for (let i = 2; i <= 20; i += 2) {
  series += i + "k, ";
}

console.log(series);
document.write("Series: " + series + "<br><br>");


// 7
let A = ["cake", "apple pie", "cookie", "chips", "patties"];

let userInput = prompt("Enter item to search").toLowerCase();

let found = false;

for (let i = 0; i < A.length; i++) {
  if (A[i].toLowerCase() === userInput) {
    found = true;

    let message = userInput + " is available at index " + i;

    console.log(message);
    document.write(message + "<br><br>");

    break;
  }
}

if (!found) {
  let message = userInput + " is not available in our bakery";

  console.log(message);
  document.write(message + "<br><br>");
}


// 8
let arr1 = [24, 53, 78, 91, 12];

let largest = arr1[0];

for (let i = 1; i < arr1.length; i++) {
  if (arr1[i] > largest) {
    largest = arr1[i];
  }
}

console.log("Largest number is: " + largest);
document.write("Largest number is: " + largest + "<br><br>");


// 9
let arr2 = [24, 53, 78, 91, 12];

let smallest = arr2[0];

for (let i = 1; i < arr2.length; i++) {
  if (arr2[i] < smallest) {
    smallest = arr2[i];
  }
}

console.log("Smallest number is: " + smallest);
document.write("Smallest number is: " + smallest + "<br><br>");


// 10
for (let i = 5; i <= 100; i += 5) {
  console.log(i);
  document.write(i + "<br>");
}