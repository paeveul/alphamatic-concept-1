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


// Service card carousels
document.querySelectorAll('.card-carousel').forEach(carousel => {
  const track = carousel.querySelector('.carousel-track');
  const dots = carousel.querySelectorAll('.carousel-dot');
  const prevBtn = carousel.querySelector('.carousel-btn-prev');
  const nextBtn = carousel.querySelector('.carousel-btn-next');
  let current = 0;
  const total = dots.length;

  function goTo(index) {
    current = Math.max(0, Math.min(index, total - 1));
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('carousel-dot-active', i === current));
  }

  if (prevBtn) prevBtn.addEventListener('click', () => goTo(current - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goTo(current + 1));

  // Mobile: sync dots to scroll position
  track.addEventListener('scroll', () => {
    const index = Math.round(track.scrollLeft / track.offsetWidth);
    dots.forEach((d, i) => d.classList.toggle('carousel-dot-active', i === index));
  }, { passive: true });
});
