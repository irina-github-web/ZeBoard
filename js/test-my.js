$(".demo1").addClass("slider-nav");
$(".section_vebirars").addClass("slider-for");
$("#vebirars").css("display", "block");

//Слайдер навигации (вебинары)
$(".slider-nav").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  focusOnSelect: true,
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
  fade: false,
  asNavFor: ".slider-nav",
});

//Получение данных
$.getJSON("https://video.gd.ru/event-type-2", function (data) {
  //Перебираем в цикле
  $.each(data, function (i, item) {
    console.log(data);
    //Верстка для навигации
    $(".slider-nav").slick(
      "slickAdd",
      '<div class="chapter_card chapter1">' +
        '<a href="#vebirars">' +
        `<div class="chapter1_img" style="background-image: url(${item.video_type_pic_url});"></div>` +
        '<div class="chapter_txt">' +
        `<h3 class="heading_small">${item.video_type_name}</h3>` +
        '<div class="razdelit_small"></div>' +
        '<a href="#" class="link_look1 w-inline-block">' +
        '<div class="txt_link_look">смотреть</div></a>' +
        '<a href="#" class="link_look1 active w-inline-block">' +
        '<div class="txt_link_look">смотреть</div></a></div></a></div>'
    );

    var iVideoIdFirst = "";

    //Верстка для контента
    $(".slider-for").slick(
      "slickAdd",
      '<div class="container-upr">' +
        `<h1 class="header_std">${item.video_type_name}</h1>` +
        '<div class="razdelit_upravl" id="vebirars_view">' +
        `<div class="line_razd blue"></div><img src=${item.video_type_icon_url} width="29" alt="" class="icn_upravl">` +
        '<div class="line_razd blue"></div></div>' +
        '<div class="content">' +
        '<div class="block_video">' +
        $.each(item.videos, (iVideoId, aVideo) => {
          if (iVideoIdFirst === "") {
            iVideoIdFirst = iVideoId;
            console.log(iVideoIdFirst, aVideo);
          } else { return false; }

          var video_url = iVideoIdFirst.video_url;
          var video_pic_url = iVideoIdFirst.video_pic_url;
          var video_name = aVideo["videos"][iVideoIdFirst]["video_name"];
          console.log(video_name);
          var video_author = iVideoIdFirst.video_author;
          var video_text = iVideoIdFirst.video_text;
          // Object.keys(obj).forEach(key => {
          //   console.log(key, obj[key]);
          // });
          // alert(item["videos"][iVideoIdFirst]["video_name"]); 

          `<a href=${video_url} class="fancybox-media w-inline-block">` +
            `<div class="video" style="background-color:rgba(63, 145, 229, 0.7);background-image: url(${video_pic_url});background-size:cover;"><img src="images/icn_play_big.png" alt="" class="icn_big_play">` +
            '<div class="pl_blue"></div></div></a>' +
            '<div id="video_description" class="video_description">' +
            `<h2 class="heading_middle heading_video">${video_name}</h2>` +
            '<div class="razdelit_mid"></div>' +
            `<div class="txt_author">${video_author}</div>` +
            `<p class="txt_std txt_video_desc">${video_text}</p></div>`;
        }) +
        $.each(item.videos, (iVideoId, aVideo) => {
          `<div class="video_preview preview_vebinar3_1 liteTooltip" style="background-image: url(../images/icn_play_small.png), url(${iVideoId.video_pic_url});opacity: 0.5;"></div>`;
        }) +
        '<div class="video_show_all liteTooltip">' +
        '<div class="btn_arrow_right"><img src="images/icn_arrow_right.svg" alt="" class="arrow_bottom"></div></div></div>' +
        '<div class="pl_show"></div></div></div></div>'
    );
  });
});
