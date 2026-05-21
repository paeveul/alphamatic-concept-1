// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden');
    hamburger.setAttribute('aria-expanded', String(!isOpen));
  });
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.add('hidden');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
}

// Nav shadow on scroll
const nav = document.getElementById('site-nav');
if (nav) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      nav.style.boxShadow = '0 2px 12px rgba(0,0,0,0.12)';
    } else {
      nav.style.boxShadow = '0 1px 4px rgba(0,0,0,0.06)';
    }
  }, { passive: true });
}
