/* Define my constants using DOM */
const navMenu = document.querySelector('.navigation')
const hamburger = document.querySelector('#menu');
const header = document.querySelector('header');
const mainCont = document.querySelector('.main');
const footer = document.querySelector('.footer');

/* Using event listener, toggle the 'show' option for the nav and hamburger menus */
hamburger.addEventListener('click', () => {
	navMenu.classList.toggle('show');
	hamburger.classList.toggle('show');
	mainCont.classList.toggle('show');
	header.classList.toggle('show');
	footer.classList.toggle('show');
	console.log('toggle');
});