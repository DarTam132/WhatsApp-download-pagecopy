"use strict";
const btnInfo = document.querySelector(".div-icon");
const hiddenSection = document.querySelector(".hidden-section");
const icon = document.querySelector(".icon");

btnInfo.addEventListener("click", function () {
  hiddenSection.classList.toggle("hidden");
  icon.classList.toggle("rotate");
});
