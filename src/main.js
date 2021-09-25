import Vue from 'vue'
import App from './App.vue'
import 'slick-carousel'
import $ from 'jquery'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

function displayLanguage() {
  // show language
  $('#flag-language').on('click', function () {
    $('#box-language').slideDown();
  })

  // outside click flag change language
  let mouse_is_inside = false;
  $('#box-language').hover(function () {
    mouse_is_inside = true;
  }, function () {
    mouse_is_inside = false;
  });
  $("body").mouseup(function () {
    if (!mouse_is_inside) $('#box-language').slideUp();
  });

  // change language
  $("#flag-vietnam").on('click', function () {
    $('#img-english').hide();
    $('#img-vietnam').show();
    $('#box-language > li').removeClass('active');
    $(this).addClass('active');
  })
  $("#flag-english").on('click', function () {
    $('#img-vietnam').hide();
    $('#img-english').show();
    $('#box-language > li').removeClass('active');
    $(this).addClass('active');
  })

  // mode mobile
  $('#select-language').on('click', function () {
    $('#box-language-mobile').slideDown();
  })

  // change language mobile
  $("#flag-vietnam-mobile").on('click', function () {
    $('#img-english').hide();
    $('#img-vietnam').show();
    $('#box-language-mobile > li').removeClass('active');
    $(this).addClass('active');
  })
  $("#flag-english-mobile").on('click', function () {
    $('#img-vietnam').hide();
    $('#img-english').show();
    $('#box-language-mobile > li').removeClass('active');
    $(this).addClass('active');
  })

  // box select
  let mouse_is_inside_mobile = false;
  $('#box-language-mobile').hover(function () {
    mouse_is_inside_mobile = true;
  }, function () {
    mouse_is_inside_mobile = false;
  });
  $("body").mouseup(function () {
    if (!mouse_is_inside_mobile) $('#box-language-mobile').slideUp();
  });

  $('#show-menu-mobile').on('click', function () {
    $('#menu-mobile').slideDown();
  })
  $('#close-menu, .item-menu a').on('click', function () {
    $('#menu-mobile').slideUp();
  })

  // menu mobile
  let menu_mobile_inside = false;
  $('#menu-mobile').hover(function () {
    menu_mobile_inside = true;
  }, function () {
    menu_mobile_inside = false;
  });
  $("body").mouseup(function () {
    if (!menu_mobile_inside) $('#menu-mobile').slideUp();
  });

}

function scroll() {
  $('#scroll-change').on('click', function () {
    if ($(this).hasClass('active')) {
      $("html, body").animate({ scrollTop: 0 });
    } else {
      $("html, body").animate({ scrollTop: $("#wrapper-test").offset().top - document.body.clientHeight + $("#wrapper-test").height() }, 500);
    }
  })
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > Number(100)) {
      $('#scroll-change').addClass("active");
    } else {
      $('#scroll-change').removeClass("active");
    }
  });

  $('.js-about-us-menu').on('click', function () {
    console.log('aaa')
    const div = document.getElementById('contact-us');
    div.scrollTop = div.scrollHeight - div.clientHeight;
    $("#contact-us").scrollTop(1500);
  })
}

function makeTimer() {

  let endTime = new Date("24 October 2021 24:00:00 GMT+01:00");
  endTime = (Date.parse(endTime) / 1000);

  let now = new Date();
  now = (Date.parse(now) / 1000);

  let timeLeft = endTime - now;

  let days = Math.floor(timeLeft / 86400);
  let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
  let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
  let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

  if (hours < "10") { hours = "0" + hours; }
  if (minutes < "10") { minutes = "0" + minutes; }
  if (seconds < "10") { seconds = "0" + seconds; }

  $(".js-days-number").text(days);
  $(".js-hours-number").text(hours);
  $(".js-minutes-number").text(minutes);
  $(".js-seconds-number").text(seconds);

}

function slickCarousel() {
  $('#slick-games').slick({
    arrows: false,
    slidesToShow: 5,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1007,
        centerMode: true,
        centerPadding: '60px',
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 784,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '40px',
        }
      }
    ]
  });
  $('.slick-left').click(function () {
    $('#slick-games').slick('slickPrev');
  });
  $('.slick-right').click(function () {
    $('#slick-games').slick('slickNext');
  });
}

$(function () {
  setInterval(function () { makeTimer(); }, 1000);
  displayLanguage();
  scroll();
  slickCarousel();
})