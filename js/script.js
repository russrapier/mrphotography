"use strict";
const header = document.querySelector(".header");
const openNav = document.querySelector(".open-nav");

openNav.addEventListener("click", function () {
  header.classList.toggle("open-nav");
});
