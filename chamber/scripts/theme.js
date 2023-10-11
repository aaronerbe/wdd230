const sun = "images/white-sun.png";
const moon = "images/moon.png"

var theme = "light";
const root = document.querySelector(":root");
const container = document.getElementsByClassName("theme-container")[0];
const themeIcon = document.getElementById("theme-icon");
container.addEventListener("click", setTheme);
console.log(theme);

  function setTheme() {
    switch (theme) {
      case "dark":
        console.log("running setLight");
        setLight();
        theme = "light";
        console.log(theme)
        break;
      case "light":
        console.log("running setDark");
        setDark();
        theme = "dark";
        console.log(theme)
        break;
    }
  }

  function setLight() {
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
    root.style.setProperty("--themed-background","var(--dark-accent-color)");
    root.style.setProperty("--themed-text","var(--secondary-color)");
    root.style.setProperty("--themed-highlight-background", "var(--dark-accent-color)")
    console.log(root.style)
    container.classList.remove("shadow-light");
    setTimeout(() => {
      container.classList.add("shadow-dark");
      themeIcon.classList.remove("change");
    }, 300);
    themeIcon.classList.add("change");
    themeIcon.src = moon;
  }