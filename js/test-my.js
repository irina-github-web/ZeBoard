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

//---------ЗАПИСИ ВЕБИНАРОВ---------

//Слайдер навигации (вебинары)
$(".slider-nav")
  .not(".slick-initialized")
  .slick({
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

//Слайдер с контентом (вебинары)
$(".slider-for").not(".slick-initialized").slick({
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
    //Добавление слайда для навигации (верхний слайдер)
    $(".slider-nav").slick(
      "slickAdd",
      `<div class="chapter_card chapter1">
        <a href="#vebirars">
        <div class="chapter1_img" style="background-image: url(${item.video_type_pic_url});"></div>
        <div class="chapter_txt">
        <h3 class="heading_small">${item.video_type_name}</h3>
        <div class="razdelit_small"></div>
        <a href="#" class="link_look1 w-inline-block">
        <div class="txt_link_look">смотреть</div></a>
        <a href="#" class="link_look1 active w-inline-block">
        <div class="txt_link_look">смотреть</div></a></div></a></div>`
    );

    var iVideoIdFirst = ""; //для вывода первого объекта в слайд
    var result = []; //массив для контента видео + описание
    var result_preview = []; //массив для превью видео вебинаров

    //Добавлние в массив видео вебинара + описание (первый объект)
    $.each(item.videos, (iVideoId, aVideo) => {
      if (iVideoIdFirst === "") {
        iVideoIdFirst = iVideoId;
      } else {
        return false;
      }

      result.push(
        `<div class="main-slide-content">
          <a href=${aVideo.video_url} class="fancybox-media w-inline-block">
          <div class="video" style="background-color:rgba(63, 145, 229, 0.7);background-image: url(${aVideo.video_pic_url});background-size:cover;"><img src="images/icn_play_big.png" alt="" class="icn_big_play">
          <div class="pl_blue"></div></div></a>
          <div id="video_description" class="video_description">
          <h2 class="heading_middle heading_video">${aVideo.video_name}</h2>
          <div class="razdelit_mid"></div>
          <div class="txt_author">${aVideo.video_author}</div>
          <p class="txt_std txt_video_desc">${aVideo.video_text}</p></div></div>`
      );
    });

    //Добавление в массив превью видео вебинаров
    $.each(item.videos, (iVideoId, aVideo) => {
      result_preview.push(
        `<div class="video_preview preview_vebinar3_1 liteTooltip" style="background-image: url(../images/icn_play_small.png), url(${
          aVideo.video_pic_url
        }); 
        ${iVideoId == iVideoIdFirst ? "opacity: 0.5" : "opacity : 0.8"}" 
        data-tooltip-mouseover="${aVideo.video_name}"></div>`
      );
    });

    //Добавление слайда с контентом (нижний слайдер)
    $(".slider-for").slick(
      "slickAdd",
      `<div class="container-upr">
        <h1 class="header_std">${item.video_type_name}</h1>
        <div class="razdelit_upravl" id="vebirars_view">
        <div class="line_razd blue"></div><img src=${item.video_type_icon_url} width="29" alt="" class="icn_upravl">
        <div class="line_razd blue"></div></div>
        <div class="content">
        <div class="block_video">` +
        result.join("") +
        '<div class="block_video_preview">' +
        result_preview.join("") +
        "</div>" +
        `<div class="video_show_all liteTooltip">
        <div class="btn_arrow_right">
        <img src="images/icn_arrow_right.svg" alt="" class="arrow_bottom">
        </div></div></div>
        <div class="pl_show"></div></div></div></div>`
    );
  });
});

//Контент слайда (вебинары) после клика на превью
$("#vebirars").on("click", ".video_preview", function () {
  var previewVal = $(this).attr("data-tooltip-mouseover"); //выбранное название видео
  $("#vebirars .video_preview").css("opacity", "0.8"); //ставим всем превью прозрачность 0.8
  $(this).css("opacity", "0.5"); //выбранный элемент прозрачнее других

  //Получение данных
  $.getJSON("https://video.gd.ru/event-type-2", function (data) {
    $.each(data, function (i, item) {
      $.each(item.videos, (iVideoId, aVideo) => {
        var videonameVal = aVideo.video_name; //название видео в переменную, и ниже проверка на соответствие
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

//---------ЗАПИСИ ВЫСТУПЛЕНИЙ---------

//Слайдер навигации (выступления)
$(".chapters_block2").not(".slick-initialized").slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  infinite: false,
  focusOnSelect: true,
  centerMode: false,
  dots: false,
  arrows: false,
  asNavFor: "#conferenses",
});

//Слайдер для контента (выступления)
$("#conferenses").not(".slick-initialized").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  fade: true,
  asNavFor: ".chapters_block2",
});

var defYear = "2020";
// getConferences(defYear); //вызов функции (описана ниже) для вывода данных за 2020 год

//функция сортировки по году
function getConferences(year, item, currSlideIndex) {
  var iVideoIdFirstVy = ""; //для вывода первого объекта в слайд
  var resultVy = []; //видео + описание
  var result_previewVy = []; //превью выступлений
  var resultYears = []; //массив для сортировки по году

  //Добавление в массив видео выступление + описание (первый объект)
  $.each(item.videos, (iVideoId, aVideoList) => {
    //По умолчанию выводим 2020 год
    if (iVideoId == year) {
      $.each(aVideoList, (videoId, aVideo) => {
        if (iVideoIdFirstVy === "") {
          iVideoIdFirstVy = videoId;
        } else {
          return false;
        }

        resultVy.push(
          `<div class="main-slide-content">
                <a href=${aVideo.video_url} class="fancybox-media w-inline-block">
                <div class="video" style="background-color:rgba(63, 145, 229, 0.7);background-image: url(${aVideo.video_pic_url});background-size:cover;"><img src="images/icn_play_big.png" alt="" class="icn_big_play">
                <div class="pl_blue"></div></div></a>
                <div id="video_description" class="video_description">
                <h2 class="heading_middle heading_video" tooltip=${aVideo.video_year}>${aVideo.video_name}</h2>
                <div class="razdelit_mid"></div>
                <div class="txt_author">${aVideo.video_author}</div>
                <p class="txt_std txt_video_desc">${aVideo.video_text}</p></div></div>`
        );
      });
    }
  });

  //Добавление в массив превью видео выступлений
  $.each(item.videos, (iVideoId, aVideoList) => {
    if (iVideoId == year) {
      $.each(aVideoList, (videoId, aVideo) => {
        result_previewVy.push(
          `<div class="video_preview preview_vebinar3_1 liteTooltip" style="background-image: url(../images/icn_play_small.png), url(${
            aVideo.video_pic_url
          });
              ${videoId == iVideoIdFirstVy ? "opacity: 0.5" : "opacity : 0.8"}" 
              data-tooltip-mouseover="${aVideo.video_name}"></div>`
        );
      });
    }
  });

  //Пагинация по году
  $.each(item.videos, (iVideoId, aVideo) => {
    resultYears.push(
      `<div class=${
        iVideoId == year ? "year_pagination_active" : "year_pagination"
      } data-tooltip-year="${iVideoId}">${iVideoId}</div>`
    );
  });

  //Добавление слайда с контентом (нижний слайдер)
  $("#conferenses").slick(
    "slickAdd",
    `<div class="container-upr">
          <h1 class="header_std">${item.video_type_name}  ${year}</h1>
          <div class="razdelit_upravl" id="vebirars_view">
          <div class="line_razd blue"></div><img src=${item.video_type_icon_url} width="29" alt="" class="icn_upravl">
          <div class="line_razd blue"></div></div>
          <div class="content">
          <div class="block_video">` +
      resultVy.join("") +
      '<div class="block_video_preview">' +
      result_previewVy.join("") +
      '<div class="pagination">' +
      '<div class="year_pagination name">Год конференции:</div>' +
      resultYears.reverse().join("") +
      `</div></div>
          <div class="video_show_all liteTooltip">
          <div class="btn_arrow_right"><img src="images/icn_arrow_right.svg" alt="" class="arrow_bottom"></div></div></div>
          <div class="pl_show"></div></div></div></div>`
  );
  // loadMoreVideos();
}

//Получение данных
$.getJSON("https://video.gd.ru/event-type-1", function (data) {
  //Перебираем в цикле
  $.each(data, function (i, item) {
    //Добавление слайда для навигации (верхний слайдер)
    $(".chapters_block2").slick(
      "slickAdd",
      `<div class="conf_card conf1_card">
          <a href="#conferenses"><div class="conf1_img" style="background-image: url(${item.video_type_pic_url});"></div></a>
          <div class="chapter_txt"><a href="#conferenses">
          <h3 class="heading_small">${item.video_type_name}</h3>
          <div class="razdelit_small"></div></a>
          <a href="#conferenses" class="link_look1 w-inline-block">
          <div class="txt_link_look">смотреть</div>
          </a>
          <a href="#conferenses" class="link_look1 active w-inline-block">
          <div class="txt_link_look">смотреть</div>
          </a></div></div>`
    );

    getConferences(defYear, item); //вызов функции для вывода данных за 2020 год
  });
});

//Контент слайдера (выступления) после клика на превью
$("#conferenses").on("click", ".video_preview", function () {
  var previewValС = $(this).attr("data-tooltip-mouseover"); //выбранное название видео
  $("#conferenses .video_preview").css("opacity", "0.8");
  $(this).css("opacity", "0.5");

  //Получение данных
  $.getJSON("https://video.gd.ru/event-type-1", function (data) {
    //Цикл
    $.each(data, function (i, item) {
      //до объекта, где ключ год
      $.each(item.videos, (iVideoId, aVideoList) => {
        //до объекта, где ключ id видео
        $.each(aVideoList, (videoId, aVideo) => {
          var videonameValС = aVideo.video_name; //название видео в переменную, и ниже проверка на соответствие
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
});

//Контент слайда после клика на год pagination
$("#conferenses").on("click", ".year_pagination", function () {
  var currYear = $(this).attr("data-tooltip-year"); //получение выбранного года
  var currSlideIndex = $(".chapters_block2 .slick-current").attr(
    "data-slick-index"
  );

  //удаление текущего слайда
  $("#conferenses .container-upr").remove();

  $.getJSON("https://video.gd.ru/event-type-1", function (data) {
    //Перебираем в цикле
    $.each(data, function (i, item) {
      getConferences(currYear, item); //вызов функции для сортировки по выбранному году
    });
  });

  // $("#conferenses").slick("slickGoTo", currSlideIndex);
  console.log(currSlideIndex);

  if (currSlideIndex == 1) {
    console.log("if done");
      // $(".chapters_block2 .slick-current").trigger("click");
      $("#conferenses").slick("refresh");
      $("#conferenses").slick("slickGoTo", currSlideIndex);
  }
  // loadMoreVideos();
});

// $(window).on('load', function goToSlide(slide) {
//   console.log(slide);
//   $(".chapters_block2").slick('slickGoTo', slide);
// });

//Show more button для видео-превью
// function loadMoreVideos() {
//   var previewsArr = $("#conferenses .slick-current .video_preview");
//   console.log(previewsArr);
//   if (previewsArr.length > 10) {
//     console.log("arr > 9");
//     previewsArr.slice(0, 9);
//     $("#conferenses .slick-current .video_show_all").css("display", "block");
//   }
//   $("body").on("click", ".video_show_all", () => {
//     console.log("click");
//     $("#conferenses .slick-current .video_preview:hidden").slice(0, 9).fadeIn();
//     if ($("#conferenses .slick-current .video_preview:hidden").length < 1) {
//       $(this).fadeOut();
//     }
//   });
// }
