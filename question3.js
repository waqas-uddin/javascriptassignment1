let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
let num3 = prompt("Enter the third number:");
let num4 = prompt("Enter the fourth number:");
let num5 = prompt("Enter the fifth number:");

let largestNum = num1;

if (num2 > largestNum) {
  largestNum = num2;
}

if (num3 > largestNum) {
  largestNum = num3;
}

if (num4 > largestNum) {
  largestNum = num4;
}

if (num5 > largestNum) {
  largestNum = num5;
}

console.log("The largest number is " + largestNum);
