<<<<<<< HEAD
const pageHeader = document.querySelector(".page-header");
const prHeader = document.querySelector(".prHeader");
const hwHeader = document.querySelector(".hwHeader");

function topBanner() {
  let bannerTop = document.createElement("div");

  let bannerDiv = document.createElement("div");
  let banner = document.createElement("h1");

  let sliderDiv = document.createElement("div");
  // let sliderTop = document.createElement("p");
  let sliderImg = document.createElement("img");
  // let sliderBottom = document.createElement("p");

  /*
  let imgBar = document.createElement("div");
  let htmlLogo = document.createElement("img");
  let cssLogo = document.createElement("img");
  let sassLogo = document.createElement("img");
  let jsLogo = document.createElement("img");
  */

  sliderDiv.setAttribute("class", "slider");
  sliderDiv.style.position = "absolute";
  //sliderDiv.style.display = "flex";
  //sliderDiv.style.flexDirection = "column";
  //sliderDiv.style.alignItems = "center";
  //sliderDiv.style.justifyContent = "center";
  sliderDiv.style.backgroundColor = "var(--darkModeBg)"
  sliderDiv.style.top = "80px";
  sliderDiv.style.left = "calc(1.5vw + 1rem)";
  sliderDiv.style.width = "calc(6.5vw + 6.5rem)";
  sliderDiv.style.height = "calc(4vw + 4rem)";
  sliderDiv.style.fontFamily = "'Audiowide', cursive";
  sliderDiv.style.border = "5px double var(--themeTxtClr)";
  sliderDiv.style.borderRadius = "1rem";
  bannerTop.appendChild(sliderDiv);
/*
  sliderTop.appendChild(document.createTextNode("Guycorp"));
  sliderTop.setAttribute("class", "logo__top");
  sliderTop.style.top = "-40px";
  sliderTop.style.left = "50%";
  sliderTop.style.transform = "translateX(-50%)";
  sliderTop.style.position = "absolute";
  sliderTop.style.fontSize = "1.5rem";
  sliderTop.style.color = "var(--darkModeTxtClr)";
  sliderTop.style.letterSpacing = "0.15rem";
  sliderDiv.appendChild(sliderTop);
*/
  sliderImg.setAttribute("class", "logo__img");
  sliderImg.setAttribute(
    "src",
    "img/tech_img/green-chameleon-s9CC2SKySJM-unsplash.jpg"
  );
  sliderImg.style.position = "absolute";
  sliderImg.style.width = "100%";
  sliderImg.style.height = "100%";
  sliderImg.style.opacity = "0.8"
  sliderImg.style.borderRadius = ".75rem";
  sliderDiv.appendChild(sliderImg);
/*
  sliderBottom.appendChild(document.createTextNode("Industries"));
  sliderBottom.setAttribute("class", "logo__bottom");
  sliderBottom.style.bottom = "-40px";
  sliderBottom.style.left = "50%";
  sliderBottom.style.transform = "translateX(-50%)";
  sliderBottom.style.position = "absolute";
  sliderBottom.style.fontSize = "1.5rem";
  sliderBottom.style.color = "var(--darkModeTxtClr)";
  sliderBottom.style.letterSpacing = "0.15rem";
  sliderDiv.appendChild(sliderBottom);

  imgBar.setAttribute("class", "icon");
  imgBar.style.position = "absolute";
  imgBar.style.top = "5%";
  imgBar.style.right = "5%";
  imgBar.style.display = "flex";
  imgBar.style.alignItems = "center";
  imgBar.style.justifyContent = "center";
  bannerTop.appendChild(imgBar);
  htmlLogo.setAttribute("class", "htmlLogo");
  htmlLogo.setAttribute("src", "img/HTML5_logo.svg.png");
  htmlLogo.style.margin = "calc(1vw + 0.25rem)";
  htmlLogo.style.width = "calc(4vw + 4rem)";
  imgBar.appendChild(htmlLogo);
  cssLogo.setAttribute("class", "cssLogo");
  cssLogo.setAttribute("src", "img/CSS.3b.svg.png");
  cssLogo.style.margin = "calc(1vw + 0.25rem)";
  cssLogo.style.width = "calc(4vw + 4rem)";
  imgBar.appendChild(cssLogo);
  sassLogo.setAttribute("class", "sassLogo");
  sassLogo.setAttribute("src", "img/sass-1.svg");
  sassLogo.style.margin = "calc(1vw + 0.25rem)";
  sassLogo.style.width = "calc(4vw + 4rem)";
  imgBar.appendChild(sassLogo);
  jsLogo.setAttribute("class", "jsLogo");
  jsLogo.setAttribute("src", "img/Javascript-logo.svg.png");
  jsLogo.style.margin = "calc(1vw + 0.25rem)";
  jsLogo.style.width = "calc(4vw + 4rem)";
  imgBar.appendChild(jsLogo);
*/
  banner.appendChild(document.createTextNode("Christopher T. Guy"));
  banner.setAttribute("class", "banner1");
  banner.style.position = "absolute";
  banner.style.bottom = "calc(7vw - 0.75rem)";
  banner.style.right = "5%";
  banner.style.transform = "rotate(-3.8deg)";
  banner.style.fontSize = "calc(1.5vw + 1.25rem)";
  banner.style.fontFamily = "'Audiowide', cursive";
  banner.style.color = "var(--darkModeTxtClr)";
  bannerDiv.appendChild(banner);

  bannerTop.appendChild(bannerDiv);
  bannerTop.setAttribute("class", "topBanner");
  bannerTop.style.position = "relative";
  bannerTop.style.height = "25vw";
  bannerTop.style.minHeight = "225px";
  bannerTop.style.clipPath =
    "polygon(0 0, 100% 0, 100% calc(100% - 7vw), 0 100%)";
  bannerTop.style.marginBottom = "-7vw";
  bannerTop.style.backgroundImage = "url('img/background_2.png')";
  bannerTop.style.backgroundSize = "cover";
  bannerTop.style.backgroundColor = "var(--darkModeBgblk)";
  bannerTop.style.borderTop = "3px solid var(--themeBdr)";
  bannerTop.style.zIndex = "1";
  pageHeader.appendChild(bannerTop);
}
function hwSection() {
  let sectionTitle = document.createElement("div");
  let title = document.createElement("h2");

  title.appendChild(document.createTextNode('"Home Work"'));
  title.style.position = "absolute";
  title.style.top = "calc(2vw + 2rem)";
  title.style.textAlign = "center";
  title.style.width = "100%";
  title.style.color = "var(--themeTxtClr)";
  title.style.textShadow = "0px 0px 10px var(--black)";
  title.style.fontSize = "calc(2vw + 2rem)";
  title.style.fontFamily = "'Audiowide', cursive";

  sectionTitle.appendChild(title);
  sectionTitle.setAttribute("class", "sectionTitle");
  sectionTitle.style.position = "relative";
  sectionTitle.style.height = "calc(5.5vw + 5rem)";
  sectionTitle.style.width = "100%";
  sectionTitle.style.backgroundColor = "var(--darkModeBg)";
  sectionTitle.style.boxShadow = "0px 1px 5px var(--themeTxtClr)";

  hwHeader.appendChild(sectionTitle);
}
function prSection() {
  let sectionTitle = document.createElement("div");
  let title = document.createElement("h2");

  title.appendChild(document.createTextNode('"The Program"'));
  title.style.position = "absolute";
  title.style.top = "calc(3vw + 3rem)";
  title.style.textAlign = "center";
  title.style.width = "100%";
  title.style.color = "var(--themeTxtClr)";
  title.style.textShadow = "0px 0px 10px var(--black)";
  title.style.fontSize = "calc(2vw + 2rem)";
  title.style.fontFamily = "'Audiowide', cursive";

  sectionTitle.appendChild(title);
  sectionTitle.setAttribute("class", "sectionTitle");
  sectionTitle.style.position = "relative";
  sectionTitle.style.height = "calc(7vw + 7rem)";
  sectionTitle.style.width = "100%";
  sectionTitle.style.backgroundColor = "var(--darkModeBg)";
  sectionTitle.style.boxShadow = "0px 1px 5px var(--themeTxtClr)";

  prHeader.appendChild(sectionTitle);
}
/*
function hwTitle() {
    hwSection();
}
function prTitle() {
    prSection();
}
*/
function loadTopHeader() {
  document.addEventListener('DOMContentLoaded', () => {
    topBanner();
  })
}
loadTopHeader();
function loadHwHeader() {
  document.addEventListener('DOMContentLoaded', () => {
    hwSection();
  })
}
loadHwHeader();
function loadPrHeader() {
  document.addEventListener('DOMContentLoaded', () => {
    prSection();
  })
}
loadPrHeader();

/*
export {titleSection, topBanner}     USE THIS FOR ALL OTHER EXPORTS
*/
=======

const pageHeader = document.getElementById('page-header');

function topBanner() {
  let bannerTop = document.createElement("div");

  let bannerDiv = document.createElement("div");
  let banner = document.createElement("h1");

  let logoDiv = document.createElement("div");
  let logoTop = document.createElement("p");
  let logoImg = document.createElement("img");
  let logoBottom = document.createElement("p");

  let imgBar = document.createElement("div");
  let htmlLogo = document.createElement("img");
  let cssLogo = document.createElement("img");
  let sassLogo = document.createElement("img");
  let jsLogo = document.createElement("img");

  logoDiv.setAttribute("class", "logo");
  logoDiv.style.position = "absolute";
  logoDiv.style.display = "flex";
  logoDiv.style.flexDirection = "column";
  logoDiv.style.alignItems = "center";
  logoDiv.style.justifyContent = "center";
  logoDiv.style.top = "calc(1.5vw + 1.75rem)";
  logoDiv.style.left = "calc(1vw + 1.5rem)";
  logoDiv.style.width = "calc(9vw + 9rem)";
  logoDiv.style.height = "calc(5vw + 5rem)";
  logoDiv.style.fontFamily = "'Audiowide', cursive";
  logoDiv.style.border = "5px double var(--primaryBackground)";
  logoDiv.style.borderRadius = "1rem";
  bannerTop.appendChild(logoDiv);

  logoTop.appendChild(document.createTextNode("Guycorp"));
  logoTop.setAttribute("class", "logo__top");
  logoTop.style.top = "-40px";
  logoTop.style.left = "50%";
  logoTop.style.transform = "translateX(-50%)";
  logoTop.style.position = "absolute";
  logoTop.style.fontSize = "1.5rem";
  logoTop.style.color = "var(--primaryBackground)";
  logoTop.style.letterSpacing = "0.15rem";
  logoDiv.appendChild(logoTop);

  logoImg.setAttribute("class", "logo__img");
  logoImg.setAttribute("src", "img/icon-blk-tech.png");
  logoImg.style.margin = "10px 0";
  logoImg.style.transform = "rotate(90deg)";
  logoImg.style.width = "calc(4.25vw + 4.25rem)";
  logoImg.style.height = "calc(4.25vw + 4.25rem)";
  logoImg.style.border = "2px solid var(--primaryBackground)";
  logoImg.style.borderRadius = "50%";
  logoDiv.appendChild(logoImg);

  logoBottom.appendChild(document.createTextNode("Industries"));
  logoBottom.setAttribute("class", "logo__bottom");
  logoBottom.style.bottom = "-40px";
  logoBottom.style.left = "50%";
  logoBottom.style.transform = "translateX(-50%)";
  logoBottom.style.position = "absolute";
  logoBottom.style.fontSize = "1.5rem";
  logoBottom.style.color = "var(--primaryBackground)";
  logoBottom.style.letterSpacing = "0.15rem";
  logoDiv.appendChild(logoBottom);

  imgBar.setAttribute("class", "icon");
  imgBar.style.position = "absolute";
  imgBar.style.top = "5%";
  imgBar.style.right = "5%";
  imgBar.style.display = "flex";
  imgBar.style.alignItems = "center";
  imgBar.style.justifyContent = "center";
  bannerTop.appendChild(imgBar);

  htmlLogo.setAttribute("class", "htmlLogo");
  htmlLogo.setAttribute("src", "img/HTML5_logo.svg.png");
  htmlLogo.style.margin = "calc(1vw + 0.25rem)";
  htmlLogo.style.width = "calc(4vw + 4rem)";
  imgBar.appendChild(htmlLogo);

  cssLogo.setAttribute("class", "cssLogo");
  cssLogo.setAttribute("src", "img/CSS.3b.svg.png");
  cssLogo.style.margin = "calc(1vw + 0.25rem)";
  cssLogo.style.width = "calc(4vw + 4rem)";
  imgBar.appendChild(cssLogo);

  sassLogo.setAttribute("class", "sassLogo");
  sassLogo.setAttribute("src", "img/sass-1.svg");
  sassLogo.style.margin = "calc(1vw + 0.25rem)";
  sassLogo.style.width = "calc(4vw + 4rem)";
  imgBar.appendChild(sassLogo);

  jsLogo.setAttribute("class", "jsLogo");
  jsLogo.setAttribute("src", "img/Javascript-logo.svg.png");
  jsLogo.style.margin = "calc(1vw + 0.25rem)";
  jsLogo.style.width = "calc(4vw + 4rem)";
  imgBar.appendChild(jsLogo);

  banner.appendChild(document.createTextNode("Christopher T. Guy"));
  banner.setAttribute("class", "banner");
  banner.style.position = "absolute";
  banner.style.bottom = "calc(7vw - 0.75rem)";
  banner.style.right = "5%";
  banner.style.transform = "rotate(-3.8deg)";
  banner.style.fontSize = "calc(1.5vw + 1.5rem)";
  banner.style.fontFamily = "'Audiowide', cursive";
  banner.style.color = "var(--primaryBackground)";
  bannerDiv.appendChild(banner);

  bannerTop.appendChild(bannerDiv);
  bannerTop.setAttribute("class", "topBanner");
  bannerTop.style.position = "relative";
  bannerTop.style.height = "25vw";
  bannerTop.style.minHeight = "250px";
  bannerTop.style.clipPath =
    "polygon(0 0, 100% 0, 100% calc(100% - 7vw), 0 100%)";
  bannerTop.style.marginBottom = "-7vw";
  bannerTop.style.backgroundImage = "url('img/header_background_2.png')";
  bannerTop.style.backgroundSize = "cover";
  bannerTop.style.backgroundColor = "white";
  bannerTop.style.zIndex = "1";
  pageHeader.appendChild(bannerTop);
}

function titleSection() {
  let title = document.createElement("h2");
  let sectionTitle = document.createElement("section");

  title.appendChild(document.createTextNode('"The Program"'));
  title.style.color = "orangered";
  title.style.position = "absolute";
  title.style.top = "calc(3vw + 3rem)";
  title.style.left = "50%";
  title.style.transform = "translateX(-50%)";
  title.style.fontSize = "calc(2vw + 2rem)";
  title.style.fontFamily = "'Audiowide', cursive";

  sectionTitle.appendChild(title);
  sectionTitle.setAttribute("class", "sectionTitle");
  sectionTitle.style.position = "relative";
  sectionTitle.style.height = "calc(7vw + 7rem)";
  sectionTitle.style.width = "100%";
  sectionTitle.style.backgroundColor = "var(--primaryBackground)";
  sectionTitle.style.borderBottom = "3px solid orangeRed";
  sectionTitle.style.marginBottom = "calc(2.5vw + 2.5rem)";
  
  pageHeader.appendChild(sectionTitle);
}

export default function loadHeader() {
  document.addEventListener("DOMContentLoaded", () => {
    topBanner();
    titleSection();
  });
}

/*
export {loadHeader}           USE THIS FOR ALL OTHER EXPORTS
*/
>>>>>>> dccbf919e049efa24ce8a9fe7cde99796c516bc8
