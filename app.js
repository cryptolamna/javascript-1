/* Функции высшего порядка
const a = (b) => b++;

function g(a) {
	return a;
}
*/

/* Callback
function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function power(a, b) {
	return a ** b;
}

function calculate(a, b, fn) {
	console.log(fn.name);
	return fn(a, b);
}

console.log(calculate(2, 5, power));
*/

/* Возврат функции
function power(pow) {
	return function (num) {
		return num ** pow;
	};
}

const powerOfTwo = power(123);

console.log(powerOfTwo(320));

console.log(power(5)(4));
*/

/* Упражнение - Стрелочные функции
*/

const power = (pow) => (num) => pow ** num;

console.log(power(5)(2));