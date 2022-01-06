
const menuBtn = document.querySelector(".navBarBtn-menu");
const cHeader = document.querySelector(".cHeader");
const navBarSite = document.getElementById('navBarSite');
const darkMode = document.getElementById('darkMode');

let menuOpen = false;



menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("openNav");
    cHeader.classList.add("openNav");
    navBarSite.classList.add('showNav');
    darkMode.classList.add('showDarkMode');
    menuOpen = true;
  } else {
    menuBtn.classList.remove("openNav");
    cHeader.classList.remove("openNav");
    navBarSite.classList.remove('showNav');
    darkMode.classList.remove('showDarkMode');
    menuOpen = false;
  }
})


