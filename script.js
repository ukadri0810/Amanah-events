const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuButton?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', navLinks.classList.contains('open') ? 'true' : 'false');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

window.addEventListener('load', () => {
  if (window.instgrm?.Embeds) {
    window.instgrm.Embeds.process();
  }
});
