const themeButton = document.querySelector(".theme");
const bodyWrapper = document.querySelector(".body");

themeButton.addEventListener("click", () => {
  if (bodyWrapper.classList.contains("dark")) {
    bodyWrapper.classList.remove("dark");
    themeButton.innerText = "Dark Mode";
    themeButton.style.border = "2px solid gold";
  } else {
    bodyWrapper.classList.add("dark");
    themeButton.innerText = "Light Mode";
    themeButton.style.border = "2px solid gold";
  }
});

const navMenu = document.querySelector(".nav-aside");
const navToggler = document.querySelector(".nav-toggler");
const logo = document.querySelector(".logo");
const navLinks = document.querySelector(".nav-links");

navToggler.addEventListener("click", () => {
  if (navMenu.style.display != "block") {
    /*i used != 'block' instead of ==='none' becasue it makes the hamburger button functional on one click*/
    navMenu.style.display = "block";
    navMenu.classList.add("open");
    navToggler.style.zIndex = "1";
    navToggler.style.backgroundColor = "inherit";
    navToggler.classList.add("active");
    logo.style.marginLeft = ".9rem";
    bodyWrapper.style.overflow =
      "hidden"; /* this disallows scrolling on the website when the navMenu is being displayed */
  } else {
    navMenu.style.display = "none";
    navMenu.classList.remove("open");
    navToggler.classList.remove("active");
    logo.style.marginLeft = "1rem";
    bodyWrapper.style.overflow = "visible";
  }
});
