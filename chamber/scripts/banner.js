const banner = document.getElementById('hero-banner');
const bannerCloseButton = document.getElementById('hero-banner-close-button');
today = new Date();
bannerDateOption = {weekday: 'long'};
const dayOfWeek = today.toLocaleDateString('en-US', bannerDateOption);
const listOfBannerDays = ['Monday', 'Tuesday', 'Wednesday'];

if (listOfBannerDays.includes(dayOfWeek)){
    //console.log(`Today is ${dayOfWeek}`);
    banner.style.display = 'flex';
}
else{
    banner.style.display = 'none';
}
//close banner if button clicked
bannerCloseButton.addEventListener('click',function(){
    banner.style.display = 'none';
});
//some cool effects when hovering over the button
bannerCloseButton.addEventListener('mouseover',function(){
    banner.style.opacity = "0.8";
    banner.style.transition = ".25s";
    bannerCloseButton.style.scale = '1.05';
    bannerCloseButton.style.transition ='.5s' ;
    bannerCloseButton.style.backgroundColor = 'var(--highlight-color)' ;
    bannerCloseButton.style.borderRadius = '4px';
})
bannerCloseButton.addEventListener('mouseout',function(){
    banner.style.opacity = "1";
    banner.style.transition = ".25s";
    bannerCloseButton.style.scale = '1';
    bannerCloseButton.style.transition ='0.25s' ;
    bannerCloseButton.style.backgroundColor = 'transparent' ;
    bannerCloseButton.style.borderRadius = '4px';
})