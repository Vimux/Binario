const toggle = document.getElementById('toggle');
const menu = document.getElementById('menu');

function toggleMenu() {
	menu.classList.toggle('main-nav__list--active');
	this.classList.toggle('main-nav__btn--active');
	this.setAttribute(
		'aria-expanded',
		this.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
	);
}

toggle.addEventListener('click', toggleMenu, false);
