const output = document.getElementById("output");

const show = (title, result) => {
  console.log(title + ":", result);
  output.innerHTML += `<p><b>${title}:</b> ${result}</p>`;
};

// 1
const add = (a, b) => a + b;
show("1. Add", add(5, 3));

// 2
const checkEvenOdd = num => (num % 2 === 0 ? "Even" : "Odd");
show("2. Even or Odd", checkEvenOdd(7));

// 3
const greaterNumber = (a, b) => (a > b ? a : b);
show("3. Greater Number", greaterNumber(10, 20));

// 4
const checkPassFail = marks => (marks > 40 ? "Pass" : "Fail");
show("4. Pass or Fail", checkPassFail(35));

// 5
const checkPositiveNegative = num => (num >= 0 ? "Positive" : "Negative");
show("5. Positive or Negative", checkPositiveNegative(-8));

// 6
const square = num => num * num;
show("6. Square", square(6));

// 7
const toUpper = str => str.toUpperCase();
show("7. Uppercase", toUpper("hello"));

// 8
const toLower = str => str.toLowerCase();
show("8. Lowercase", toLower("HELLO"));

// 9
const isEmptyString = str => str.length === 0;
show("9. Empty String", isEmptyString(""));

// 10
const firstCharacter = str => str[0];
show("10. First Character", firstCharacter("JavaScript"));

// 11
const firstElement = arr => arr[0];
show("11. First Element", firstElement([1, 2, 3]));

// 12
const lastElement = arr => arr[arr.length - 1];
show("12. Last Element", lastElement([1, 2, 3]));

// 13
const countElements = arr => arr.length;
show("13. Count Elements", countElements([1, 2, 3, 4]));

// 14
const evenNumbers = arr => arr.filter(num => num % 2 === 0);
show("14. Even Numbers", evenNumbers([1,2,3,4,5,6]));

// 15
const oddNumbers = arr => arr.filter(num => num % 2 !== 0);
show("15. Odd Numbers", oddNumbers([1,2,3,4,5,6]));

// 16
const greaterThanTen = arr => arr.filter(num => num > 10);
show("16. Numbers > 10", greaterThanTen([5,12,8,20]));

// 17
const largestNumber = arr => Math.max(...arr);
show("17. Largest Number", largestNumber([5,10,25,8]));

// 18
const smallestNumber = arr => Math.min(...arr);
show("18. Smallest Number", smallestNumber([5,10,25,8]));

// 19
const onlyStrings = arr => arr.filter(item => typeof item === "string");
show("19. Only Strings", onlyStrings([1,"Ali",true,"Sara"]));

// 20
const removeLastElement = arr => arr.slice(0, -1);
show("20. Remove Last Element", removeLastElement([1,2,3,4]));

// 21
const sumArray = arr => arr.reduce((sum, num) => sum + num, 0);
show("21. Sum Array", sumArray([1,2,3,4]));

// 22
const countVowels = str => (str.match(/[aeiou]/gi) || []).length;
show("22. Count Vowels", countVowels("JavaScript"));

// 23
const removeSpaces = str => str.replace(/\s+/g, "");
show("23. Remove Spaces", removeSpaces("Hello World"));

// 24
const wordPresent = (sentence, word) => sentence.includes(word);
show("24. Word Present", wordPresent("I love JavaScript", "JavaScript"));

// 25
const firstWord = sentence => sentence.split(" ")[0];
show("25. First Word", firstWord("Hello World"));

// 26
const lastWord = sentence => sentence.split(" ").pop();
show("26. Last Word", lastWord("Hello World"));

// 27
const reverseString = str => str.split("").reverse().join("");
show("27. Reverse String", reverseString("Hello"));

// 28
const divisibleBy3 = num => num % 3 === 0;
show("28. Divisible by 3", divisibleBy3(9));

// 29
const onlyLetters = str => /^[A-Za-z]+$/.test(str);
show("29. Only Letters", onlyLetters("Hello"));

// 30
const multiply = (a, b) => a * b;
show("30. Multiply", multiply(4, 5));