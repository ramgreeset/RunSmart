
$(document).ready(function(){
  $('.carousel__inner').slick({
    infinite: true,
    speed: 1000,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 7000,
    prevArrow:'<button type="button" class="slick-prev"><img src="img/icons/left-solid.svg" alt="left"></button>',
    nextArrow:'<button type="button" class="slick-next"><img src="img/icons/right-solid.svg" alt="right"></button>',
  });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });



  function toggleSlide(item){
  $(item).each(function(i) {
    $(this).on('click',function(e) {
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    })

  });
};

  toggleSlide('.catalog-item__back');
  toggleSlide('.catalog-item__link');
  // Modal
  
  $('[data-modal=consultation]').on('click',function() {
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal__close').on('click',function() {
    $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
  });
  
  $('.button_buy').each(function(i) {
    $(this).on('click',function() {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    })
  });
  
  $('#consultation-form').validate();
  $('#consultation form').validate();
  $('#oreder form').validate();

});
