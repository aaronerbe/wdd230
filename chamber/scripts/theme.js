//const sun = "images/white-sun.png";
const sun = "images/sun-white.svg"
//const moon = "images/moon.png"
const moon = "images/moon-white.svg"

var theme = "light";
const root = document.querySelector(":root");
const container = document.getElementsByClassName("theme-container")[0];
container.addEventListener("click", setTheme);
const themeIcon = document.getElementById("theme-icon");

window.onload = function(){
  //check local storage for a theme state, if set, use that.  else use setLight() to default to light theme
  //setLight();
  var theme = getThemeState() || "light";
  if (theme == "dark"){
    setDark();
  }else{
    setLight()
  }
}

//save the theme state to local storage to remember for persistent theme
function setThemeState(theme){
  localStorage.setItem("themeState", theme);
}
//get the theme state from local storage
function getThemeState(){
  return localStorage.getItem("themeState");
}

//setup join themes:
//const joinTitle = document.getElementById("join-title");
//const memTitle = document.querySelectorAll('.membership-title');
//if (joinTitle){
//  joinTitle.style.color = 'var(--themed-text)';
//  joinTitle.style.textAlign = 'center';
//  joinTitle.style.margin = '3rem auto';
  //memTitle.forEach(memTitle => {
  ////  memTitle.style.color = 'var(--highlight-color)';
  //  memTitle.style.fontSize = '2rem';
  //  memTitle.style.padding = '2rem 0';

  //});
//}
//const footerDates = document.querySelectorAll('.footer-dates');
//if (footerDates){
//  footerDates.forEach(footerDates => {
//    //footerDates.style.color = 'var(--secondary-color)';
//  });
//}

//const footerInfo = document.querySelector('.footer-info');
//footerInfo.style.color = 'var(--secondary-color)';
//footerInfo.style.textDecoration = 'none';

  function setTheme() {
    switch (theme) {
      case "dark":
        setLight();
        theme = "light";
        break;
      case "light":
        setDark();
        theme = "dark";
        break;
    }
    setThemeState(theme);
  }

  function setLight() {
    //setup css for light theme on the icon
    shadowSetLight()
    root.style.setProperty("--themed-background","var(--secondary-color)");
    root.style.setProperty("--themed-text","var(--dark-accent-color)");
    root.style.setProperty("--themed-highlight-background", "var(--primary-color)")
    container.classList.remove("shadow-dark");
    setTimeout(() => {
      container.classList.add("shadow-light");
      themeIcon.classList.remove("change");
    }, 300);
    themeIcon.classList.add("change");
    themeIcon.src = sun;
    //make sure theme var is set incase it was loaded from local storage
    theme = "light";
  }

  function setDark() {
    //setup css for dark theme on the icon
    shadowSetDark();
    root.style.setProperty("--themed-background","var(--dark-accent-color)");
    root.style.setProperty("--themed-text","var(--secondary-color)");
    root.style.setProperty("--themed-highlight-background", "var(--dark-accent-color)")
    //console.log(root.style)
    container.classList.remove("shadow-light");
    setTimeout(() => {
      container.classList.add("shadow-dark");
      themeIcon.classList.remove("change");
    }, 300);
    themeIcon.classList.add("change");
    themeIcon.src = moon;
    //make sure theme var is set incase it was loaded from local storage
    theme = "dark";
  }

  /* Apply dynamic styling to the buttons */
  function shadowSetDark(){
    container.style.background = 'linear-gradient(145deg, #23282c,#1e2125)';
    container.style.boxShadow="17px 17px 20px var(--dark-accent-color),-17px -17px 24px var(--dark-accent-color),inset 5px 5px 8px rgba(209, 217, 230, 0.35),inset -5px -5px 8px rgba(255, 255, 255, 0.3)";
    container.style.width = '70px';
    container.style.height = '70px';
    container.style.borderRadius = '50%';
    container.style.position = "absolute";
    container.style.top = '5%';
    container.style.right = '0%';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.transition = '0s';
    container.style.transform = 'scale(0.4)';
    container.style.zIndex = '100';
    
  }
  function shadowSetLight(){
    container.style.background = 'transparent';
    container.style.boxShadow="10px 10px 15px -5px var(--secondary-color),-10px -10px 25px var(--secondary-color),inset 5px 5px 8px rgba(209, 217, 230, 0.35),inset -5px -5px 8px rgba(255, 255, 255, 0.3)";
    container.style.width = '70px';
    container.style.height = '70px';
    container.style.borderRadius = '50%';
    container.style.position = "absolute";
    container.style.top = '5%';
    container.style.right = '0%';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.transition = '0s';
    container.style.transform = 'scale(0.4)';
    container.style.zIndex = '100';
  }
  container.addEventListener('mouseover', function(){
    container.style.opacity = 0.8;
  })
  container.addEventListener('mouseout', function(){
    container.style.opacity = 1;
  })
