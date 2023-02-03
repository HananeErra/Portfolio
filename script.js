const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");
const nav = document.getElementById("nav");
const liste = document.querySelector(".liste");

/// my header
nav.addEventListener("click", () => {
  liste.classList.toggle("show");
  document.querySelector("img").style.transform = " 0.7 scale(1.3)";
  console.log("c'est fait");
  nav.classList.toggle("nav_transformation");
});

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/**** removemenu for mobile */

const icon_affich = document.getElementById("app");
console.log(icon_affich);

const listeApp = document.querySelector(".listApp1");
console.log(listeApp);

icon_affich.addEventListener("click", () => {
  console.log("je suis entrer");
  listeApp.classList.toggle("affichage1");
  icon_affich.classList.toggle("rotate");
});

const icon_Web = document.getElementById("web");
console.log(icon_Web);

const listeWeb = document.querySelector(".listApp2");
console.log(listeWeb);

icon_Web.addEventListener("click", () => {
  console.log("je suis entrer");
  listeWeb.classList.toggle("affichage2");
  icon_Web.classList.toggle("rotate");
});

/** pour Qualifiactions icons */
const univIcon = document.querySelector(".university_icon");
const projetIcon = document.querySelector(".project_icon");
const stageIcon = document.querySelector(".stage_icon");
const l1R = document.querySelector(".l1R");
let stage = 0;
let univ = 0;
let projet = 0;
console.log(l1R);
console.log("je suis la");
univIcon.addEventListener("click", () => {
  if (univ === 0) {
    univ = 1;
  } else {
    univ = 0;
  }

  if (stage == 1) {
    stageIcon.classList.toggle("color_principal");
    univIcon.classList.toggle("color_second");
    projetIcon.classList.toggle("color_second");
    document.querySelector(".l5R").classList.toggle("background_second");
    document.querySelector(".l4R").classList.toggle("background_second");
    document.querySelector(".l3R").classList.toggle("background_second");
    document.querySelector(".l2R").classList.toggle("background_second");
    document.querySelector(".l1R").classList.toggle("background_second");
    document.querySelector(".item5").classList.toggle("nonvisible");
    document.querySelector(".item4").classList.toggle("nonvisible");
    document.querySelector(".item3").classList.toggle("nonvisible");
    document.querySelector(".item2").classList.toggle("nonvisible");
    document.querySelector(".item1").classList.toggle("nonvisible");
    stage = 0;
  }

  if (projet == 1) {
    projetIcon.classList.toggle("color_principal");
    univIcon.classList.toggle("color_second");
    stageIcon.classList.toggle("color_second");
    document.querySelector(".l6R").classList.toggle("background_second");
    document.querySelector(".l3R").classList.toggle("background_second");
    document.querySelector(".l2R").classList.toggle("background_second");
    document.querySelector(".l1R").classList.toggle("background_second");
    document.querySelector(".item6").classList.toggle("nonvisible");
    document.querySelector(".item3").classList.toggle("nonvisible");
    document.querySelector(".item2").classList.toggle("nonvisible");
    document.querySelector(".item1").classList.toggle("nonvisible");
    projet = 0;
  }

  univIcon.classList.toggle("color_principal");
  projetIcon.classList.toggle("color_second");
  stageIcon.classList.toggle("color_second");
  document.querySelector(".l6R").classList.toggle("background_second");
  document.querySelector(".l5R").classList.toggle("background_second");
  document.querySelector(".l4R").classList.toggle("background_second");
  document.querySelector(".item6").classList.toggle("nonvisible");
  document.querySelector(".item5").classList.toggle("nonvisible");
  document.querySelector(".item4").classList.toggle("nonvisible");
});

projetIcon.addEventListener("click", () => {
  if (projet === 0) {
    projet = 1;
  } else {
    projet = 0;
  }

  if (stage == 1) {
    stageIcon.classList.toggle("color_principal");
    univIcon.classList.toggle("color_second");
    projetIcon.classList.toggle("color_second");
    document.querySelector(".l5R").classList.toggle("background_second");
    document.querySelector(".l4R").classList.toggle("background_second");
    document.querySelector(".l3R").classList.toggle("background_second");
    document.querySelector(".l2R").classList.toggle("background_second");
    document.querySelector(".l1R").classList.toggle("background_second");
    document.querySelector(".item5").classList.toggle("nonvisible");
    document.querySelector(".item4").classList.toggle("nonvisible");
    document.querySelector(".item3").classList.toggle("nonvisible");
    document.querySelector(".item2").classList.toggle("nonvisible");
    document.querySelector(".item1").classList.toggle("nonvisible");
    stage = 0;
  }

  if (univ === 1) {
    univIcon.classList.toggle("color_principal");
    projetIcon.classList.toggle("color_second");
    stageIcon.classList.toggle("color_second");
    document.querySelector(".l6R").classList.toggle("background_second");
    document.querySelector(".l5R").classList.toggle("background_second");
    document.querySelector(".l4R").classList.toggle("background_second");
    document.querySelector(".item6").classList.toggle("nonvisible");
    document.querySelector(".item5").classList.toggle("nonvisible");
    document.querySelector(".item4").classList.toggle("nonvisible");
    univ = 0;
  }

  projetIcon.classList.toggle("color_principal");
  univIcon.classList.toggle("color_second");
  stageIcon.classList.toggle("color_second");
  document.querySelector(".l6R").classList.toggle("background_second");
  document.querySelector(".l3R").classList.toggle("background_second");
  document.querySelector(".l2R").classList.toggle("background_second");
  document.querySelector(".l1R").classList.toggle("background_second");
  document.querySelector(".item6").classList.toggle("nonvisible");
  document.querySelector(".item3").classList.toggle("nonvisible");
  document.querySelector(".item2").classList.toggle("nonvisible");
  document.querySelector(".item1").classList.toggle("nonvisible");
});

stageIcon.addEventListener("click", () => {
  if (stage === 0) {
    stage = 1;
  } else {
    stage = 0;
  }

  if (projet == 1) {
    projetIcon.classList.toggle("color_principal");
    univIcon.classList.toggle("color_second");
    stageIcon.classList.toggle("color_second");
    document.querySelector(".l6R").classList.toggle("background_second");
    document.querySelector(".l3R").classList.toggle("background_second");
    document.querySelector(".l2R").classList.toggle("background_second");
    document.querySelector(".l1R").classList.toggle("background_second");
    document.querySelector(".item6").classList.toggle("nonvisible");
    document.querySelector(".item3").classList.toggle("nonvisible");
    document.querySelector(".item2").classList.toggle("nonvisible");
    document.querySelector(".item1").classList.toggle("nonvisible");
    projet = 0;
  }

  if (univ === 1) {
    univIcon.classList.toggle("color_principal");
    projetIcon.classList.toggle("color_second");
    stageIcon.classList.toggle("color_second");
    document.querySelector(".l6R").classList.toggle("background_second");
    document.querySelector(".l5R").classList.toggle("background_second");
    document.querySelector(".l4R").classList.toggle("background_second");
    document.querySelector(".item6").classList.toggle("nonvisible");
    document.querySelector(".item5").classList.toggle("nonvisible");
    document.querySelector(".item4").classList.toggle("nonvisible");
    univ = 0;
  }

  stageIcon.classList.toggle("color_principal");
  univIcon.classList.toggle("color_second");
  projetIcon.classList.toggle("color_second");
  document.querySelector(".l5R").classList.toggle("background_second");
  document.querySelector(".l4R").classList.toggle("background_second");
  document.querySelector(".l3R").classList.toggle("background_second");
  document.querySelector(".l2R").classList.toggle("background_second");
  document.querySelector(".l1R").classList.toggle("background_second");
  document.querySelector(".item5").classList.toggle("nonvisible");
  document.querySelector(".item4").classList.toggle("nonvisible");
  document.querySelector(".item3").classList.toggle("nonvisible");
  document.querySelector(".item2").classList.toggle("nonvisible");
  document.querySelector(".item1").classList.toggle("nonvisible");
});

const home = document.getElementById("home");
console.log(home);

const about = document.getElementById("about");
console.log(about);

home.addEventListener("mouseenter", () => {
  document.querySelector(".scrollup").classList.add("visbility");
});

home.addEventListener("mouseleave", () => {
  document.querySelector(".scrollup").classList.remove("visbility");
});

const sun = document.getElementById("sun");
const moon = document.getElementById("moon");

console.log(sun);
console.log(moon);

moon.addEventListener("click", () => {
  moon.classList.add("hide_logo");
  console.log("I am here");
  sun.classList.remove("hide_logo");
  document.body.classList.add("darkTheme");
  document.body.classList.add("dark-theme");
});

sun.addEventListener("click", () => {
  moon.classList.remove("hide_logo");
  sun.classList.add("hide_logo");
  document.body.classList.remove("darkTheme");
  document.body.classList.remove("dark-theme");
});

const moonNav = document.getElementById("moon_nav");
const sunNav = document.getElementById("sun_nav");
const changement = document.querySelector(".changement");

moonNav.addEventListener("click", () => {
  moonNav.classList.add("hidden_nav");
  sunNav.classList.remove("hidden_nav");
  document.body.classList.add("darkTheme");
  document.body.classList.add("dark-theme");
  changement.classList.add("rotate");
});

sunNav.addEventListener("click", () => {
  moonNav.classList.remove("hidden_nav");
  sunNav.classList.add("hidden_nav");
  document.body.classList.remove("darkTheme");
  document.body.classList.remove("dark-theme");
  changement.classList.add("rotate");
});

const imagehome = document.querySelector(".home_img");

document.querySelector("body").addEventListener("mouseenter", () => {
  imagehome.classList.add("arrive");
});
// send Message
emailjs.init("B1ZgsWuq7VR_C_btr");
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_oa350sb", "template_3o66y3w", this);
    event.target.reset();
  });
