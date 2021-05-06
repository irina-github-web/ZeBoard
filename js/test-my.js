$(document).ready(function () {
  $(".fancybox-media").fancybox({
    openEffect: "none",
    closeEffect: "none",
    maxWidth: 1280,
    maxHeight: 720,
    padding: 0,
    margin: 0,
    helpers: {
      media: {
        youtube: {
          params: {
            theme: "light",
            vq: "hd720",
            css: {
              body: "color: #fff",
            },
          },
        },
      },
    },
  });

  var hash = location.hash;

  if (hash == "#autoplay") {
    $("#tinymce").find(".fancybox-media").trigger("click");
  }

  $(".fancybox-media2").fancybox({
    openEffect: "none",
    closeEffect: "none",
    maxWidth: 1280,
    maxHeight: 720,
    padding: 0,
    margin: 0,
    helpers: {
      media: {
        youtube: {
          params: {
            theme: "light",
            vq: "hd720",
            css: {
              body: "color: #fff",
            },
          },
        },
      },
    },
  });

  var hash = location.hash;

  if (hash == "#autoplay") {
    $("#tinymce").find(".fancybox-media").trigger("click");
  }
});

$("#vebirars").css("display", "block");
$("#conferenses").css("display", "block");

// $(".demo1").click(() => {
//   $("#vebirars").css("visibility", "visible");
//   e.preventDefault();
//   slideIndex = $(this).index();
//   $("#vebirars").slickGoTo(parseInt(slideIndex));
// });
// $(".chapters_block2").click(() => {
//   $("#conferenses").css("visibility", "visible");
// });

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

//---------ЗАПИСИ ВЕБИНАРОВ---------

//Слайдер с контентом (вебинары)
$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  fade: true,
  asNavFor: ".slider-nav",
});

//Получение данных
$.getJSON("https://video.gd.ru/event-type-2", function (data) {
  //Перебираем в цикле
  $.each(data, function (i, item) {
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
    var result = [];
    var result_preview = [];

    //Массив для видео вебинара + описание
    $.each(item.videos, (iVideoId, aVideo) => {
      if (iVideoIdFirst === "") {
        iVideoIdFirst = iVideoId;
      } else {
        return false;
      }

      result.push(
        '<div class="main-slide-content">' +
          `<a href=${aVideo.video_url} class="fancybox-media w-inline-block">` +
          `<div class="video" style="background-color:rgba(63, 145, 229, 0.7);background-image: url(${aVideo.video_pic_url});background-size:cover;"><img src="images/icn_play_big.png" alt="" class="icn_big_play">` +
          '<div class="pl_blue"></div></div></a>' +
          '<div id="video_description" class="video_description">' +
          `<h2 class="heading_middle heading_video">${aVideo.video_name}</h2>` +
          '<div class="razdelit_mid"></div>' +
          `<div class="txt_author">${aVideo.video_author}</div>` +
          `<p class="txt_std txt_video_desc">${aVideo.video_text}</p></div></div>`
      );
    });

    //Массив для превью видео вебинаров
    $.each(item.videos, (iVideoId, aVideo) => {
      result_preview.push(
        `<div class="video_preview preview_vebinar3_1 liteTooltip" style="background-image: url(../images/icn_play_small.png), url(${aVideo.video_pic_url}); opacity: 0.8;" data-tooltip-mouseover="${aVideo.video_name}"></div>`
      );
    });

    // if (result_preview.length > 9) {
    //   $(".video_show_all").next().css("display", "flex");
    // }

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
        result.join("") +
        '<div class="block_video_preview">' +
        result_preview.join("") +
        "</div>" +
        '<div class="video_show_all liteTooltip">' +
        '<div class="btn_arrow_right"><img src="images/icn_arrow_right.svg" alt="" class="arrow_bottom"></div></div></div>' +
        '<div class="pl_show"></div></div></div></div>'
    );
  });
});

//Контент слайдера (вебинары) после клика на превью
$("#vebirars").on("click", ".video_preview", function () {
  var previewVal = $(this).attr("data-tooltip-mouseover");

  $.getJSON("https://video.gd.ru/event-type-2", function (data) {
    $.each(data, function (i, item) {
      $.each(item.videos, (iVideoId, aVideo) => {
        var videonameVal = aVideo.video_name;
        if (videonameVal == previewVal) {
          $("#vebirars .slick-current .main-slide-content a .video").css(
            "background-image",
            `url(${aVideo.video_pic_url})`
          );
          $(
            "#vebirars .slick-current .main-slide-content .fancybox-media"
          ).attr("href", aVideo.video_url);
          $(
            "#vebirars .slick-current .main-slide-content .video_description h2"
          ).text(aVideo.video_name);
          $(
            "#vebirars .slick-current .main-slide-content .video_description .txt_author"
          ).text(aVideo.video_author);
          $(
            "#vebirars .slick-current .main-slide-content .video_description .txt_video_desc"
          ).text(aVideo.video_text);
        }
      });
    });
  });
});

var previewItems = $(".slick-current .video_preview").length;
console.log(previewItems);
// if (previewItems > 9) {

// }

//---------ЗАПИСИ ВЫСТУПЛЕНИЙ---------

//Слайдер навигации (выступления)
$(".chapters_block2").slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  infinite: false,
  focusOnSelect: true,
  centerMode: true,
  dots: false,
  arrows: false,
  asNavFor: "#conferenses",
});

//Слайдер для контента (выступления)
$("#conferenses").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  fade: true,
  asNavFor: ".chapters_block2",
});

//Получение данных
$.getJSON("https://video.gd.ru/event-type-1", function (data) {
  console.log(data);
  //Перебираем в цикле
  $.each(data, function (i, item) {
    console.log(item);
    //Верстка для навигации
    $(".chapters_block2").slick(
      "slickAdd",
      '<div class="conf_card conf1_card">' +
        `<a href="#conferenses"><div class="conf1_img" style="background-image: url(${item.video_type_pic_url});"></div></a>` +
        '<div class="chapter_txt"><a href="#conferenses">' +
        `<h3 class="heading_small">${item.video_type_name}</h3>` +
        '<div class="razdelit_small"></div></a>' +
        '<a href="#conferenses" class="link_look1 w-inline-block">' +
        '<div class="txt_link_look">смотреть</div>' +
        "</a>" +
        `<a href="#conferenses" class="link_look1 active w-inline-block">` +
        '<div class="txt_link_look">смотреть</div>' +
        "</a></div></div>"
    );

    var iVideoIdFirstVy = "";
    var resultVy = [];
    var result_previewVy = [];
    var resultYears = [];

    //Массив для видео выступление + описание
    $.each(item.videos, (iVideoId, aVideo) => {
      console.log(iVideoId, aVideo);

      //По умолчанию выводим 2020 год
      if (iVideoId == "2020") {
        // console.log(aVideo);

        if (iVideoIdFirstVy === "") {
          iVideoIdFirstVy = iVideoId;
        } else {
          return false;
        }

        resultVy.push(
          '<div class="main-slide-content">' +
            `<a href=${aVideo.video_url} class="fancybox-media w-inline-block">` +
            `<div class="video" style="background-color:rgba(63, 145, 229, 0.7);background-image: url(${aVideo.video_pic_url});background-size:cover;"><img src="images/icn_play_big.png" alt="" class="icn_big_play">` +
            '<div class="pl_blue"></div></div></a>' +
            '<div id="video_description" class="video_description">' +
            `<h2 class="heading_middle heading_video" tooltip=${aVideo.video_year}>${aVideo.video_name}</h2>` +
            '<div class="razdelit_mid"></div>' +
            `<div class="txt_author">${aVideo.video_author}</div>` +
            `<p class="txt_std txt_video_desc">${aVideo.video_text}</p></div></div>`
        );
      }
    });

    //Массив для превью видео выступлений
    $.each(item.videos, (iVideoId, aVideo) => {
      if (iVideoId == "2020") {
        $.each(aVideo, (i, item) => {
          result_previewVy.push(
            `<div class="video_preview preview_vebinar3_1 liteTooltip" style="background-image: url(../images/icn_play_small.png), url(${item.video_pic_url});opacity: 0.8;" data-tooltip-mouseover="${item.video_name}"></div>`
          );
        });
      }
    });

    // Pagination years
    $.each(item.videos, (iVideoId, aVideo) => {
      resultYears.push(
        `<div class="year_pagination pag_item">${iVideoId}</div>`
      );
      console.log(resultYears);
    });

    //Верстка для контента
    $("#conferenses").slick(
      "slickAdd",
      '<div class="container-upr">' +
        `<h1 class="header_std">${item.video_type_name}</h1>` +
        '<div class="razdelit_upravl" id="vebirars_view">' +
        `<div class="line_razd blue"></div><img src=${item.video_type_icon_url} width="29" alt="" class="icn_upravl">` +
        '<div class="line_razd blue"></div></div>' +
        '<div class="content">' +
        '<div class="block_video">' +
        resultVy.join("") +
        '<div class="block_video_preview">' +
        result_previewVy.join("") +
        "</div>" +
        '<div class="video_show_all liteTooltip">' +
        '<div class="btn_arrow_right"><img src="images/icn_arrow_right.svg" alt="" class="arrow_bottom"></div></div></div>' +
        '<div class="pagination">' +
        '<div class="year_pagination name">Год конференции:</div>' +
        resultYears.join("") +
        "</div>" +
        '<div class="pl_show"></div></div></div></div>'
    );
  });
});

//Контент слайдера (выступления) после клика на превью
$("#conferenses").on("click", ".video_preview", function () {
  var previewValС = $(this).attr("data-tooltip-mouseover");

  $.getJSON("https://video.gd.ru/event-type-1", function (data) {
    $.each(data, function (i, item) {
      $.each(item.videos, (iVideoId, aVideo) => {
        var videonameValС = aVideo.video_name;
        if (videonameValС == previewValС) {
          $("#conferenses .slick-current .main-slide-content a .video").css(
            "background-image",
            `url(${aVideo.video_pic_url})`
          );
          $(
            "#conferenses .slick-current .main-slide-content .fancybox-media"
          ).attr("href", aVideo.video_url);
          $(
            "#conferenses .slick-current .main-slide-content .video_description h2"
          ).text(aVideo.video_name);
          $(
            "#conferenses .slick-current .main-slide-content .video_description .txt_author"
          ).text(aVideo.video_author);
          $(
            "#conferenses .slick-current .main-slide-content .video_description .txt_video_desc"
          ).text(aVideo.video_text);
        }
      });
    });
  });
});

$(".pagination").on("click", ".pag_item", function () {
  var yearItem = $(this).attr("data-tooltip-year");

  $.getJSON("https://video.gd.ru/event-type-1", function (data) {
    $.each(data, function (i, item) {
      $.each(item.videos, (iVideoId, aVideo) => {
        if (aVideo.video_year == yearItem) {
          $("#conferenses .slick-current .main-slide-content a .video").css(
            "background-image",
            `url(${aVideo.video_pic_url})`
          );
          $(
            "#conferenses .slick-current .main-slide-content .fancybox-media"
          ).attr("href", aVideo.video_url);
          $(
            "#conferenses .slick-current .main-slide-content .video_description h2"
          ).text(aVideo.video_name);
          $(
            "#conferenses .slick-current .main-slide-content .video_description .txt_author"
          ).text(aVideo.video_author);
          $(
            "#conferenses .slick-current .main-slide-content .video_description .txt_video_desc"
          ).text(aVideo.video_text);
        }
      });
    });
  });
});
