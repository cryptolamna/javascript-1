'use strict';


/* Пример scope chain
const successMessage = 'Успех';

const user = {
	name: 'JOHN',
	roles: []
};

function addRole(user, role) {
	if (role === 'admin') {
		const message = 'Ошибка';
		console.log(message);
		return user;
	}
	user.roles.push(role);
	console.log(successMessage);

	function logRoles() {
		console.log(user.roles);
	}

	logRoles();

	return user;
}

console.log(addRole(user, 'dev'));
*/

/* Всплытие
addUser();

console.log(b);

const a = 3;
var b = 2;
console.log(b);
function addUser() {
	console.log('User added');

}

addUser();

arr1();
var arr1 = () => {
	console.log('arr1');
}

arr1();
*/

/* this
console.log(window === this);

function addNum(num1, num2) {
	console.log(undefined === this); // this === window in no strict
	return num1 + num2;
}

const addNum2 = (num1, num2) => {
	console.log(this === window);
	return num1 + num2;
}

const user = {
	name: 'John',
	surname: 'Doe',
	getFullName: function () {
		console.log(this);
		return this.name + ' ' + this.surname;
	}
};

addNum(1, 2);
addNum2();

user.getFullName();

const user2 = {
	name: 'J',
	surname: 'D'
};

user2.getFullName = user.getFullName;
console.log(user2.getFullName());

const getFullName = user2.getFullName;
console.log(getFullName());
*/

/* Контекст в методах
const user = {
	firstname: 'John',
	surname: 'Doe',
	age: 20,
	getUserInfo() {
		console.log(this === user);
		console.log(`${this.firstname} ${this.surname}`);

		const canDrink = () => {
			console.log(this === undefined);
			if (this.age >= 18) {
				console.log('Can drin');
			} else {
				console.log('Can"t drink');
			}
		}
		canDrink();
	},
	getUserInfoArrow: () => {
		console.log(this === window && this !== user);
		console.log(`${this.firstname} ${this.surname}`);
	}
}
user.getUserInfo();
user.getUserInfoArrow();
*/

/* Arguments
function sumNum(num1, num2) {
	console.log(this === undefined);
	console.log(arguments);
	return Array.from(arguments).reduce((acc, value) => acc + value, 0);
}

const sumNumArr = (num1, num2) => {
	console.log(this === window);
	console.log(arguments); // is not defined
	return Array.from(arguments).reduce((acc, value) => acc + value, 0); // error
}


console.log(sumNumArr(1, 4, 3, 7, 5, 3, 2));
*/

/* Упражнение - объект в объекте
*/
const company = {
	name: "ООО Агро",
	employees: [
		{ name: "Света", getName() { return this.name } },
	],
	ceo: { name: "Вася", getName() { return this.name } },
	getCompanyName() {
		return this.name;
	},
	getCEOName() {
		return this.ceo.getName();
	},
	getEmployeesName() {
		return this.employees.map(employee => employee.getName());
	}
};

console.log(company.getCompanyName());
console.log(company.getCEOName());
console.log(company.getEmployeesName());

