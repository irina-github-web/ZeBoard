$(function () {
    $(".demo1").addClass("slider-nav");
  });
  
  $(".section_vebirars").addClass("slider-for");
  $("#vebirars").css("display", "block");

//Слайдер навигации (вебинары)
$(".slider-nav").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  focusOnSelect: true,
  infinite: true,
  centerMode: true,
  asNavFor: ".slider-for",
  dots: false,
  focusOnSelect: true,
  appendArrows: $(".slick-arrow-4"),
  prevArrow:
    '<button class="icn_arrow_left" aria-label="Previous" type="button"></button>',
  nextArrow:
    '<button class="icn_arrow_right" aria-label="Next" type="button"></button>',
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "40px",
        arrows: false,
        infinite: true,
        dots: true,
        adaptiveHeight: true,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        infinite: true,
        dots: true,
        adaptiveHeight: true,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 479,
      settings: {
        slidesToShow: 1,
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        infinite: true,
        dots: true,
        adaptiveHeight: true,
        slidesToScroll: 1,
      },
    },
  ],
});
//Слайдер с контентом (видео)
$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  fade: true,
  asNavFor: ".slider-nav",
});

$.getJSON("https://video.gd.ru/event-type-2", function (data) {
  for (var i = 0; i < data.length; i++) {
      console.log(data[i]);
    $(".slider-nav").slick(
        "slickAdd",
        '<div class="chapter_card chapter1">' +
          '<a href="#vebirars">' +
          `<div class="chapter1_img" style="background-image: url(${data[i].video_type_pic_url});"></div>` +
          '<div class="chapter_txt">' +
          `<h3 class="heading_small">${data[i].video_type_name}</h3>` +
          '<div class="razdelit_small"></div>' +
          '<a href="#" class="link_look1 w-inline-block">' +
          '<div class="txt_link_look">смотреть</div></a>' +
          '<a href="#" class="link_look1 active w-inline-block">' +
          '<div class="txt_link_look">смотреть</div></a></div></a></div>'
      );   
  }
});
