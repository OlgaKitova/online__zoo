let search = document.querySelector('.header__search--icon'),
    searchForm = document.querySelector('.header__search--hide');

search.addEventListener('click', (e) => {
   searchForm.classList.toggle('show');
});
$(document).ready(function(){
  $('.slider').slick({
     arrows: true,
     slidesToShow:3,
  });
});