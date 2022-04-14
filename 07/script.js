"use strict";

const box = document.querySelector(".box"),
  btn = document.querySelector("button");

// const width = box.clientWidth;
// const height = box.clientHeight;

// const width = box.offsetWidth;
// const height = box.offsetHeight;

const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(width, height);

btn.addEventListener("click", () => {
  // box.style.height = box.scrollHeight + 'px'; // inline style
  console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box); // from CSS

console.log(style.display); // block

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.scrollTop);

document.documentElement.scrollTop = 0; // scroll to top

window.scrollBy(0, 400);
window.scrollTo(0, 400);