// Mobile nav
const burger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
if (burger){
  burger.addEventListener('click', ()=> menu.classList.toggle('open'));
}

// Theme toggle (explicit)
const toggle = document.querySelector('[data-toggle-theme]');
if (toggle){
  toggle.addEventListener('click', ()=>{
    const dark = document.documentElement.dataset.theme === 'dark';
    document.documentElement.dataset.theme = dark ? 'light' : 'dark';
    localStorage.setItem('ff-theme', document.documentElement.dataset.theme);
  });
  const saved = localStorage.getItem('ff-theme');
  if (saved) document.documentElement.dataset.theme = saved;
}

// Simple form handler (no backend)
const contactForm = document.querySelector('#contact-form');
if (contactForm){
  contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = Object.fromEntries(new FormData(contactForm));
    alert(`Thanks ${data.name}! We'll reply to ${data.email}.`);
    contactForm.reset();
  });
}