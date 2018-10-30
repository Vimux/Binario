var toggle = document.getElementById('toggle');
var menu = document.getElementById('menu');

toggle.addEventListener('click', function () {
	menu.classList.toggle('main-nav__list--active');
	this.classList.toggle('main-nav__btn--active');
	this.setAttribute(
		'aria-expanded',
		this.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
	);
});
