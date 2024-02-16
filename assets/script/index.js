let svg = document.querySelector("#svg");
let lettereM = svg.querySelectorAll("path");

let animazione = anime({
  targets: lettereM,
  opacity: [1, 0],
  duration: 2000,
  loop: true,
  direction: "alternate",
  easing: "easeInOutSine",
});
