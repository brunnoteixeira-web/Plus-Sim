document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  if (mobileMenuToggle && mobileMenu) {
      mobileMenuToggle.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
          
          if (mobileMenu.classList.contains('hidden')) {
              menuIcon.classList.remove('hidden');
              closeIcon.classList.add('hidden');
          } else {
              menuIcon.classList.add('hidden');
              closeIcon.classList.remove('hidden');
          }
      });
  }
});
