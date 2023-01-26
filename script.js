"use strict";
const btnInfo = document.querySelector(".div-icon");
const hiddenSection = document.querySelector(".hidden-section");
const icon = document.querySelector(".icon");

btnInfo.addEventListener("click", function () {
  hiddenSection.classList.toggle("hidden");
  icon.classList.toggle("rotate");
});

// const slidesContainer = document.getElementById("slides-container");
// const slide = document.querySelector(".slide");
// const prevButton = document.getElementById("slide-arrow-prev");
// const nextButton = document.getElementById("slide-arrow-next");
// nextButton.addEventListener("click", () => {
//   const slideWidth = slide.clientWidth;
//   slidesContainer.scrollLeft += slideWidth;
// });
// prevButton.addEventListener("click", () => {
//   const slideWidth = slide.clientWidth;
//   slidesContainer.scrollLeft -= slideWidth;
// });

const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const cards = document.querySelectorAll(".carousel-card");
const cards1 = document.querySelector(".carousel-card1");

// for (let i = 0; i < cards.length; i++) {}
btnRight.addEventListener("click", function () {
  console.log("buton apasat");
  cards1.classList.add("hidden");
});
btnLeft.addEventListener("click", function () {
  console.log("buton apasat");
  cards1.classList.remove("hidden");
});
