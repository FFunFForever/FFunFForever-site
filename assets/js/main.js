// assets/js/main.js
document.getElementById('year').textContent = new Date().getFullYear();
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
if (menuBtn) menuBtn.addEventListener('click', () => nav.classList.toggle('open'));