/* Первый урок
let a = 1;
console.log(a);
a = 'Test'; // ошибка при const
console.log(a);
*/


/* Базовые арифметические операторы
const width = 10;
const height = 5;

const space = width * height;
const newWidth = width - 4;
const newWidth2 = width + 4;

const division = newWidth / newWidth2;
const volume = 2 ** 32;
console.log(space, newWidth, newWidth2, division, volume);

// Строки
const city = 'Москва';
const street = 'Новослободская';

console.log(city + ', ' + street + ' ' + 5);
*/

/* Операторы присваивания
let age = 18 + 5;
age += 2; // age = age + 2
age -= 3;
age *= 2; // age = age * 2
age /= 2; // age = age / 2

age++; // age = age + 1
age--;

console.log(age);

// Операторы сравнения
const vasia = 20
console.log(age > vasia);
console.log(age >= vasia);
console.log(age < vasia);
console.log(age <= vasia);
console.log(age == vasia);
*/

/* Порядок операторов
const isSuited = 100 - 10 > 90 - 5;
console.log(isSuited);

const a = (6 + 10) / 2;
console.log(a);


let b;
let c;

c = b = 100 + 30 + 50;
console.log(c, b);
*/

/* Типы данных
// const age = 18; // числа
// const surname = 'Иванов'; // строки
// const isAdmin = true; // булево
// let data = undefined; // не заданное
// let dataNullable = null; // пустое значение
// const admin = Symbol('Admin'); // уникальное неизменное значение
// const big = BigInt(1000000000000000); // большие числа
let a = 5;
let b = 5.6;

console.log(typeof a);
a = 'строка';
console.log(typeof a);
e = `sdsa`;
console.log(typeof e);

let isAdmin = a > 10;
console.log(typeof isAdmin);

let c;
console.log(typeof c);
c = 5;
console.log(typeof c);

let d = null;
console.log(typeof d);
console.log(typeof d == null);
*/

/* ! Упражнение - Расчёт проекта
const rate = 80;
const requiredDays = 11;
const requiredHours = 40;

const maxWorkingHours = (requiredDays - 2) * 5;

const possible = maxWorkingHours > requiredHours;
console.log(possible);
console.log(rate * requiredHours);
*/

/* Шаблонные строки
const projectName = 'Shop Page';
const price = 2000;
const author = 'John Doe';

const template = author + ' ordered ' + projectName + ' by price ' + price + '$';
console.log(template);

const template2 = `${author} ordered ${projectName} by ${price}`

console.log(template2);

const template3 = `Project:\nPrice: ${price}$`;
console.log(template3);

const template4 = `Project:
Price: ${price}$
`;

console.log(template4);

*/

/* Конвертация типов
const age = '18';
console.log(Number(age) + 5);
console.log(age * 3);

const userName = 'John';
console.log(Number(userName) + 5); // NaN - Not a Number
console.log(typeof NaN);
console.log(String(4) + 7);
console.log(Boolean(1)); // true
console.log(Boolean('') + 10); // bool('') (0) + 10

const a = 2 + '10';
console.log(a - 10); // 200
*/

/* False из других типов
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(Number('sx'))); // false == bool(Nan)
console.log(Boolean(NaN)); // false
*/
