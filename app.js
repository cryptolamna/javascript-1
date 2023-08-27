/* Цикл for 
for (let i = 1; i <= 10; i++) {
	console.log(`Наш баланс: ${i}$`);
}
*/

/* Break continue
const tasks = ['Task 1', 'Task 2', 'Task 3'];


for (let i = 0; i < tasks.length; i++) {
	if (tasks[i] == 'Task 2') {
		// continue;
		break;
	}
	console.log(tasks[i]);
}
*/

/* Упражнение - Цикл в обратном порядке
const arr = ['!', 'JS', 'люблю', 'Я'];
const reversedArr = [];

for (let i = arr.length - 1; i >= 0; i--) {
	reversedArr.push(arr[i]);
}

console.log(reversedArr.join(' '));
*/

/* Цикл в цикле
// for (let i = 1; i < 5; i++) {
// 	console.log(`Loop 1 - ${i}`);
// 	for (let j = 1; j < 5; j++) {
// 		console.log(`Loop 2 - ${j}`);
// 	}
// }

const tasks = [[1, 'Task 1'], [2, 'Task 2']];
for (let i = 0; i < tasks.length; i++) {
	for (let j = 0; j < tasks[i].length; j++) {
		console.log(`${tasks[i][j]}`);
	}
}
*/

/* Цикл while
let i = 0;
while (i < 5) {
	console.log(i);
	i++;
}

const arr = [1, 4, 8, 7];

for (let i = 0; i < arr.length; i++) {
	if (arr[i] > 5) {
		break;
	}
	console.log(arr[i]);
}

i = 0;
while (arr[i] <= 5 && i < arr.length) {
	console.log(arr[i]);
	i++;
}

let j = 0;
do {
	console.log(j);
	j++
} while (j < 0);
*/

/* Циклы for of и for in
const arr = [1, 4, 8, 7];

for (let element of arr) {
	console.log(element);
}

for (let index in arr) {
	console.log(index);
}
*/

/* Упражнение - Расчёт итогового баланса
const operations = [1000, -700, 300, -500, 10000];
const startBalance = 100;

function computeOperations(startBalance, operations) {
	let balance = startBalance;
	for (const amount of operations) {
		balance += amount;
		if (balance < 0) {
			return false;
		}
	}

	return balance;
}

function averageIncomeAndOutcome(operations) {
	let income = 0;
	let incomeCount = 0;
	let outcome = 0;
	let outcomeCount = 0;
	for (const operation of operations) {
		if (operation > 0) {
			income += operation;
			incomeCount++;
		} else {
			outcome += operation;
			outcomeCount++;
		}
	}

	return [income / incomeCount, outcome / outcomeCount];
}

console.log(computeOperations(startBalance, operations));
console.log(averageIncomeAndOutcome(operations));
*/