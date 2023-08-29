'use strict';

/* EOL для методов
// const b = 1;

// const a = {
// 	b,
// 	getB() {
// 		return this.b;
// 	}
// }

// console.log(a.getB());
*/

/* Call, aply
const audi = {
	make: 'Audi',
	model: 'A3',
	year: 2021,
	damages: [],
	addDamage(part, rate) {
		console.log(`Car ${this.make} ${this.model} ${this.year} add damage ${part} with rate ${rate}`);
		this.damages.push({
			part,
			rate
		})
	}
}


const bmw = {
	make: 'BMW',
	model: 'X5',
	year: 2021,
	damages: [],
}

bmw.addDamage = audi.addDamage;
bmw.addDamage('Капот', 1);
const addDamageFunc = audi.addDamage;
addDamageFunc.call(bmw, 'Бампер', 2);

addDamageFunc.apply(bmw, ['Бампер', 2]);
*/

/* Bind
const audi = {
	make: 'Audi',
	model: 'A3',
	damages: [

	]
}

const carManipulation = {
	addDamage(part, rate) {
		this.damages.push({ part, rate });
		console.log(`Добавить повреждение на ${this.make} ${this.model}`);
	}
}

const addDamageAudi = carManipulation.addDamage.bind(audi);
addDamageAudi('Wing', 1);
console.log(audi);

const addDamageAudiRoof = carManipulation.addDamage.bind(audi, 'Roof');
addDamageAudiRoof(5);
addDamageAudiRoof(6);

console.log(audi);
*/

/* Упражнение - управление this
function removePassword(reset) {
	reset ? this.password = undefined : this.password = '1';
}
const user = {
	login: 'a@a.ru',
	password: '',
};

const resetPassword = removePassword.bind(user, true);
resetPassword();
*/

/* IIFE
function init() {
	console.log('Start');
}

init();


(function () {
	console.log('Start IIFE');
})();
*/

/* Замыкания
function changeBalance() {
	let balance = 0;
	let key = 'ad';
	return function (sum) {
		balance += sum;
		console.log(balance);
	}
}

const change = changeBalance();
change(5);
change(5);
change(5);

console.dir(change);

const change2 = changeBalance();

console.dir(change2);
*/

/*Упражнение - работа с замыканиями
const userInfo = {
	balance: 0, operations: 0,
	increase(sum) {
		this.balance += sum; this.operations++;
	},
}

function user() {
	const userObj = { ...userInfo };
	return function () { return userObj; }
};

const user1 = user();
user1().increase(100);

user1().increase(100);
console.log(user1());

const user2 = user();
user2().increase(100);
console.log(user2());
*/