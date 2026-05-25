// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  body.classList.add('dark');
  themeToggle.textContent = '☀️';
}


themeToggle.addEventListener('click', () => {

  body.classList.toggle('dark');

  const isDark = body.classList.contains('dark');

  if (isDark) {
    themeToggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }

});


// Mobile Navigation
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');

mobileToggle.addEventListener('click', () => {

  navLinks.classList.toggle('active');

  body.classList.toggle('menu-open');

});


// Close Mobile Menu on Link Click
const links = navLinks.querySelectorAll('a');

links.forEach(link => {

  link.addEventListener('click', () => {

    navLinks.classList.remove('active');
    body.classList.remove('menu-open');

  });

});


// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {

  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(element => {

    const rect = element.getBoundingClientRect();

    if (rect.top < triggerBottom) {
      element.classList.add('active');
    }

  });

};

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();