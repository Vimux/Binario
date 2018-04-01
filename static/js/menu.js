var toggle = document.getElementById('toggle');
var menu = document.getElementById('menu');

toggle.addEventListener('click', function () {
	if (menu.classList.contains('main-nav__list--active')) {
		this.setAttribute('aria-expanded', 'false');
		this.classList.remove('main-nav__btn--active');
		menu.classList.remove('main-nav__list--active');
	} else {
		menu.classList.add('main-nav__list--active');
		this.classList.add('main-nav__btn--active');
		this.setAttribute('aria-expanded', 'true');
	}
});
