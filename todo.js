const push = document.querySelector('#push');
const input = document.querySelector('#input');
const tasks = document.querySelector('#tasks');
const container = document.querySelector('.container-todo');
const taskName = document.querySelector('.taskname');
const content = document.querySelector('.content');
const form = document.querySelector('form');

push.addEventListener('click', (eo) => {
	eo.preventDefault();

	const addTask = `<div id="tasks">
       <div class="task">
             <span class="taskname">
                ${input.value}
            </span>
            <button class="delete">
               <i class="far fa-trash-alt"></i>
               <i class="far fa-angry"></i>
               <i class="far fa-check-circle"></i>
            
            </button>
        </div>
    </div>
    `;

	content.innerHTML += addTask;
	input.value = '';
});

container.addEventListener('click', (eo) => {
	if (eo.target.className == 'far fa-trash-alt') {
		eo.target.parentElement.parentElement.parentElement.remove();
	} else if (eo.target.className == 'far fa-angry') {
		eo.target.classList.add('dn');

		const heart = `<i class="far fa-smile-beam"></i>
        `;

		eo.target.parentElement.parentElement.getElementsByClassName('taskname')[0].classList.add('finish');

		eo.target.parentElement.innerHTML += heart;
	} else if (eo.target.className == 'far fa-smile-beam') {
		eo.target.parentElement.parentElement.getElementsByClassName('taskname')[0].classList.remove('finish');

		//eo.target.remove();    اذا رح نحذفه بعد منكدر نستعمل ال eo.targer(العنصر الذي يقع عليه الحدث)

		eo.target.classList.add('dn');
		const addAngery = `<i class="far fa-angry"></i>
        `;
		eo.target.parentElement.innerHTML += addAngery;

		// من ندوس على الجيك ساين رح يصعد التاسك يصير اول شي
	} else if (eo.target.className == 'far fa-check-circle') {
		eo.target.classList.add('purple');
		content.prepend(eo.target.parentElement.parentElement.parentElement);

		//من ندوس ع الجيك ساين يروح لونه
	} else if (eo.target.className == 'far fa-check-circle purple') {
		eo.target.classList.remove('purple');
	}
});

///for smoth scrolling
