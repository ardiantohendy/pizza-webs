const klikMenu = document.querySelector(".left-text .bawah");
const menu = document.getElementById("pizza");
const close = document.querySelector(".left-text .close p");
const left = document.querySelector(".main .cont-1");
const dark = document.querySelector(".left-text .layer");
const klikAbout = document.querySelector(".right-text a");
const about = document.querySelector(".right-text .about");
const close2 = document.querySelector(".right-text .about p.z");

klikMenu.addEventListener("click", function () {
  if (menu.style.top === "-60%" || dark.style.display === "none") {
    menu.style.top = "25%";
    dark.style.display = "block";
  } else {
    menu.style.top = "-60%";
  }
});
close.addEventListener("click", function () {
  menu.style.top = "-60%";
  dark.style.display = "none";
});

klikAbout.addEventListener("click", function () {
  if (about.style.top == "-75%") {
    about.style.top = "15%";
    dark.style.display = "block";
  } else {
    about.style.top = "-75%";
    dark.style.display = "none";
  }
});
close2.addEventListener("click", function () {
  about.style.top = "-75%";
  dark.style.display = "none";
});
