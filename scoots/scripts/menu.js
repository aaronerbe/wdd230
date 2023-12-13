/* Define my constants */
const header = document.querySelector('.header');
const hamburger = document.querySelector('#hamburger-menu');
const close = document.querySelector('#close-menu');
const navContainer = document.querySelector('#navigation-links');
const mobileMenu = document.querySelector('#mobile-menu');


//toggle all the classes to show or hide the right menus
header.addEventListener('click', () => {
    hamburger.classList.toggle('hide');
    hamburger.classList.toggle('show');
    close.classList.toggle('hide');
    close.classList.toggle('show');
    navContainer.classList.toggle('hide');
    navContainer.classList.toggle('show');
});



//RESETS mobile view when returning to mobile sizes so menu doesn't get caught in weird state
//grab viewport width
let prevViewportWidth = window.innerWidth;

window.addEventListener("resize", function() {
    const viewportWidth = window.innerWidth;
    //only run if the previous width was >910 (desktop view) and new is <910 (mobile or tablet) & the "x" is showing.  
    if (prevViewportWidth > 910 && viewportWidth < 910 && (close.classList.contains('show'))) {
        header.click();
    }
    //resetting vewport width to current one so we can track previous state
    prevViewportWidth = viewportWidth;
});
