/* Логические операторы
const isAdmin = true;
const canWrite = true;

console.log(`System file: ${isAdmin && canWrite}`);
console.log(`Common file: ${isAdmin || canWrite}`);
console.log(`Invert admin's permissions: ${!isAdmin}`);

const isEdited = true;
const isSU = true;

console.log(`Can edit: ${isAdmin && canWrite && !isEdited}`);
console.log(`Can edit: ${isAdmin && canWrite && (!isEdited || isSU)}`);


let a = 7;
if (a === -8 || a === 22) {

}
*/

/* Операторы с другими типами
console.log('Вася' || 'Олег'); // Всегда выводит 1 операнд
console.log(false || 'Олег');
console.log('Вася' || false);

console.log('Вася' && 'Олег'); // && - всегда выводит 2 операнд
console.log(false && 'Олег'); // дальше не проверяет
console.log('Вася' && false);

let a;
const username = a || 'Петя';
console.log(username);

const isAdmin = true;
const filename = isAdmin && 'file.mp4';

*/

/* Оператор нулевого слияние
let username = 'John';
console.log(username || 'Default'); // если username == '' || 0 сработает 'Default'
let usernameNull = null;
console.log(usernameNull ?? 'Default'); // not null and not undefined
*/


/* Упражнение - Проверка прав
const balance = 1000;
const bonusBalance = 100;
const isBanned = false;
const isExist = false;
const isSelling = true;

const statusMsg = (balance >= 1000 || bonusBalance >= 100)
	&& !isBanned
	&& !isExist
	&& isSelling
	? 'Вы можете купить'
	: 'Вы не можете купить';

console.log(`Условия для покупки:
Баланс > 1000: ${balance >= 1000}
Бонусный баланс > 100: ${bonusBalance >= 100}
Бан: ${isBanned}
Игра не куплена: ${isExist}
Игра в продаже: ${isSelling}
${statusMsg}`);
*/