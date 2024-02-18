const navBar = document.querySelector("header");
const buttonNavbar = document.querySelector("header button");

window.addEventListener("scroll", function () {
  if (window.scrollY > 400) {
    navBar.style.backgroundColor = "white";
    buttonNavbar.style.backgroundColor = "green";
    navBar.style.transition = "0.5s";
    console.log(navBar);
  } else {
    navBar.style.backgroundColor = "#ffc017";
    buttonNavbar.style.backgroundColor = "black";
  }
});

let svgContainer = document.getElementById("svg");
let svg = document.querySelector("svg");

let gNode = svg.querySelectorAll("g[stroke-linecap]");

function swappingM() {
  let random = gNode[Math.floor(Math.random() * gNode.length)];
  random.setAttribute("opacity", Math.floor(Math.random() * 2));
}

const intervalM = setInterval(swappingM, 10);
