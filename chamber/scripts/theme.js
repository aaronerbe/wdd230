//const sun = "images/white-sun.png";
const sun = "images/sun-white.svg"
//const moon = "images/moon.png"
const moon = "images/moon-white.svg"

var theme = "light";
const root = document.querySelector(":root");
const container = document.getElementsByClassName("theme-container")[0];
container.addEventListener("click", setTheme);
const themeIcon = document.getElementById("theme-icon");
//setup join themes:
const joinTitle = document.getElementById("join-title");
const memTitle = document.querySelectorAll('.membership-title');
if (joinTitle){
  joinTitle.style.color = 'var(--themed-text)';
  joinTitle.style.textAlign = 'center';
  joinTitle.style.margin = '3rem auto';
  memTitle.forEach(memTitle => {
    memTitle.style.color = 'var(--highlight-color)';
  });
}
//memTitle.style.backgroundColor = 'pink';


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
  window.onload = function(){
    setLight();
  }