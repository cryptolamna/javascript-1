/* forEach
const score = [5, 10, 0, 15];

for (const [i, el] of score.entries()) {
	console.log(`Round ${i + 1}: ${el}`);
}

score.forEach((el, i) => {
	console.log(`Раунд: ${i + 1}: ${el}`);
});
*/

/* map 
const transactionsInUSD = [10, -7, 50, -10, 100];

const transactionsInRUB = [];
for (const transaction of transactionsInUSD) {
	transactionsInRUB.push(transaction * 60);
}

const transactionsInRUB2 = transactionsInUSD
	.map(tx => {
		console.log(tx);
		return tx * 60;
	});

console.log(transactionsInUSD);
console.log(transactionsInRUB2);
*/

/* filter

const operations = [100, -20, 7, -20, 50];
// const positiveOperations = [];
// for (const operation of operations) {
// 	if (operation > 0) {
// 		positiveOperations.push(operation);
// 	}
// }

// console.log(positiveOperations);

const positiveOperations = operations
	.filter(operation => operation > 0);

console.log(positiveOperations);

const positiveRUBOperations = operations
	.filter(operation => operation > 0)
	.map(operation => operation * 60);

console.log(positiveRUBOperations);
*/

/* Упражнение - вывод изменений цен
const prices = [[100, 200], [120, 100], [200, 350]];
const deltaPrices = prices
	.map(changes => changes[1] - changes[0])
	.filter(change => change > 0);

console.log(deltaPrices);
*/

/* reduce
const operations = [100, -20, 7, -30, 50];

let balance = 0;
for (const operation of operations) {
	balance += operation;
}

console.log(balance);


const finalBalance = operations.reduce((acc, operation) => acc + operation, 0);
console.log(finalBalance);

const minElement = operations.reduce((acc, operation) => operation > acc ? acc : operation);
console.log(minElement);
*/

/* Упражнение - среднее значение
const arr = [1, 4, 4, 10];

const avg = arr => arr.reduce((avg, value, idx) => (avg * idx + value) / (idx + 1));

console.log(avg(arr));
*/

/* find и findIndex
const arr = [2, 4, 4, 10];

// let elGT5;
// for (const el of arr) {
// 	if (el > 5) {
// 		elGT5 = el;
// 		break;
// 	}
// }
// console.log(elGT5);

const elGT5 = arr.find(el => el > 0);
const elGT5Index = arr.findIndex(el => el > 5);

console.log(elGT5, elGT5Index);
*/

/* Упражнение - реализация some

const arr = [2, 4, 4, 10, 20];

function some(arr, targetEl) {
	const res = arr.find(el => el === targetEl);
	return res !== undefined;
	// for (const el of arr) {
	// 	if (el === targetEl) {
	// 		return true;
	// 	}
	// }
	// return false;
}


console.log(some(arr, 4));

console.log(arr.some(el => el === 0));
*/

/* flat и flatMap
const prices = [[2, 4], [3, 4], [10, [20, 50]]];

const res = prices.flat(10);
const res2 = prices.flatMap(el => el.concat([1])); // equal .map(..).flat(..)

console.log(res);
*/

/* sort
const users = ['John', 'Travis', 'Mike'];
console.log(users);
users.sort();
console.log(users);

const operations = [100, -300, -100, 50, 480];
console.log(operations);
operations.sort((a, b) => a - b);
console.log(operations);
*/

/* Быстрое создание массивов
*/
const arr = [1, 2, 3, 4];
console.log(new Array(1, 2, 3, 4, 5));

const arr2 = new Array(5);
console.log(arr2);
arr2.fill(2, 3, 5);
console.log(arr2);

const arr3 = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(arr3);