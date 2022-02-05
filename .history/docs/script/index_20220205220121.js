console.clear();

// 메인페이지 사진 변경 슬라이드
jQuery(document).ready(function() {
  var SlideNumber = 0;
  setInterval(function() {
  $('.slide-container').attr('data-index', ++SlideNumber % 3);
  }, 3000);
});

// form 연락망
function sendEmailForm(form) {
  if ( form._replyto.value.length == 0 ) {
    alert('이메일 주소를 입력해주세요!');
    form._replyto.focus();
    return;
  }
  
  if ( form.message.value.length == 0 ) {
    alert('메세지를 입력해주세요!');
    form.message.focus();
    return;
  }
  
  form.submit();
  
  form._replyto.value = '';
  form.message.value = '';
  form.submit1.innerHTML = 'Completed';
  form.submit1.disabled = true;
}

// 로딩화면
$("body").imagesLoaded(function () {
  // 이 부분을 0으로 바뀌면 로딩화면이 안보일 때가 있습니다. 억지로라도 로딩화면을 보여주려면 이 부분을 남겨두세요. 500이 적당합니다.
  const fakeLoadingMilliSeconds = 2000;
  setTimeout(function () {
    Fullpage__init();
    $(".loading").remove();
  }, fakeLoadingMilliSeconds);
});

// 조절가능
let chart1AllowRerender = true;
// 건들지 마시오
let chart1Rendered = false;

// 풀페이지
function Fullpage__init() {
  new fullpage('#fullpage', {
    scrollOverflow: false,
    verticalCentered: false,
    css3: false,
    navigation: true,
    scrollingSpeed: 1000,
    //텍스트 커서 잡히게 함
    scrollOverflowOptions: {
      preventDefault: false
    },
    menu: ".top-bar .menu-box-1 > ul",
    // circle chart 애니메이션
    afterLoad: function (ignored, destination) {
      if (destination.anchor == 'section-3') {

        if (chart1AllowRerender) {
          $(".chart-1").circleProgress({
            value: 1
          });
        } else {
          if (chart1Rendered == false) {
            $(".chart-1").circleProgress({
              value: 1
            });
            chart1Rendered = true;
          }
        }
        if (chart1AllowRerender) {
          $(".chart-2").circleProgress({
            value: 0.9
          });
        } else {
          if (chart1Rendered == false) {
            $(".chart-2").circleProgress({
              value: 0.9
            });
            chart1Rendered = true;
          }
        }
        if (chart1AllowRerender) {
          $(".chart-3").circleProgress({
            value: 0.8
          });
        } else {
          if (chart1Rendered == false) {
            $(".chart-3").circleProgress({
              value: 0.8
            });
            chart1Rendered = true;
          }
        }
        if (chart1AllowRerender) {
          $(".chart-4").circleProgress({
            value: 0.6
          });
        } else {
          if (chart1Rendered == false) {
            $(".chart-4").circleProgress({
              value: 0.6
            });
            chart1Rendered = true;
          }
        }
      } else {
        if (chart1AllowRerender) {
          $(".chart").circleProgress({
            value: 0
          });
        }
      }
    },
  });

  $(".chart-1")
    .circleProgress({
      startAngle: -Math.PI / 2,
      reverse: true,
      value: 0,
      lineCap: 'round',
      thickness: 15,
      fill: {
        gradient: ['#000']
      }
    })
    .on(
      "circle-animation-progress",
      function (event, progress, stepValue) {
        $(this).find("strong").text(parseInt(stepValue * 100) + '%');
      }
    );
  $(".chart-2")
    .circleProgress({
      startAngle: -Math.PI / 2,
      reverse: true,
      value: 0,
      lineCap: 'round',
      thickness: 15,
      fill: {
        gradient: ['#000']
      }
    })
    .on(
      "circle-animation-progress",
      function (event, progress, stepValue) {
        $(this).find("strong").text(parseInt(stepValue * 100) + '%');
      }
    );
  $(".chart-3")
    .circleProgress({
      startAngle: -Math.PI / 2,
      reverse: true,
      value: 0,
      lineCap: 'round',
      thickness: 15,
      fill: {
        gradient: ['#000']
      }
    })
    .on(
      "circle-animation-progress",
      function (event, progress, stepValue) {
        $(this).find("strong").text(parseInt(stepValue * 100) + '%');
      }
    );
  $(".chart-4")
    .circleProgress({
      startAngle: -Math.PI / 2,
      reverse: true,
      value: 0,
      lineCap: 'round',
      thickness: 15,
      fill: {
        gradient: ['#000']
      }
    })

    .on(
      "circle-animation-progress",
      function (event, progress, stepValue) {
        $(this).find("strong").text(parseInt(stepValue * 100) + '%');
      }
    );

  // 기존 섹션을 다시 활성화 하여, 최초에도 애니메이션이 발동 하도록
  const $current = $('#fullpage .section.fp-section.active');
  $current.removeClass('active');
  setTimeout(function () {
    $current.addClass('active');
  });
}

// 메인화면 마우스움직임 효과
function MainMouseMoveEffect() {

  const $window = $(window);

  let windowWidth = $window.width();
  let windowHeight = $window.height();

  $window.resize(_.throttle(function () {
    windowWidth = $window.width();
    windowHeight = $window.height();
  }, 100));

  $window.resize(_.throttle(function () {
    MousemoveEffect1__update();
  }, 100));

  let MousemoveEffect1__$el = null;
  let MousemoveEffect1__lastPosX = 0;
  let MousemoveEffect1__lastPosY = 0;

  function MousemoveEffect1__update() {
    MousemoveEffect1__$el.each(function (index, node) {
      const $node = $(node);
      const horRes = $node.data('data-mousemove-effect1-hor-res');
      const verRes = $node.data('data-mousemove-effect1-ver-res');

      const x = (MousemoveEffect1__lastPosX - (windowWidth / 2)) * horRes;
      const y = (MousemoveEffect1__lastPosY - (windowHeight / 2)) * verRes;
      $(node).css('transform', 'translateX(' + x + 'px) translateY(' + y + 'px)');
    });
  }

  function MousemoveEffect1__init() {
    MousemoveEffect1__$el = $('.mousemove-effect-1-el');

    MousemoveEffect1__$el.each(function (index, node) {
      const $node = $(node);
      $node.data('data-mousemove-effect1-hor-res', $node.attr('data-mousemove-effect1-hor-res') * 1);
      $node.data('data-mousemove-effect1-ver-res', $node.attr('data-mousemove-effect1-ver-res') * 1);
    });

    const MousemoveEffect1__updateThrottled = _.throttle(function () {
      MousemoveEffect1__update();
    }, 10);

    $window.mousemove(function (e) {
      MousemoveEffect1__lastPosX = e.clientX;
      MousemoveEffect1__lastPosY = e.clientY;

      MousemoveEffect1__updateThrottled();
    });
  }

  MousemoveEffect1__init();
};
MainMouseMoveEffect();


//포트폴리오 스와이퍼 슬라이드
function PortfolioSlider__init() {
  const swiper = new Swiper('.pf-slide .swiper-container', {
    loop: true,
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
    on: {
      slideChange: function () {
        $('.pf-slide').attr('data-swiper-slide-index', this.realIndex);
      }
    }
  });
}
PortfolioSlider__init();


//아트웍 스와이퍼 슬라이드
function ArtworkSlider__init() {
  const swiper = new Swiper('.aw-slide .swiper-container', {
    slidesPerView: 4.5,
    spaceBetween: 50,
    loop: false,
    autoplay: { delay: 1500, },
    on: {
      slideChange: function () {
        $('.aw-slide').attr('data-swiper-slide-index', this.realIndex);
      }
    }
  });
}
ArtworkSlider__init();

// process popup
function Popup__init() {
  $('.h-process-btn').click(function() {
    $('html, body').addClass('active');
    $('.popup').addClass('active');
  });

  $('.popup-close-btn').click(function() {
    $('.popup').removeClass('active');
    $('html').removeClass('active');
  });

  $('.popup').click(function() {
    $('.popup').removeClass('active');
  });

  $('.popup-content').click(function() {
    return false;
  });
}
Popup__init();