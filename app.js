'use strict';

/*
const panelText = document.querySelector('.panel').textContent;

document.querySelector('.panel').textContent = 'New text';
document.querySelector('.input').value = 'Text';
*/

// document.querySelector('.button').addEventListener('click', changeClick);

function submitForm() {
	const input = document.querySelector('.input').value;
	if (!input) {
		return;
	}
	const obj = {
		text: input
	}
	const str = JSON.stringify(obj);
	localStorage.setItem('text', str);
	document.querySelector('.panel').innerText = input;
	document.querySelector('.input').value = '';
	// document.querySelector('.notification').style.display = 'block';
	// document.querySelector('.notification').classList.add('notification_active');
	// document.querySelector('.notification').classList.remove('notification_hidden');
	// console.log(document.querySelector('.notification').getAttribute('class'));
	// document.querySelector('.notification').setAttribute('class', 'notification');
	// document.querySelector('.notification').setAttribute('key', 1);


	console.log(input);
}
function inputChange(e) {
	if (e.code === 'Enter') {
		console.log('Enter');
		submitForm();
	}
}

// console.log(document.querySelector('.one').innerText);
// console.log(document.querySelectorAll('.one'));
// console.log(document.querySelector('#two').innerText);
// console.log(document.getElementById('two').innerText);
// console.log(document.querySelector('[user-id="4"]').innerText);
// const panelText = 'Panel';
// const newElement = document.createElement('div');
// newElement.setAttribute('user-id', 1);
// newElement.classList.add('panel');
// newElement.innerText = 'Кнопка';
// newElement.innerHTML = `<button class="button">${panelText}</button>`;
// document.querySelector('.test').appendChild(newElement);

// localStorage.setItem('token1', 'sdasdas');
// localStorage.setItem('token2', 2);
// localStorage.setItem('token3', true);

// console.log(localStorage.getItem('token3'));
// localStorage.removeItem('token2');
// localStorage.clear();

// const obj = JSON.parse('{"a": 1}');
// console.log(obj);
// console.log(JSON.stringify(obj));