// Hamburger menu
const menuButton = document.getElementById('menu');
const nav = document.querySelector('nav ul');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('open');
  menuButton.textContent = nav.classList.contains('open') ? '✖' : '☰';
});

// Footer dynamic year and last modified
const footer = document.querySelector('footer p');
const year = new Date().getFullYear();
const lastModified = document.lastModified;
footer.innerHTML = `&copy; ${year} Developed by Christopher Zambrano<br><small>Last Modified: ${lastModified}</small>`;