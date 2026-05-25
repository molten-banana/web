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


// Active Section Highlight
const sections =
  document.querySelectorAll("section");

const navItems =
  document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop =
      section.offsetTop;

    const sectionHeight =
      section.clientHeight;

    if (
      scrollY >= sectionTop - 300
    ) {

      current =
        section.getAttribute("id");

    }

  });

  navItems.forEach(link => {

    link.classList.remove("active");

    if (
      link.getAttribute("href") ===
      `#${current}`
    ) {

      link.classList.add("active");

    }

  });

});


// Scroll Progress Indicator
const progressBar =
  document.getElementById(
    "scrollProgressBar"
  );

window.addEventListener("scroll", () => {

  const scrollTop =
    document.documentElement.scrollTop;

  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const progress =
    (scrollTop / scrollHeight) * 100;

  progressBar.style.height =
    `${progress}%`;

});


// Project Modals
const openButtons =
  document.querySelectorAll(".open-modal");

const closeButtons =
  document.querySelectorAll(".close-modal");

openButtons.forEach(button => {

  button.addEventListener("click", () => {

    const modal =
      document.getElementById(
        button.dataset.modal
      );

    modal.classList.add("active");

  });

});

closeButtons.forEach(button => {

  button.addEventListener("click", () => {

    button.closest(".modal")
      .classList.remove("active");

  });

});


// Close modal on outside click
window.addEventListener("click", e => {

  document
    .querySelectorAll(".modal")
    .forEach(modal => {

      if (e.target === modal) {

        modal.classList.remove("active");

      }

    });

});


// Language Toggle
const translations = {

  en: {

    navHome: "Home",
    navAbout: "About",
    navResume: "Resume",
    navProjects: "Projects",
    navContact: "Contact",

    heroTag:
      "Software Developer",

    heroTitle:
      "Building modern and responsive digital experiences.",

    heroDescription:
      "Passionate about development, design, and creating elegant solutions.",

    viewProjects:
      "View Projects",

    contactMe:
      "Contact Me",

    aboutLabel:
      "About",

    aboutTitle:
      "About Me",

    aboutText:
      "I enjoy building clean, modern, and performant digital experiences with a strong focus on design and usability.",

    resumeLabel:
      "Resume",

    resumeTitle:
      "Resume",

    resumeText:
      "Download my latest resume below.",

    downloadResume:
      "Download Resume",

    projectsLabel:
      "Projects",

    projectsTitle:
      "Projects",

    projectOneText:
      "A modern responsive project with clean UI and animations.",

    projectTwoText:
      "A lightweight portfolio-focused web application.",

    contactLabel:
      "Contact",

    contactTitle:
      "Contact",

    contactText:
      "Feel free to reach out through email or social platforms."

  },


  sv: {

    navHome:
      "Hem",

    navAbout:
      "Om",

    navResume:
      "CV",

    navProjects:
      "Projekt",

    navContact:
      "Kontakt",

    heroTag:
      "Mjukvaruutvecklare",

    heroTitle:
      "Bygger moderna och responsiva digitala upplevelser.",

    heroDescription:
      "Passionerad kring utveckling, design och eleganta lösningar.",

    viewProjects:
      "Visa Projekt",

    contactMe:
      "Kontakta Mig",

    aboutLabel:
      "Om",

    aboutTitle:
      "Om Mig",

    aboutText:
      "Jag tycker om att bygga rena, moderna och högpresterande digitala upplevelser med fokus på design och användbarhet.",

    resumeLabel:
      "CV",

    resumeTitle:
      "CV",

    resumeText:
      "Ladda ner mitt senaste CV nedan.",

    downloadResume:
      "Ladda Ner CV",

    projectsLabel:
      "Projekt",

    projectsTitle:
      "Projekt",

    projectOneText:
      "Ett modernt responsivt projekt med ren UI och animationer.",

    projectTwoText:
      "En lättviktig portfoliofokuserad webbapplikation.",

    contactLabel:
      "Kontakt",

    contactTitle:
      "Kontakt",

    contactText:
      "Kontakta mig gärna via email eller sociala plattformar."

  }

};


const languageToggle =
  document.getElementById("languageToggle");

let currentLanguage =
  localStorage.getItem("language") || "en";


function applyLanguage(language) {

  document.documentElement.lang =
    language;

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