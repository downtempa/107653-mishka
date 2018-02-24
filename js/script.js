// main menu toggle
var mobileMenuToggle = document.querySelector('#main-menu-toggle');
var mobileMenu = document.querySelector('#mobile-menu');


mobileMenuToggle.onclick = function() {
  this.classList.toggle('js-active');
  mobileMenu.classList.toggle('js-active');
}

// svg for everybody
svg4everybody();

// tiny-slider on main-page (review-slider)
var slider = tns({
  container: '.slider--review',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  nav: false,
  arrowKeys: true,
  autoplayButtonOutput: false,
  mouseDrag: true,
  controlsContainer: document.querySelector('.slider__control')
});
