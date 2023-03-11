// navbar toggle
let menu = document.querySelector("#menu");
let navbar = document.querySelector(".navbar");

menu.onclick = function () {
  menu.classList.toggle("uil-x");
  navbar.classList.toggle("active");
};
//  remove toogle icon when click navbar (scroll)
window.onscroll = () => {
  menu.classList.remove("uil-x");
  navbar.classList.remove("active");
};

// sticky navbar

let header = document.querySelector("header");

header.classList.toggle("sticky", "windowY");

// scroll animation

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content,.heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-image, .service-container, .project-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1,.about-image", { origin: "left" });
ScrollReveal().reveal(".home-content p,.about-content ", { origin: "right" });

// typed js

const typed = new Typed(".multiple-text", {
  strings: ["full stack developer", "Youtuber", "Graphic designer"],
  typeSpeed: 100,
  backSpeed: 100,
  backdelay: 1000,
  loop: false,
});
