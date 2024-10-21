$(document).ready(function(){
  $(".slider").slick({
      dots: true,
      infinite: true,
      responsive:[{
          breakpoint: 960,
          settings: {
              dots: true,
              infinite: true,
              slidesToScroll: 1,
              slidesToShow: 1
              }
      }],
      slidesToScroll: 1,
      slidesToShow: 3
  });
});