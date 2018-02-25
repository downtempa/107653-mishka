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

ymaps.ready(function () {
  ymaps.ready(init);
  var myMap,  myPlacemark;

  function init(){
    myMap = new ymaps.Map("map", {
      center: [59.93867682, 30.32309742],
      zoom: 18,
      controls: []
    });


    myPlacemark = new ymaps.Placemark([59.93867682, 30.32309742], {
      hintContent: 'mishka.ru',
      balloonContent: 'mishka.ru'
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/icon-map-pin.svg',
      // Размеры метки.
      iconImageSize: [66, 101],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-30, -100]
    });

    myMap.geoObjects.add(myPlacemark);
  }

});
