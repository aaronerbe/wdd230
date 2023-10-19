/* Define my constants using DOM */
const navContainer = document.querySelector('.navigation');
const hamburger = document.querySelector('#hamburger');
const main=document.querySelector('main');
const logo=document.getElementById('logo-img')

hamburger.addEventListener('click', () => {
	//navMenu.classList.toggle('show');
	hamburger.classList.toggle('show');
	navContainer.classList.toggle('show');
	main.classList.toggle('show');
	if (logo.src.includes("images/small-brown-logo-transparent.webp")){
		logo.src="images/small-white-logo-transparent.webp"
	}
	else{
		logo.src="images/small-brown-logo-transparent.webp"
	}
});