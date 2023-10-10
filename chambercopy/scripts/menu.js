/* Define my constants using DOM */
//const navMenu = document.querySelector('.menu-list')
const navContainer = document.querySelector('.navigation');
const hamburger = document.querySelector('#hamburger');
const main=document.querySelector('main');
const logo=document.getElementById('logo-img')
/*const logo=document.querySelector('.logo');  
const header=document.querySelector('header');
const footer=document.querySelector('footer');
*/
/* Using event listener, toggle the 'show' option for the nav and hamburger menus */
hamburger.addEventListener('click', () => {
	//navMenu.classList.toggle('show');
	hamburger.classList.toggle('show');
	navContainer.classList.toggle('show');
	main.classList.toggle('show');
	if (logo.src.includes("images/small-brown-logo-transparent.png")){
		logo.src="images/small-white-logo-transparent.png"
	}
	else{
		logo.src="images/small-brown-logo-transparent.png"
	}
});