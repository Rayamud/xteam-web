//set initial count
let count = 0;

//select value and button
const val = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach((item) => {
	item.addEventListener('click', (eo) => {
		const styles = eo.target.classList;
		if (styles.contains('decrease')) {
			count--;
		} else if (styles.contains('increase')) {
			count++;
		} else {
			count = 0;
		}
		if (count > 0) {
			val.style.color = 'green';
		}
		if (count < 0) {
			val.style.color = 'red';
		}
		if (count === 0) {
			val.style.color = '#333';
		}
		val.textContent = count;
	});
});
