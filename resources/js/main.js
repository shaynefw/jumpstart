$(document).ready(function(){
  $('.carousel').slick({
    infinite: true,
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    draggable: false,
    pauseOnHover: false,
    pauseOnFocus: false,
  });

// Navigation bar scroll animation

  var mouseScroll = 0;
  $(window).scroll(function(){
    var scrollToTop = $(this).scrollTop();
    if (scrollToTop - mouseScroll > 50){
      var navHeight = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + navHeight}, 150);
      mouseScroll = scrollToTop;
    } else if (mouseScroll - scrollToTop > 50){
      $('.navbar').animate({top: '0px'}, 150);
      mouseScroll = scrollToTop;
    }
  });
});
