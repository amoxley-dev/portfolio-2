const toggleMenu = () => {
  const hamburgerBtn = document.getElementById('hamburger-button');
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu?.classList.toggle('hidden');
  mobileMenu?.classList.toggle('flex');
  hamburgerBtn?.classList.toggle('toggle-btn');
}

export default toggleMenu;