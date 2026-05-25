// Mobile Menu
const mobileToggle =
  document.getElementById("mobileToggle");

const navLinks =
  document.getElementById("navLinks");

mobileToggle.addEventListener("click", () => {

  navLinks.classList.toggle("active");

  document.body.classList.toggle("menu-open");

});


// Theme Toggle
const themeToggle =
  document.getElementById("themeToggle");

const body = document.body;

let currentTheme =
  localStorage.getItem("theme") || "dark";

if (currentTheme === "dark") {
  body.classList.add("dark");
  themeToggle.textContent = "☀️";
} else {
  themeToggle.textContent = "🌙";
}

themeToggle.addEventListener("click", () => {

  body.classList.toggle("dark");

  const isDark =
    body.classList.contains("dark");

  themeToggle.textContent =
    isDark ? "☀️" : "🌙";

  localStorage.setItem(
    "theme",
    isDark ? "dark" : "light"
  );

});


// Reveal Animations
const revealElements =
  document.querySelectorAll(".reveal");

function revealOnScroll() {

  const triggerBottom =
    window.innerHeight * 0.9;

  revealElements.forEach(element => {

    const rect =
      element.getBoundingClientRect();

    if (rect.top < triggerBottom) {
      element.classList.add("active");
    }

  });

}

window.addEventListener(
  "scroll",
  revealOnScroll
);

revealOnScroll();


// Language Toggle
const translations = {

  en: {

    navHome: "Home",
    navAbout: "About",
    navResume: "Resume",
    navProjects: "Projects",
    navContact: "Contact",

    heroTag: "Software Developer",

    heroTitle:
      "Building modern and responsive digital experiences.",

    heroDescription:
      "Passionate about development, design, and creating elegant solutions.",

    viewProjects: "View Projects",
    contactMe: "Contact Me",

    aboutLabel: "About",
    aboutTitle: "About Me",

    aboutText:
      "I enjoy building clean, modern, and performant digital experiences with a strong focus on design and usability.",

    resumeLabel: "Resume",
    resumeTitle: "Resume",

    resumeText:
      "Download my latest resume below.",

    downloadResume:
      "Download Resume",

    projectsLabel: "Projects",
    projectsTitle: "Projects",

    projectOneText:
      "A modern responsive project with clean UI and animations.",

    projectTwoText:
      "A lightweight portfolio-focused web application.",

    contactLabel: "Contact",
    contactTitle: "Contact",

    contactText:
      "Feel free to reach out through email or social platforms."

  },


  sv: {

    navHome: "Hem",
    navAbout: "Om",
    navResume: "CV",
    navProjects: "Projekt",
    navContact: "Kontakt",

    heroTag: "Mjukvaruutvecklare",

    heroTitle:
      "Bygger moderna och responsiva digitala upplevelser.",

    heroDescription:
      "Passionerad kring utveckling, design och eleganta lösningar.",

    viewProjects: "Visa Projekt",
    contactMe: "Kontakta Mig",

    aboutLabel: "Om",
    aboutTitle: "Om Mig",

    aboutText:
      "Jag tycker om att bygga rena, moderna och högpresterande digitala upplevelser med fokus på design och användbarhet.",

    resumeLabel: "CV",
    resumeTitle: "CV",

    resumeText:
      "Ladda ner mitt senaste CV nedan.",

    downloadResume:
      "Ladda Ner CV",

    projectsLabel: "Projekt",
    projectsTitle: "Projekt",

    projectOneText:
      "Ett modernt responsivt projekt med ren UI och animationer.",

    projectTwoText:
      "En lättviktig portfoliofokuserad webbapplikation.",

    contactLabel: "Kontakt",
    contactTitle: "Kontakt",

    contactText:
      "Kontakta mig gärna via email eller sociala plattformar."

  }

};


const languageToggle =
  document.getElementById("languageToggle");

let currentLanguage =
  localStorage.getItem("language") || "en";


function applyLanguage(language) {

  document
    .querySelectorAll("[data-i18n]")

    .forEach(element => {

      const key =
        element.dataset.i18n;

      if (
        translations[language][key]
      ) {

        element.textContent =
          translations[language][key];

      }

    });

  languageToggle.textContent =
    language === "en"
      ? "SV"
      : "EN";

  localStorage.setItem(
    "language",
    language
  );

}


languageToggle.addEventListener(
  "click",
  () => {

    currentLanguage =
      currentLanguage === "en"
        ? "sv"
        : "en";

    applyLanguage(currentLanguage);

  }
);


applyLanguage(currentLanguage);