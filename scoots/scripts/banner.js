const banner = document.querySelector('.banner-container');
const bannerCloseButton = document.getElementById('weather-alert-close-button');

bannerCloseButton.addEventListener('click',function(){
    banner.style.display = 'none';
});
//some cool effects when hovering over the button
banner.addEventListener('mouseover',function(){
    banner.style.opacity = "0.95";
    banner.style.transition = ".25s";
    bannerCloseButton.style.scale = '1.1';
    bannerCloseButton.style.transition ='.5s' ;
    bannerCloseButton.style.backgroundColor = 'var(--button-color)' ;
    bannerCloseButton.style.borderRadius = '4px';
    //bannerCloseButton.setAttribute('fill','#ffffff');
    bannerCloseButton.setAttribute('src','images/icons/close-button-black.svg');
})
banner.addEventListener('mouseout',function(){
    banner.style.opacity = "1";
    banner.style.transition = ".25s";
    bannerCloseButton.style.scale = '1';
    bannerCloseButton.style.transition ='0.25s' ;
    bannerCloseButton.style.backgroundColor = 'transparent' ;
    bannerCloseButton.style.borderRadius = '4px';
    //bannerCloseButton.setAttribute('fill','#000000');
    bannerCloseButton.setAttribute('src','images/icons/close-button-white.svg');
})
//make it easier to close the banner
//if it were up to me, I'd save the state to memory so if it's closed it doesn't come back again.  
banner.addEventListener('click', function(){
    bannerCloseButton.click();
})