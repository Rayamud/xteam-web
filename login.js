const login = document.getElementById('log-in');
const register = document.getElementById('registrate');
const btn = document.getElementById('btn-login');
const regBtn = document.querySelector('.reg-btn');
const logBtn = document.querySelector('.toggle-btn');

regBtn.addEventListener('click', (eo) => {
	register.classList.remove('active');
	login.classList.add('active');
	//btn.style.removeProperty('left');
	eo.preventDefault();

	btn.style.right = '0';
});

logBtn.addEventListener('click', (eo) => {
	login.classList.remove('active');
	register.classList.add('active');
	btn.style.removeProperty('right');
});

console.log('heeeelo');
