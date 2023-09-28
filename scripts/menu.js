/* Define my constants using DOM */
const navMenu = document.querySelector('.navigation')
const hamburger = document.querySelector('#menu');

/* Using event listener, toggle the 'show' option for the nav and hamburger menus */
hamburger.addEventListener('click', () => {
	navMenu.classList.toggle('show');
	hamburger.classList.toggle('show');
});