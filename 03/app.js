const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function randomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function getSum(a, b, c) {
	//1
	const aInt = parseInt(a);
	const bInt = parseInt(b);
	const cInt = parseInt(c);

	//2
	const arr = [aInt, bInt, cInt];
	arr.sort((a, b) => {
		return b - a;
	});

	//3

	return arr[0] + arr[1];
}

console.log(getSum(2, 4, 6));

const isEven = (number) => {
	if (typeof number !== "number") {
		return null;
	} else if (number % 2 === 0) {
		return true;
	}
	return false;
};

console.log(isEven(4));

const showInfo = (value, condition) => {
	switch (condition) {
		case null:
			console.log(`podana wartość ${value} nie jest liczbą`);
			break;
		case true:
			console.log(`podana liczba ${value} jest parzysta`);
			break;
		case false:
			console.log(`podana liczba ${value} nie jest parzysta`);
			break
		default:
			console.log(`nieprawidłowe wartości`);
	}
};

console.log(showInfo("12", true));
