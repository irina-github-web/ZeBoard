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
//Слайдер с контентом (вебинары)
$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  fade: false,
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
          `<div class="video_preview preview_vebinar3_1 liteTooltip" style="background-image: url(../images/icn_play_small.png), url(${aVideo.video_pic_url});" data-tooltip-mouseover="${aVideo.video_name}"></div>`
      );
    });

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
$(".section_vebirars").on("click", ".video_preview", function () {
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

//-------------------------------

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
  fade: false,
  asNavFor: ".chapters_block2",
});

//Получение данных
$.getJSON("https://video.gd.ru/event-type-1", function (data) {
  //Перебираем в цикле
  $.each(data, function (i, item) {
    console.log(item);
  });
});

/*tooltip*/

!(function ($, b, c, d) {
  "use strict";
  ($.fn.liteTooltip = function (c) {
    var g,
      e = $(this),
      f = $.extend({}, $.fn.liteTooltip.default, c);
    e.each(function () {
      var evnt =
        typeof $(this).attr("data-tooltip-mouseover") !== "undefined"
          ? "mouseover"
          : typeof $(this).attr("data-tooltip-focus") !== "undefined"
          ? "focus"
          : "mouseover";
      "mouseover" === evnt
        ? (g = "mouseout")
        : "focus" === evnt && (g = "blur");

      $(this)
        .on(evnt, function () {
          $.fn.liteTooltip.removeElem(f);
          function m($) {
            "top" === $.position
              ? r($)
              : "left" === $.position
              ? p($)
              : "right" === $.position
              ? o($)
              : "bottom" === $.position
              ? q($)
              : n($),
              t($, i);
          }

          function n(c) {
            function t($, b) {
              "top" === $
                ? ((b.position = "top"), r(b))
                : "bottom" === $
                ? ((b.position = "bottom"), q(b))
                : "left" === $
                ? ((b.position = "left"), p(b))
                : "right" === $ && ((b.position = "right"), o(b));
            }
            var d = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
              },
              e = null,
              g = 0,
              h = c.triggerLeft - c.tlWidth + f.space;
            h > g && (d.left = h);
            var i = $(b).width(),
              j = i - (c.triggerLeft + c.triggerW);
            j > c.tlWidth && (d.right = j);
            var k = c.triggerTop,
              l = k;
            l > c.tlHeight + f.space && (d.top = l);
            var m = $(b).height(),
              n = m - (c.triggerTop + c.triggerH);
            n > c.tlHeight + f.space && (d.bottom = n);
            var s = Math.max(d.left, d.right, d.top, d.bottom);
            $.each(d, function ($, b) {
              b === s && (e = $);
            }),
              t(e, c);
          }

          function o(c) {
            var d = $(b).width(),
              e = d - (c.triggerLeft + c.triggerW);
            if (e < c.tlWidth + f.space) n(c);
            else {
              var g = u(c, "sideRight"),
                h = v(c);
              s(h, g);
            }
          }

          function p($) {
            if ($.triggerLeft < $.tlWidth + f.space) n($);
            else {
              var b = u($, "sideLeft"),
                c = v($);
              s(c, b);
            }
          }

          function q(c) {
            var d = $(b).height(),
              e = d - (c.triggerTop + c.triggerH);
            if (e < c.tlHeight + f.space) n(c);
            else {
              var g = u(c),
                h = c.triggerTop + c.triggerH + f.space;
              s(h, g);
            }
          }

          function r($) {
            if ($.triggerTop < $.tlHeight + f.space) n($);
            else {
              var b = u($),
                c = $.triggerTop - $.tlHeight - f.space;
              s(c, b);
            }
          }

          function s(b, c) {
            $("#tooltip").css({
              top: b,
              left: c,
            });
          }

          function t(b, c) {
            c.bool
              ? "top" === b.position
                ? "left" === c.side
                  ? (x("left", b),
                    $("#tooltip")
                      .find(".tooltip-arrow")
                      .css({
                        left: b.triggerW / 2 - 8,
                      }))
                  : "right" === c.side &&
                    (x("right", b),
                    $("#tooltip")
                      .find(".tooltip-arrow")
                      .css({
                        left: b.tlWidth - (b.triggerW - 8),
                      }))
                : "bottom" === b.position &&
                  ("left" === c.side
                    ? (x("left", b),
                      $("#tooltip")
                        .find(".tooltip-arrow")
                        .css({
                          left: b.triggerW / 2 - 8,
                        }))
                    : "right" === c.side &&
                      (x("right", b),
                      $("#tooltip")
                        .find(".tooltip-arrow")
                        .css({
                          left: b.triggerW + 8,
                        })))
              : x("center", b);
          }

          function u(c, d) {
            if (d && "sideLeft" === d)
              var e = c.triggerLeft - (c.tlWidth + f.space);
            else if (d && "sideRight" === d)
              var e = c.triggerLeft + (c.triggerW + f.space);
            else
              var g = 0.5 * c.tlWidth - 0.5 * c.triggerW,
                e = c.triggerLeft - g;
            return (
              e < 0
                ? ((e = c.triggerLeft), (i.bool = !0), (i.side = "left"))
                : e > $(b).width() &&
                  ((e =
                    $(b).width() - (c.triggerLeft + c.triggerW) - c.tlWidth),
                  (i.bool = !0),
                  (i.side = "right")),
              e
            );
          }

          function v($) {
            var b = 0.5 * $.tlHeight - 0.5 * $.triggerH,
              c = $.triggerTop - b;
            return c < 0 && (c = $.triggerTop), c;
          }

          function w() {
            var b = $(
              '<div class="tooltip animation-' +
                f.animation +
                '" id="tooltip"></div>'
            );
            $("body").append(b);
          }

          function x(b, c) {
            var d, e;
            "left" === b
              ? "top" === c.position
                ? (e = "toptobottom")
                : "bottom" === c.position && (e = "bottomtotop")
              : "right" === b
              ? "top" === c.position || "bottom" === c.position
              : (b && "center" !== b) ||
                ("top" === c.position
                  ? (e = "toptobottom center")
                  : "bottom" === c.position && (e = "bottomtotop center")),
              "left" === c.position
                ? (e = "lefttoright")
                : "right" === c.position && (e = "righttoleft"),
              (d = $('<div class="tooltip-arrow ' + e + ' "></div>')),
              $("#tooltip").append(d);
          }
          var c = $(this),
            e = c.data("tooltip" + evnt[0].toUpperCase() + evnt.substring(1)),
            g =
              c.data("tooltipPosition") === d ||
              "" === c.data("tooltipPosition")
                ? f.position
                : c.data("tooltipPosition"),
            h = !1,
            i = {
              bool: !1,
              side: "",
            },
            j = c.offset();
          if ((h = e !== d && "" !== e && null !== e)) {
            w();
            var k = $("#tooltip");
            k.html(e);
            var l = {
              triggerW:
                parseInt(c.width()) +
                parseInt(c.css("padding-left")) +
                parseInt(c.css("padding-right")),
              triggerH:
                parseInt(c.height()) +
                parseInt(c.css("padding-top")) +
                parseInt(c.css("padding-bottom")),
              triggerTop: j.top,
              triggerLeft: j.left,
              tlWidth:
                k.width() +
                parseInt(k.css("padding-left")) +
                parseInt(k.css("padding-right")),
              tlHeight:
                k.height() +
                parseInt(k.css("padding-top")) +
                parseInt(k.css("padding-bottom")),
              position: g,
            };
            m(l);
          }
        })
        .on(g, function () {
          $.fn.liteTooltip.removeElem(f);
        });
    });
  }),
    ($.fn.liteTooltip.removeElem = function (b) {
      $("body").find("#tooltip").length > 0 &&
        $("#tooltip")
          .removeClass("animation-" + b.animation)
          .fadeOut(50)
          .remove();
    }),
    ($.fn.liteTooltip.default = {
      space: 20,
      animation: "slide",
      position: "top",
    });
})(jQuery, window, document);
