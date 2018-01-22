// main menu toggle
var mobileMenuToggle = document.querySelector('#main-menu-toggle');
var mobileMenu = document.querySelector('#mobile-menu');


mobileMenuToggle.onclick = function() {
  this.classList.toggle('js-active');
  mobileMenu.classList.toggle('js-active');
}

// svg for everybody
svg4everybody();
