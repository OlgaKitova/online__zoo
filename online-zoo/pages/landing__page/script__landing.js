
window.addEventListener('DOMContentLoaded', () => {


  const inputToggle = document.querySelector('.header__choice'),
        inputWhite = document.querySelector('.header__change--white'),
        inputBlack = document.querySelector('.header__change--black'),
        header = document.querySelector('.header'),
        works = document.querySelector('.works'),
        feautures = document.querySelector('.feautures'),
        pets = document.querySelector('.pets'),
        pay = document.querySelector('.pay'),
        testimonial = document.querySelector('.testimonial'),
        map = document.querySelector('.map'),
        mapWhite = document.querySelector('.map__white'),
        mapBlack = document.querySelector('.map__black'),
        aboutAnimals = document.querySelectorAll('.map .about');


  function toggleChange(white, black) {
    white.classList.add('hide-input');
    black.classList.remove('hide-input');
  }
  inputBlack.addEventListener('click', () => {
    toggleChange(inputWhite, inputBlack);
    document.querySelectorAll('a').forEach(el => el.style.color = '#fff');
    document.querySelectorAll('.slides__card').forEach(el => el.classList.add('gray__color'));
    inputToggle.classList.add('black__toggle');
    header.classList.add('black__color');
    works.classList.add('black__color');
    feautures.classList.add('gray__color');
    pets.classList.add('black__color');
    pay.classList.add('gray__color');
    testimonial.classList.add('black__color');
    map.classList.add('gray__color');
    aboutAnimals.forEach(el => el.classList.add('black__color'));
    mapBlack.classList.remove('map__black--hidden');
    mapWhite.classList.add('map__black--hidden');

  });
  inputWhite.addEventListener('click', () => {
    toggleChange(inputBlack, inputWhite);
    inputToggle.classList.remove('black__toggle');
    document.querySelectorAll('a').forEach(el => el.style.color = '#333333');
    document.querySelectorAll('.slides__card').forEach(el => el.classList.remove('gray__color'));
    inputToggle.classList.remove('black__toggle');
    header.classList.remove('black__color');
    works.classList.remove('black__color');
    feautures.classList.remove('gray__color');
    pets.classList.remove('black__color');
    pay.classList.remove('gray__color');
    testimonial.classList.remove('black__color');
    map.classList.remove('gray__color');
    aboutAnimals.forEach(el => el.classList.remove('black__color'));
    mapWhite.classList.remove('map__black--hidden');
    mapBlack.classList.add('map__black--hidden'); 
  });


  //slider1

  const slides = document.querySelector('.slides'),
        slide = document.querySelectorAll('.slide'),
        swiper = document.querySelector('.swiper');

        
})