/* if else
const money = 5;
const canBuy = money > 50;

if (canBuy) {
	console.log('Can buy product');
} else if (money > 5) {
	console.log('Can buy another product');
} else {
	console.log('Not enough money to buy');
}

console.log('Finish');
*/

/* Упражнение - Размещение депозита
const deposit = 12000;
const monthYield = 7;

const goal = 13500;

const result = deposit * (1 + (monthYield / 100 / 12)) ** 24;
if (result > goal) {
	console.log(`Вася сможет купить дом. Остаток: ${result - goal}$`);

} else {
	console.log(`Вася не сможет купить дом. Не хватит: ${result - goal}$`);
}
*/

/* Операторы равенства
const secretNumber = '7';
if (secretNumber === 7) {
	console.log('Угадал строго');
}

if (Number(secretNumber) === 7) {
	console.log('Угадал строго с приведением');
}

if (secretNumber == 7) {
	console.log('Угадал не строго');
}

const q = Number(prompt('Введите число'));
if (q === 7) {
	console.log('Угадал  строго')
}
*/

/* Switch
const role = 'manager';
if (role === 'manager') {
	console.log('manager');
} else if (role === 'admin') {
	console.log('admin');
} else if (role === 'ceo') {
	console.log('ceo');
} else {
	console.log('who are you?');
}

switch (role) {
	case 'manager': // role === 'manager'
		console.log('manager');
		break;
	case 'admin': // role === 'admin'
		console.log('admin');
		break;
	case 'ceo': // role === 'ceo'
		console.log('ceo');
		break;
	default: //
		console.log('who are you?');
}

switch (role) {
	case 'manager': // role === 'manager'
	case 'admin': // role === 'admin'
		console.log('not ceo');
		break;
	case 'ceo': // role === 'ceo'
		console.log('ceo');
		break;
	default: //
		console.log('who are you?');
}

const num = 1;

switch (true) {
	case num > 0:
		console.log('positive');
		break;
	case num < 0:
		console.log('negative');
		break;
	default:
		console.log('null');
}
*/

/* Тернарные операторы
const bmwX3 = 100000;
const fordFocusPrice = 10000;
const budget = 20000;


let message;
if (budget > bmwX3) {
	message = 'BMW';
} else {
	message = 'Bicycle';
}

message = budget > bmwX3 
	? 'BMW' 
	: budget > fordFocusPrice ? 'FORD' : 'Bicycle';
// if else if else


const str = 10 > 0 ? 'Greater than 0' : 'Less than 0';
console.log(str);

const car = budget > bmwX3 ? 'BMW' : 'Bicycle';
console.log(`Я хочу купить ${car}`);
console.log(`Я хочу купить ${budget > bmwX3 ? 'BMW' : 'Bicycle'}`);
*/

/* Упражнение - Проверка робота
const input = prompt('Please solve 7 + or - 15');

let isRobot;
if (input === 'I"m not robot') {
	isRobot = false;
} else {
	switch (Number(input)) {
		case -8:
		case 22:
			isRobot = false;
			break;
		default:
			isRobot = true;
	}
}
const msg = isRobot ? 'You are robot' : 'You are not robot';
console.log(msg);

switch (true) { // Correct & compact
	case input === 'I"m not robot':
	case Number(input) === 22:
	case Number(input) === -8:
		console.log('Success');
		break;
	default:
		console.log('You are robot');
} 
*/
