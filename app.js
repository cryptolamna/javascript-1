/* Знакомство с объектами & Обращение
const userArray = ['John', 'Doe', 24];
const user = {
	name: 'John',
	surname: 'Doe',
	skills: [0, 1],
	age: 24,
	eduBasic: 'School #10',
	eduPro: 'MFTI',
};

console.log(user);
console.log(user.name);
console.log(user.skills);
console.log(typeof user);
console.log(user['skills']);
const level = 'Pro';
console.log(user['edu' + level]);

// const res = prompt('Enter property');
// console.log(user[res]);
user['city'] = 'Moscow';
console.log(user);

user['age'] = 30;

console.log(user);
*/

/* Упражнение - сортировка пользователей
const users = [
	{ name: 'John', age: 18 },
	{ name: 'Travis', age: 40 },
	{ name: 'Mike', age: 25 },
]

users.sort((a, b) => a.age - b.age);
console.log(users);
*/

/* Упражнение - преобразование объектов
const users = [
	{ name: 'Вася', surname: 'Пупкин', age: 30, skills: ['Разработка', 'Dev0ps'] },
	{ name: 'Катя', surname: 'Белова', age: 18, skills: ['Дизайн'] },
]

const newUsers = users
	.map(user => ({
		fullName: `${user.name} ${user.surname}`,
		skillNum: user.skills.length
	}));

console.log(newUsers);
*/

/* Методы объектов
const user = {
	name: 'John',
	surname: 'Doe',
	age: 24,
	getFullName: function () {
		return this.name + ' ' + this.surname;
	}
};

console.log(user.getFullName());

const arr = [1, 2];
arr.sort();
*/

/* Упражнение - кошелёк

const wallet = {
	balance: 0,
	operations: [],
	pushOperation: function (reason, sum) {
		this.balance += sum;
		this.operations.push({ reason, sum });
	},
	increase: function (reason, sum) {
		this.pushOperation(reason, sum);
		return true;
	},
	increase: function (reason, sum) {
		if (this.balance + sum < 0) {
			return false;
		}
		this.pushOperation(reason, sum);
		return true;
	},
	operationsCount: () => this.operations.length
}
*/

/* Итерирование по объекту
const cities = {
	msk: { temp: 25, lt: 200 },
	spb: { temp: 20, lt: 100 }
}

let sumTemp = 0;
let citiesCount = Object.keys(cities).length;
for (const c in cities) {
	sumTemp += cities[c].temp;
}
avgTemp = sumTemp / citiesCount;
console.log(avgTemp);


for (const key of Object.keys(cities)) {
	sumTemp += cities[key].temp;
	citiesCount++;
}
*/

/* Деструктуризация и rest
let user = {
	name: 'John',
	age: 30,
	city: 'Moscow'
}

const { age, ...userWithoutAge } = user;
console.log(age, userWithoutAge);

const additionalData = {
	skills: ['Engineering', 'Design'],
	creditCard: '2345-1231-1231-1232',
}

user = { ...user, ...additionalData }

console.log(user);
*/

/* Optional chaining

const cities = {
	msk: {
		temp: {
			celcius: 25,
		}
	},
	spb: {

	}
};

if (cities.spb && cities.spb.temp) {
	console.log(cities.spb.temp.celcius);
}

console.log(cities.spb?.temp?.celcius);
*/

/* Упражнение - склад
const warehouse = {
	goods: [],
	findGoodById: function (id) {
		return this.goods.find(val => val.id == id)
	},
	addGood: function (good) {
		!this.findGoodById(good.id) ? this.goods.push(good) : null;
	},
	getWeightKg: function () { return this.goods.reduce((acc, value) => acc += value.weight?.kg ?? 0, 0) },
};

/* Товары
const car = {
	id: 1,
	weight: {
		kg: 1000
	},
	brand: 'Ford'
}

const chair = {
	id: 2,
	weight: {
		kg: 2
	}
}

const paper = {
	id: 3,
	color: 'red'
}
warehouse.addGood(car);
warehouse.addGood(car);
warehouse.addGood(car);
warehouse.addGood(car);
warehouse.addGood(car);
warehouse.addGood(chair);
warehouse.addGood(paper);
console.log(warehouse.findGoodById(1));
console.log(warehouse.getWeightKg());
*/