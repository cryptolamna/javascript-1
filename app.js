/* Базовые методы
const username = 'John Doe';
console.log(username.charAt(1));
console.log(username.length);

console.log(username.lastIndexOf('o'));

console.log(username.includes('Doe'));

console.log(username.slice(5, 8));
*/

/* Упражнение - выделение имени
const username = 'Вася aka Terminator Пупкин';
const data = username.split(' ');

console.log(data.at(0), data.at(-1));
*/

/* Преобразование строки
const str = 'John Doe';
console.log(str.includes('n'));
console.log(str.startsWith('J'));
console.log(str.endsWith('e'));
console.log(new String('').includes(''));
console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.replace('o', 'a'));
console.log(str.replaceAll('o', 'q'));
console.log(str.replace(/o/g, 'q'));

const str2 = '  John Doe   \n';
console.log(str2.trim());
*/

/* Упражнение - проверка номера
const num1 = '89103235356';
const num2 = '+79103235356';
const num3 = '+7(910)3235356';
const num4 = '+7(910) 323-53-56';
const num5 = ' +7(910) 323-53-56 ';
const num1Error = '89103235';
const num2Error = '+7d910d323-53-56';
const num3Error = '9+7103235356';
const num4Error = '89103g35356';

function isPhoneNumber(num) {
	let clearNum = num.trim().replace(/[-+() ]/g, '');
	if (!clearNum.startsWith('79') && !clearNum.startsWith('89')) {
		return false;
	}
	for (let symbol of clearNum) {
		if (isNaN(Number(symbol))) {
			return false;
		}
	}
	return clearNum.length === 11;
}

console.log(isPhoneNumber(num1));
console.log(isPhoneNumber(num2));
console.log(isPhoneNumber(num3));
console.log(isPhoneNumber(num4));
console.log(isPhoneNumber(num5));


console.log(isPhoneNumber(num1Error));
console.log(isPhoneNumber(num2Error));
console.log(isPhoneNumber(num3Error));
console.log(isPhoneNumber(num4Error));
*/

/* Строки и массивы
const userFullName = 'John Doe ..';
const [firstName, familyName, lastName] = userFullName.split(' ');
console.log(firstName);

const arr = ['You', 'know', 'JS'];
console.log(arr.join(' '));
*/

/* Дополнение строк
const film = 'Star wars';
console.log(film.padStart(12, '*'));
console.log(film.padEnd(12, '*'));
console.log(film.repeat(10));
*/

/* Упражнение - маскировка карты
const cardNumber = '1111222233334444';
const lastNumbers = cardNumber.slice(-4);

console.log(lastNumbers.padStart(16, '*'));
*/