// ===========================
// NAVBAR — cambio al hacer scroll
// ===========================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('navbar--scrolled');
  } else {
    navbar.classList.remove('navbar--scrolled');
  }
});

// ===========================
// NAVBAR — menú hamburguesa
// ===========================
const navbarToggle = document.getElementById('navbar-toggle');
const navbarNav    = document.querySelector('.navbar__nav');

navbarToggle.addEventListener('click', () => {
  navbarNav.classList.toggle('navbar__nav--open');
});

// cerrar menú al hacer clic en un link
document.querySelectorAll('.navbar__link').forEach(link => {
  link.addEventListener('click', () => {
    navbarNav.classList.remove('navbar__nav--open');
  });
});

// ===========================
// HERO — efecto de escritura
// ===========================
const roles = [
  'Desarrollador',
  'Estudiante de Análisis y Desarrollo de Software',
  'C# & ASP.NET Core',
];

let roleIndex   = 0;
let charIndex   = 0;
let isDeleting  = false;
const typedRole = document.getElementById('typed-role');

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (isDeleting) {
    typedRole.textContent = currentRole.slice(0, charIndex - 1);
    charIndex--;
  } else {
    typedRole.textContent = currentRole.slice(0, charIndex + 1);
    charIndex++;
  }

  // terminó de escribir → espera y borra
  if (!isDeleting && charIndex === currentRole.length) {
    setTimeout(() => { isDeleting = true; typeEffect(); }, 1800);
    return;
  }

  // terminó de borrar → siguiente rol
  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex  = (roleIndex + 1) % roles.length;
  }

  const speed = isDeleting ? 60 : 100;
  setTimeout(typeEffect, speed);
}

typeEffect();



// ===========================
// ANIMACIONES — aparición al hacer scroll
// ===========================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.stack__card, .project-card, .timeline__item, .experience-card, .course-card').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// ===========================
// FOOTER — año dinámico
// ===========================
document.getElementById('footer-year').textContent = new Date().getFullYear();