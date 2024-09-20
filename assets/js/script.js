'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});



/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);

});



/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}



/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {

  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }

});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}

// Show popup on card click
const studentCard = document.getElementById('studentCard');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

studentCard.addEventListener('click', function() {
  popup.style.display = 'block';
});

// Close popup
closePopup.addEventListener('click', function() {
  popup.style.display = 'none';
});

// Drag and drop functionality
let isDragging = false;
let offsetX = 0, offsetY = 0;

studentCard.addEventListener('mousedown', function(e) {
  isDragging = true;
  offsetX = e.clientX - studentCard.offsetLeft;
  offsetY = e.clientY - studentCard.offsetTop;
});

document.addEventListener('mousemove', function(e) {
  if (isDragging) {
    studentCard.style.left = `${e.clientX - offsetX}px`;
    studentCard.style.top = `${e.clientY - offsetY}px`;
  }
});

document.addEventListener('mouseup', function() {
  isDragging = false;
});

// Throw effect (optional: adds velocity to the throw)
document.addEventListener('mouseup', function(e) {
  if (isDragging) {
    const throwX = (e.clientX - offsetX) / 10;
    const throwY = (e.clientY - offsetY) / 10;

    studentCard.style.transition = 'transform 0.5s ease';
    studentCard.style.transform = `translate(${throwX}px, ${throwY}px) rotate(${Math.random() * 360}deg)`;
    
    isDragging = false;
  }
});
