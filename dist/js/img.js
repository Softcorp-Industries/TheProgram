// Show Carousel
/*
const imgCarousel = document.querySelector(".imgCarrouselShow");
const imgCarouselBtn = document.getElementById('showCarousel');
let carouselShow = false;
imgCarouselBtn.addEventListener("click", () => {
  if (!carouselShow) {
    console.log("hey");
    imgCarousel.classList.add("showCarousel");
    imgCarouselBtn.classList.add("projectBtnActive");
    carouselShow = true;
  } else {
    imgCarousel.classList.remove("showCarousel");
    imgCarouselBtn.classList.remove("projectBtnActive");
    carouselShow = false;
  }
});


const devBtn = document.querySelector("#devBar-bar");
let devOpen = false;
devBtn.addEventListener("click", () => {
  if (!devOpen) {
    devBtn.classList.add("openFrontEnd");
    devOpen = true;
  } else {
    devBtn.classList.remove("openFrontEnd");
    devOpen = false;
  }
});
*/

// Digital Clock
class DigitalClock {
  constructor(element) {
    this.element = element;
  }

  start() {
    this.update();
    setInterval(() => {
      this.update();
    }, 500);
  }

  update() {
    const parts = this.getTimeParts();
    const minuteFormatted = parts.minute.toString().padStart(2, "0");
    const timeFormatted = `${parts.hour}:${minuteFormatted}`;
    const amPm = parts.isAm ? "AM" : "PM";

    this.element.querySelector(
      ".digitalClockV1__time"
    ).textContent = timeFormatted;
    this.element.querySelector(".digitalClockV1__ampm").textContent = amPm;
  }

  getTimeParts() {
    const now = new Date();

    return {
      hour: now.getHours() % 12 || 12,
      minute: now.getMinutes(),
      isAm: now.getHours() < 12,
    };
  }
}

const clockElement = document.querySelector(".digitalClockV1");
const clockObject = new DigitalClock(clockElement);

clockObject.start();

// Analog Clock

setInterval(setClock, 1000);

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();

// Names of the Week, Month, Year

// Date
var date = new Date();
document.getElementById("date").innerHTML = date.getDate();

// Day
var day = new Date();
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
document.getElementById("day").innerHTML = days[day.getDay()];

// Month
var month = new Date();
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
document.getElementById("month").innerHTML = months[month.getMonth()];

// Year
var year = new Date();
document.getElementById("year").innerHTML = year.getFullYear();

const fwdBtn = document.querySelector(".fwdBtn");
const rwdBtn = document.querySelector(".rwdBtn");
const anim = document.querySelector(".imgAnimation");
const pauseBtn = document.querySelector(".pauseBtn");
const stopBtn = document.querySelector(".stopBtn");
const fwdActive = document.querySelector(".fwdActive");
const rwdActive = document.querySelector(".rwdActive");

let fwd = false;
let rwd = false;
let paused = false;
let stopped = false;
let fwdBtnActive = false;
let rwdBtnActive = false;

fwdBtn.addEventListener("click", () => {
  if (!fwd) {
    anim.classList.add("playFwd");
    anim.classList.remove("playRwd");
    fwdActive.classList.add("fwd");
    rwdActive.classList.remove("rwd");
    fwd = true;
    rwd = false;
    fwdBtnActive = true;
  } else {
    fwd = false;
    fwdBtnActive = false;
  }
});

rwdBtn.addEventListener("click", () => {
  if (!rwd) {
    anim.classList.add("playRwd");
    anim.classList.remove("playFwd");
    rwdActive.classList.add("rwd");
    fwdActive.classList.remove("fwd");
    rwd = true;
    fwd = false;
  } else {
    rwd = false;
    rwdBtnActive = false;
  }
});

pauseBtn.addEventListener("click", () => {
  if (!paused) {
    anim.classList.add("pause");
    pauseBtn.classList.add("pause");
    paused = true;
  } else {
    anim.classList.remove("pause");
    pauseBtn.classList.remove("pause");
    paused = false;
  }
});

stopBtn.addEventListener("click", () => {
  if (!stopped || rwd || fwd || paused) {
    anim.classList.remove("pause");
    anim.classList.remove("playFwd");
    anim.classList.remove("playRwd");
    pauseBtn.classList.remove("pause");
    fwdActive.classList.remove("fwd");
    rwdActive.classList.remove("rwd");
    stopped = true;
  } else {
    stopped = false;
  }
});

// Slider
const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#nextBtn");
const prev = document.querySelector("#prevBtn");
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    slides[0].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};
const prevSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add("current");
  } else {
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};
next.addEventListener("click", (e) => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});
prev.addEventListener("click", (e) => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});
if (auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
}

// Image Gallery
const currentImg = document.querySelector("#currentImg");
const galleryGrid = document.querySelectorAll(".galleryGrid img");
const opacity = 0.6;
// Destructuring Code for 1 line Variables

// const [currentImg, galleryGrid] = [document.querySelector('#currentImg'),document.querySelectorAll('.galleryGrid img')];

//galleryGrid.forEach(img => img.addEventListener('click', (e) => currentImg.src = e.target.src));

galleryGrid[0].style.opacity = opacity;

galleryGrid.forEach((img) => img.addEventListener("click", galleryClick));

function galleryClick(e) {
  galleryGrid.forEach((img) => (img.style.opacity = 1));
  currentImg.src = e.target.src;
  currentImg.classList.add("fadeIn");
  setTimeout(() => currentImg.classList.remove("fadeIn"), 500);
  e.target.style.opacity = opacity;
}

// Product Gallery
const productImgs = document.getElementsByClassName("productImg");
const activeProduct = document.getElementsByClassName("activeProduct");

for (var i = 0; i < productImgs.length; i++) {
  productImgs[i].addEventListener("mouseover", function () {
    if (activeProduct.length > 0) {
      activeProduct[0].classList.remove("activeProduct");
    }

    this.classList.add("activeProduct");
    document.getElementById("productFeature").src = this.src;
  });
}

const buttonLeft = document.getElementById("btnL");
const buttonRight = document.getElementById("btnR");

buttonLeft.addEventListener("click", function () {
  document.getElementById("productImgs").scrollLeft -= 160;
});
buttonRight.addEventListener("click", function () {
  document.getElementById("productImgs").scrollLeft += 160;
});

const showTimeAnimation = document.getElementById("showTimeAnimation");
const timeAnimation = document.querySelector(".aniMusic");
let timeAnimationShow = false;
showTimeAnimation.addEventListener("click", () => {
  if (!timeAnimationShow) {
    timeAnimation.classList.add("showTimeAnimation");
    timeAnimationShow = true;
  } else {
    timeAnimation.classList.remove("showTimeAnimation");
    timeAnimationShow = false;
  }
});

/*


// Show Slider
const imgSlider = document.querySelector(".imgSliderShow");
const sliderBtn = document.getElementById('showSlider');
let sliderShow = false;
showSlider.addEventListener("click", () => {
  if (!sliderShow) {
    imgSlider.classList.add("showSlider");
    sliderBtn.classList.add("projectBtnActive")
    sliderShow = true;
  } else {
    imgSlider.classList.remove("showSlider");
    sliderBtn.classList.remove("projectBtnActive")
    sliderShow = false;
  }
});

// Show Gallery
const imgGallery = document.querySelector(".imgGalleryShow");
const galleryBtn = document.getElementById('showGallery');
let galleryShow = false;
showGallery.addEventListener("click", () => {
  if (!galleryShow) {
    imgGallery.classList.add("showGallery");
    galleryBtn.classList.add("projectBtnActive")
    galleryShow = true;
  } else {
    imgGallery.classList.remove("showGallery");
    galleryBtn.classList.remove("projectBtnActive")
    galleryShow = false;
  }
});

// Show Product Gallery
const productGallery = document.querySelector(".imgProductGalleryShow");
const productBtn = document.getElementById('showProduct');
let productShow = false;
showProduct.addEventListener("click", () => {
  if (!productShow) {
    productGallery.classList.add("showProduct");
    productBtn.classList.add('projectBtnActive');
    productShow = true;
  } else {
    productGallery.classList.remove("showProduct");
    productBtn.classList.remove('projectBtnActive');
    productShow = false;
  }
});
*/
