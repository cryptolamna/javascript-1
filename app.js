/* Знакомство с массивами
const role1 = 'admin';
const role2 = 'user';
const role3 = 'superuser';

const roles = ['admin', 'user', 'superuser'];
const userInfo = ['John', 25];
console.log(roles);
console.log(roles[2]);
console.log(roles.length);

console.log(roles.at(0));
console.log(roles.at(-1));

const usersAges = [2040 - 2022, 20 - '6'];
console.log(usersAges);

const usernames = new Array('John', 'Travis', 'Mike');
console.log(usernames);

function square(el) {
	return el * el;
}
console.log(square(2));
*/

/* Управление элементами массива
const users = ['John', 'Travis', 'Mike'];
users[2] = 'Donald';
console.log(users);
users[4] = 'Mikita';
console.log(users);

const arrayLength = users.push('Arsen');
console.log(arrayLength);
console.log(users);

users.unshift('Pavel')
console.log(users);

console.log(users.pop());

console.log(users.shift());
console.log(users);
*/

/* Поиск элемента
const roles = ['user', 'admin', 'manager', 'admin'];
const elIndex = roles.indexOf('admin');
console.log(elIndex);
const elIndex1 = roles.indexOf('superuser');
console.log(elIndex1);

if (roles.indexOf('admin') >= 0) {
	console.log('Access granted');
}

console.log(roles.includes('admin'));
console.log(roles.includes('superuser'));
*/

/* Slice, splice, concat, reverse
const roles = ['user', 'admin', 'manager', 'superuser'];
const res = roles.slice(2);
console.log(roles);
console.log(res);

const res2 = roles.slice(0, 3);
console.log(res2);
console.log(roles);

const res3 = roles.slice(-1);
console.log(res3);

const res4 = roles.slice(1, -1);
console.log(res4);

console.log(roles);
// const res5 = roles.splice(2);
// console.log(res5);
// console.log(roles);

// const res6 = roles.splice(2, 1);
// console.log(res6);
// console.log(roles);

roles.reverse();
console.log(roles);

const newRoles = ['sysadmin', 'developer'];
const res9 = roles.concat(newRoles);
console.log(res9);
*/

/* Из строки в массив и обратно
const roles = ['user', 'admin', 'manager', 'superuser'];

const url = 'auth/user/login';
const res = url.split('/');

console.log(res);


console.log(roles.join('_'));
*/

/* Упражнение - Обновление списка задач & Принцип DRY

const tasks = ['Task #1'];

const addTask = taskName => tasks.push(taskName);
const removeTask = taskName => {
	const index = tasks.indexOf(taskName);
	if (index === -1) {
		return;
	}
	return tasks.splice(index, 1);
}
const prioritizeTask = taskName => {
	const result = removeTask(taskName);
	if (!result) {
		return;
	}
	tasks.unshift(taskName);
}

addTask('Task #2');
console.log(tasks);
removeTask('Task #1');
console.log(tasks);
addTask('Task #3');
prioritizeTask('Task #3');
console.log(tasks);
*/

/* Деструктуризация
const userData = ['John', 18, 'Warsaw'];

// const username = userData[0];
// const age = userData[1];
// const city = userData[2];

const [username, _, city] = userData;

console.log(username, city);
*/

/* Rest оператор
const data = [1, 2, 3, 4, 5, 6];
const [one, two, ...others] = data;
console.log(one, two, others);
*/

/* Упражнение - Функция разбора URL
*/
const url = 'https://purpleschool.ru/course/javascript';

// const protocol = url.split('://').at(0);
// const other = url.split(`${protocol}://`)[1];

// const [domain, ...path] = other.split('/');

// console.log(protocol, other, domain, path.join('/'));
function getUrlParts(url) {
	const [protocol, _, host, ...path] = url.split('/');
	console.log(protocol, host, path);
	console.log(`Протокол: ${protocol.split(':')[0]}`)
	console.log(`Доменное имя: ${host}`)
	console.log(`Путь: /${path.join('/')}`)

}

getUrlParts(url);