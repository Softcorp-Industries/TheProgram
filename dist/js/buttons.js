let selectedBtn = false;

// Grabs the Button that was "clicked" within the Element that has the "ID" of btn
document.querySelector("#btn").addEventListener("click", (e) => {
  console.log(e.target);
  // Add an active Class to the Button Clicked
  if (!selectedBtn && e.target.classList.contains("btn")) {
    e.target.classList.add("active");
    selectedBtn = true;
  } else {
    e.target.classList.remove("active");
    selectedBtn = false;
  }
});

// buttonClicked();
const btns = document.querySelector(".btn");

function menuClick() {
  document.getElementById("menu3-btn").classList.toggle("menuClicked");
  document.getElementById("header3").classList.toggle("menuClicked");
}

const menuBtn = document.querySelector(".navBar2-menu");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("openNav");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("openNav");
    menuOpen = false;
  }
});

const toggleBtn1 = document.getElementById("toggle1");
const toggleBtn2 = document.getElementById("toggle2");
const toggleBtn3 = document.getElementById("toggle3");

const toggle1Header = document.querySelector(".toggle1h4");
const toggle2Header = document.querySelector(".toggle2h4");
const toggle3Header = document.querySelector(".toggle3h4");

let toggle1 = document.querySelector(".toggle1");
let toggle2 = document.querySelector(".toggle2");
let toggle3 = document.querySelector(".toggle3");

let toggle1on = false;
let toggle2on = false;
let toggle3on = false;

toggleBtn1.addEventListener("click", () => {
  if (!toggle1on) {
    toggle1.classList.add("toggleAnim");
    toggle1.classList.remove("toggleAnimRev");
    toggle1Header.style.color = "var(--themeTxtClr)";
    trans();
    toggle1on = true;
  } else {
    toggle1.classList.add("toggleAnimRev");
    toggle1.classList.remove("toggleAnim");
    toggle1Header.style.color = "rgb(54, 54, 54)";
    trans();
    toggle1on = false;
  }
});

toggleBtn2.addEventListener("click", () => {
  if (!toggle2on) {
    toggle2.classList.add("toggleAnim");
    toggle2.classList.remove("toggleAnimRev");
    toggle2Header.style.color = "var(--themeTxtClr)";
    trans();
    toggle2on = true;
  } else {
    toggle2.classList.add("toggleAnimRev");
    toggle2.classList.remove("toggleAnim");
    toggle2Header.style.color = "rgb(54, 54, 54)";
    trans();
    toggle2on = false;
  }
});

toggleBtn3.addEventListener("click", () => {
  if (!toggle3on) {
    toggle3.classList.add("toggleAnim");
    toggle3.classList.remove("toggleAnimRev");
    toggle3Header.style.color = "var(--themeTxtClr)";
    trans();
    toggle3on = true;
  } else {
    toggle3.classList.add("toggleAnimRev");
    toggle3.classList.remove("toggleAnim");
    toggle3Header.style.color = "rgb(54, 54, 54)";
    trans();
    toggle3on = false;
  }
});
let trans = () => {
  document.body.classList.add("transition");
  window.setTimeout(() => {
    document.body.classList.remove("transition");
  }, 1000);
};
