'use strict';
/* Пример работы call stack

const sum = 1;
console.log('start');
console.log(sum);

function add5(n) {
	n = n + 5;
	if (n > 1000) {
		return n;
	}
	console.log(n);
	return add5(n);
}

add5(sum);
console.log('ended');
*/

/*
let firstName = 'Anton';
const firstName2 = firstName;
firstName = 'Pavel';
console.log(firstName, firstName2);

const user1 = {
	name: 'Pavel'
};

const user2 = user1;
user2.name = 'New';
console.log(user1, user2);
*/
const user = {
	name: 'Anton',
	id: 1,
	roles: ['Admin']
};

// const newUser = Object.assign({}, user);
// user.name = 'NewUser';

// console.log(user, newUser);


const newUser2 = { ...user };
newUser2.name = 'NewUser';
newUser2.roles.push('User');
console.log(user, newUser2);