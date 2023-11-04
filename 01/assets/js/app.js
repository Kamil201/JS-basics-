const a = '4.2';
const b = 9;
const c = parseInt(a)

console.log(a, b);
console.log(typeof a, typeof c, typeof b)

const sum = c + b
const subtract = c - b
const multiply = c * b 
const divide = c / b
console.log(sum, multiply, subtract, divide);

if (sum > 20) {
	console.log(`Sum: ${sum} is greater than 20`);
} else {
	console.log("Sum is not greater than 20");
}

if (subtract > 20) {
	console.log(`Subtraction: ${subtract} is greater than 20`);
} else {
	console.log("Subtraction is not greater than 20");
}

if (multiply > 20) {
	console.log(`Multiplication: ${multiply} is greater than 20`);
} else {
	console.log("Multiplication is not greater than 20");
}

if (divide > 20) {
	console.log(`Division:${divide} is greater than 20`);
} else {
	console.log("Division is not greater than 20");
}