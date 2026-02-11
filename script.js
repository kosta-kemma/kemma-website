(function() {
  'use strict';

  // -- Sticky Navbar --
  const navbar = document.getElementById('navbar');
  function handleScroll() {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleScroll, { passive: true });

  // -- Mobile Menu --
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const mobileCloseBtn = document.getElementById('mobileCloseBtn');

  function openMobileMenu() {
    mobileMenu.classList.add('open');
    mobileOverlay.classList.add('open');
    mobileOverlay.style.display = 'block';
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    mobileOverlay.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    setTimeout(function() {
      if (!mobileOverlay.classList.contains('open')) {
        mobileOverlay.style.display = 'none';
      }
    }, 350);
  }

  hamburgerBtn.addEventListener('click', openMobileMenu);
  mobileCloseBtn.addEventListener('click', closeMobileMenu);
  mobileOverlay.addEventListener('click', closeMobileMenu);

  var mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(function(link) {
    link.addEventListener('click', closeMobileMenu);
  });

  // -- Smooth Scroll --
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var navHeight = navbar.offsetHeight;
        var offsetTop = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    });
  });

  // -- Scroll Reveal --
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });
    reveals.forEach(function(el) { observer.observe(el); });
  } else {
    reveals.forEach(function(el) { el.classList.add('visible'); });
  }

  // -- Hero Form --
  var heroForm = document.getElementById('heroForm');
  var heroFormSuccess = document.getElementById('heroFormSuccess');

  heroForm.addEventListener('submit', function(e) {
    e.preventDefault();
    var name = heroForm.querySelector('#hero-name').value.trim();
    var phone = heroForm.querySelector('#hero-phone').value.trim();

    if (!name || !phone) return;

    var formGroups = heroForm.querySelectorAll('.form-group, .btn');
    formGroups.forEach(function(el) { el.style.display = 'none'; });
    heroFormSuccess.classList.add('show');
  });

  // -- Contact Form --
  var contactForm = document.getElementById('contactForm');
  var contactFormSuccess = document.getElementById('contactFormSuccess');

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    var name = contactForm.querySelector('#contact-name').value.trim();
    var phone = contactForm.querySelector('#contact-phone').value.trim();

    if (!name || !phone) return;

    var formGroups = contactForm.querySelectorAll('.form-group, .form-row, .btn, .contact-form-subtitle');
    formGroups.forEach(function(el) { el.style.display = 'none'; });
    contactFormSuccess.classList.add('show');
  });

  // -- Escape closes mobile menu --
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      closeMobileMenu();
    }
  });

})();
