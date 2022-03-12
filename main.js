const logo = document.querySelectorAll('#logo path');

for (let i = 0; i < logo.length; i++) {
	console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}

//local review data

const reviews = [
	{
		id: 1,
		name: 'Aya',
		job: 'Web Developer',
		img: './images/pro2.jpg',
		text:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat in adipisci neque veritatis accusantium id magni nostrum mollitia, error iste dolor, non nesciunt, delectus pariatur!'
	},
	{
		id: 2,
		name: 'Abdullah Nabeel',
		job: 'Web Developer',
		img: './images/abdulla.jpg',
		text:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat in adipisci neque veritatis accusantium id magni nostrum mollitia, error iste dolor, non nesciunt, delectus pariatur!'
	},
	{
		id: 3,
		name: 'Beno',
		job: 'PHP Developer',
		img: './images/pro1.jpg',
		text:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat in adipisci neque veritatis accusantium id magni nostrum mollitia, error iste dolor, non nesciunt, delectus pariatur!'
	},
	{
		id: 4,
		name: 'Amer Mohammed',
		job: 'BackEnd Developer',
		img: './images/amer.jpg',
		text:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat in adipisci neque veritatis accusantium id magni nostrum mollitia, error iste dolor, non nesciunt, delectus pariatur!'
	}
];

//select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

//set starting item
let currentItem = 0;

//load intial item
window.addEventListener('DOMContentLoaded', (eo) => {
	showPerson();
});

//show person based on item

function showPerson() {
	const item = reviews[currentItem];
	img.src = item.img;
	author.textContent = item.name;
	job.textContent = item.job;
	info.textContent = item.text;
}

//show next person
nextBtn.addEventListener('click', (eo) => {
	currentItem++;
	if (currentItem > reviews.length - 1) {
		currentItem = 0;
	}
	showPerson(currentItem);
});

//show prev person
prevBtn.addEventListener('click', (eo) => {
	currentItem--;
	if (currentItem < 0) {
		currentItem = reviews.length - 1;
	}
	showPerson(currentItem);
});

//show random person
randomBtn.addEventListener('click', () => {
	currentItem = Math.floor(Math.random() * reviews.length);
	console.log(currentItem);
	showPerson();
});
/****************************to do list****************************** */

/****************************to do list****************************** */
