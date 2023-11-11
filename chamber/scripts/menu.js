/* Define my constants using DOM */
const navContainer = document.querySelector('.navigation');
const hamburger = document.querySelector('#hamburger');
const main=document.querySelector('main');
const logo=document.getElementById('logo-img')

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('show');
	//hamburger.id.toggle('show')
	navContainer.classList.toggle('show');
	main.classList.toggle('show');
	if (logo.src.includes("images/small-brown-logo-transparent.webp")){
		logo.src="images/small-white-logo-transparent.webp"
	}
	else{
		logo.src="images/small-brown-logo-transparent.webp"
	}
});


let portrait = window.matchMedia("(orientation: portrait)");

portrait.addEventListener("change", function(e) {
	//if it changes close the menu (if it's open) so it doesn't get caught in weird state where buttons aren't visible
	//close the menu by 'clicking' the button which kicks off the function above to toggle all the elements
	if(e.matches) {
        // Portrait mode
		console.log("portrait");
    } else {
        // Landscape
		if (hamburger.classList.contains('show')){
			hamburger.click();
		}
		console.log("landscape");
    }
})