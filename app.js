/* Введение
function logName(name, surname) {
	console.log(`My name is ${name} ${surname}`);
}

logName('John', 'Doe');

function countDepositSum(depositInUsd, month, rate) {
	const sum = depositInUsd * (1 + rate / 12) ** month;

	return sum;
}

const example1 = countDepositSum(1000, 24, 0.12);
console.log(example1);
const example2 = countDepositSum(100000, 12 * 50, 0.15);
console.log(example2);
*/

/* Анонимные ф-ции
function powerOfTwo(num) {
	return num * num;
}

const poft = function (num) {
	return num * num;
}

console.log(powerOfTwo(5));
console.log(poft(6));
console.log(typeof poft);
*/

/* Стрелочные ф-ции
function powerOfTwo(num) {
	return num * num;
}

console.log(powerOfTwo(5));

const poft = (num) => num * num;
console.log(poft(6));

const poft1 = num => {
	console.log(num);
	return num * num;
};
console.log(poft1(6));
*/

/* Упражнение - Упрощение функции 
function toPower(num, power) {
	const res = num ** power;
	return res;
}

const toPowerArrow = (num, power) => num ** power;
console.log(toPowerArrow(2, 3));
*/


/* Параметры по умолчанию
function toPower(num, power = 2) {
	const res = num ** power;
	return res;
}


console.log(toPower(2, 3));
console.log(toPower(2));
*/

/* Условия в функциях
function canAccessWebsite(age) {
	// if (age < 18) {
	// 	return false;
	// }

	// return true;
	return age < 18;

}

console.log(canAccessWebsite(18));

const canAccessWebsite2 = age => age < 18 ? 'No' : 'Yes';


console.log(canAccessWebsite2(18));
*/

/* Функции в функциях
const KG_IN_USD = 7;
const KM_IN_USD = 5;

function calculateW(present) {
	return present * KG_IN_USD;
}

function calculateKm(distance) {
	return distance * KM_IN_USD;
}

function getExchagePrice(present1, present2, distance) {
	const price1 = calculateW(present1);
	const price2 = calculateW(present2);
	const distancePrice = calculateKm(distance);

	return price1 + price2 + distancePrice;
}
*/

/* Кредит на MacBook 
const PRODUCT_PRICE = 2000;
const maxLoan = (age, hasJob = false) => age > 24 && hasJob ? 500 : age > 24 ? 100 : 0;

const canBuy = (age, credit, hasJob = false) => maxLoan(age, hasJob) + credit >= PRODUCT_PRICE;

console.log(canBuy(25, 1900));
*/