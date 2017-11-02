$(function () {

  var x = 0;
  var bodyWidth = $('body').width();
  var color = ['3e693f', '164a72', '4794c6', 'dbd072'];
  $('body').hammer().bind("swipeleft", function () {
    if (Math.abs(x/50) < 3) {
      x = x - 50;
      for (var i = 0; i < $('.j-list').find('.j-li').length; i++) {
        $('.j-list').find('.j-li').eq(i).attr('data-x', x + 50 * i);
        $('.j-text').find('.j-ban-tt').eq(i).attr('data-x', x + 50 * i);
      }
      $('.j-list').css('background-color', '#'+color[Math.abs(x/50)]);
      $('.j-list').find('.j-li').eq(Math.abs(x/50)).addClass('s-li-active')
        .siblings().removeClass('s-li-active');
      $('.j-text').find('.j-ban-tt').eq(Math.abs(x/50)).addClass('s-ban-tt-active')
        .siblings().removeClass('s-ban-tt-active');
      $('.j-page').find('.j-li').eq(Math.abs(x/50)).addClass('s-pe-active')
        .siblings().removeClass('s-pe-active');

      $('.j-mn-gp').find('.j-mn-box').fadeOut(100);
      $('.m-ldg').attr('data-state', 'true');
      window.setTimeout(function () {
        $('.m-ldg').attr('data-state', 'false');
        $('.j-mn-gp').find('.j-mn-box').eq(Math.abs(x/50)).fadeIn(100);
        $('.j-ban').removeClass('s-ban-active');
        $('.j-mn-gp').removeClass('s-mn-gp-active');
      }, 600);
    }
  });

  $('body').hammer().bind("swiperight", function () {
    if (0 < Math.abs(x/50)) {
      x = x + 50;
      for (var i = 0; i < $('.j-list').find('.j-li').length; i++) {
        $('.j-list').find('.j-li').eq(i).attr('data-x', x + 50 * i);
        $('.j-text').find('.j-ban-tt').eq(i).attr('data-x', x + 50 * i);
      }
      $('.j-list').css('background-color', '#' + color[Math.abs(x / 50)]);
      $('.j-list').find('.j-li').eq(Math.abs(x / 50)).addClass('s-li-active')
        .siblings().removeClass('s-li-active');
      $('.j-text').find('.j-ban-tt').eq(Math.abs(x / 50)).addClass('s-ban-tt-active')
        .siblings().removeClass('s-ban-tt-active');
      $('.j-page').find('.j-li').eq(Math.abs(x/50)).addClass('s-pe-active')
        .siblings().removeClass('s-pe-active');

      $('.j-mn-gp').find('.j-mn-box').fadeOut(100);
      $('.m-ldg').attr('data-state', 'true');
      window.setTimeout(function () {
        $('.m-ldg').attr('data-state', 'false');
        $('.j-mn-gp').find('.j-mn-box').eq(Math.abs(x/50)).fadeIn(100);
        $('.j-ban').removeClass('s-ban-active');
        $('.j-mn-gp').removeClass('s-mn-gp-active');
      }, 600);
    }
  });

  $('.j-bg-fr').click(function () {
    if (Math.abs(x/50) < 3) {
      x = x - 50;
      for (var i = 0; i < $('.j-list').find('.j-li').length; i++) {
        $('.j-list').find('.j-li').eq(i).attr('data-x', x + 50 * i);
        $('.j-text').find('.j-ban-tt').eq(i).attr('data-x', x + 50 * i);
      }
      $('.j-list').css('background-color', '#'+color[Math.abs(x/50)]);
      $('.j-list').find('.j-li').eq(Math.abs(x/50)).addClass('s-li-active')
        .siblings().removeClass('s-li-active');
      $('.j-text').find('.j-ban-tt').eq(Math.abs(x/50)).addClass('s-ban-tt-active')
        .siblings().removeClass('s-ban-tt-active');
      $('.j-page').find('.j-li').eq(Math.abs(x/50)).addClass('s-pe-active')
        .siblings().removeClass('s-pe-active');

      $('.j-mn-gp').find('.j-mn-box').fadeOut(100);
      $('.m-ldg').attr('data-state', 'true');
      window.setTimeout(function () {
        $('.m-ldg').attr('data-state', 'false');
        $('.j-mn-gp').find('.j-mn-box').eq(Math.abs(x/50)).fadeIn(100);
        $('.j-ban').removeClass('s-ban-active');
        $('.j-mn-gp').removeClass('s-mn-gp-active');
      }, 600);
    }
  });

  $('.j-bg-fl').click(function () {
    if (0 < Math.abs(x/50)) {
      x = x + 50;
      for (var i = 0; i < $('.j-list').find('.j-li').length; i++) {
        $('.j-list').find('.j-li').eq(i).attr('data-x', x + 50 * i);
        $('.j-text').find('.j-ban-tt').eq(i).attr('data-x', x + 50 * i);
      }
      $('.j-list').css('background-color', '#' + color[Math.abs(x / 50)]);
      $('.j-list').find('.j-li').eq(Math.abs(x / 50)).addClass('s-li-active')
        .siblings().removeClass('s-li-active');
      $('.j-text').find('.j-ban-tt').eq(Math.abs(x / 50)).addClass('s-ban-tt-active')
        .siblings().removeClass('s-ban-tt-active');
      $('.j-page').find('.j-li').eq(Math.abs(x/50)).addClass('s-pe-active')
        .siblings().removeClass('s-pe-active');

      $('.j-mn-gp').find('.j-mn-box').fadeOut(100);
      $('.m-ldg').attr('data-state', 'true');
      window.setTimeout(function () {
        $('.m-ldg').attr('data-state', 'false');
        $('.j-mn-gp').find('.j-mn-box').eq(Math.abs(x/50)).fadeIn(100);
        $('.j-ban').removeClass('s-ban-active');
        $('.j-mn-gp').removeClass('s-mn-gp-active');
      }, 600);
    }
  });
  // var banHammer = new Hammer(document.getElementsByClassName("j-ban")[0]);
  // banHammer.on("tap", function (e) {
  //   console.log('ddd')
  //   if (e.center.x > bodyWidth / 2 && Math.abs(x/50) < 3) {
  //     x = x - 50;
  //   } else if (e.center.x < bodyWidth / 2 &&0 < Math.abs(x/50)) {
  //     x = x + 50;
  //   }
  //   for (var i = 0; i < $('.j-list').find('.j-li').length; i++) {
  //     $('.j-list').find('.j-li').eq(i).attr('data-x', x + 50 * i);
  //     $('.j-text').find('.j-ban-tt').eq(i).attr('data-x', x + 50 * i);
  //   }
  //   $('.j-list').css('background-color', '#' + color[Math.abs(x / 50)]);
  //   $('.j-list').find('.j-li').eq(Math.abs(x / 50)).addClass('s-li-active')
  //     .siblings().removeClass('s-li-active');
  //   $('.j-text').find('.j-ban-tt').eq(Math.abs(x / 50)).addClass('s-ban-tt-active')
  //     .siblings().removeClass('s-ban-tt-active');
  //   $('.j-page').find('.j-li').eq(Math.abs(x/50)).addClass('s-pe-active')
  //     .siblings().removeClass('s-pe-active');
  //
  //   $('.j-mn-gp').find('.j-mn-box').fadeOut(100);
  //   $('.m-ldg').attr('data-state', 'true');
  //   window.setTimeout(function () {
  //     $('.m-ldg').attr('data-state', 'false');
  //     $('.j-mn-gp').find('.j-mn-box').eq(Math.abs(x/50)).fadeIn(100);
  //     $('.j-ban').removeClass('s-ban-active');
  //     $('.j-mn-gp').removeClass('s-mn-gp-active');
  //   }, 600);
  // });

  document.addEventListener('touchmove', function (e) {
    var y = e.changedTouches[0].pageY - e.changedTouches[0].clientY;
    // console.log(y);
    if (y > 0) {
      window.setTimeout(function () {
        $('html').css('overflow', 'auto');
      }, 300);
      $('.j-ban').addClass('s-ban-active');
      $('.j-mn-gp').addClass('s-mn-gp-active');
    }
    if (y == 0) {
      $('.j-ban').removeClass('s-ban-active');
      $('.j-mn-gp').removeClass('s-mn-gp-active');
    }
  }, false);
  
  $('.j-return-top').hammer().bind('tap', function () {
    $(window).scrollTop(0);
  });

  // var hammertime = new Hammer(document.getElementsByClassName("g-body")[0]);
  // var index = 0;
  // hammertime.on("panstart", function (e) {
  //   index = x / 50;
  //   $('.j-list').find('.j-li').css('transition', '0s');
  //   $('.j-list').find('.j-img').css('transition', '0s');
  // });
  //
  // hammertime.on("panleft", function (e) {
  //   x = -e.distance / bodyWidth * 50 + 50 * index;
  //   for (var i = 0; i < $('.j-list').find('.j-li').length; i++) {
  //     if (Math.abs(index) + 1 === i) {
  //       $('.j-list').find('.j-li').eq(i).css({
  //         'transform': 'translateX(' + (x + 50 * i) + '%)',
  //         'opacity': e.distance / bodyWidth
  //       });
  //       $('.j-list').find('.j-li').eq(i).find('.j-img')
  //         .css('transform', 'scale(' + (e.distance / bodyWidth * 0.5 + 0.5) + ')');
  //       $('.j-text').find('.j-tt').eq(i).css('transform', 'translateX(' + (x + 50 * i) + '%)');
  //     } else {
  //       $('.j-list').find('.j-li').eq(i).css({
  //         'transform': 'translateX(' + (x + 50 * i) + '%)',
  //         'opacity': 1 - (e.distance / bodyWidth)
  //       });
  //       $('.j-list').find('.j-li').eq(i).find('.j-img')
  //         .css('transform', 'scale(' + (1 - e.distance / bodyWidth * 0.5) + ')');
  //       $('.j-text').find('.j-tt').eq(i).css('transform', 'translateX(' + (x + 50 * i) + '%)');
  //     }
  //   }
  // });
  // hammertime.on("panend", function (e) {
  //   var date = 0.3 * Math.abs((Math.round(x / 50) * 50 - (x / 50) * 50) / 50);
  //   x = Math.round(x / 50) * 50;
  //   $('.j-list').find('.j-li').css('transition', date + 's');
  //   $('.j-list').find('.j-img').css('transition', date + 's');
  //   var thisIndex = 0;
  //   if (e.distance > (bodyWidth / 2)) {
  //     thisIndex = Math.abs(index) + 1;
  //   } else {
  //     thisIndex = Math.abs(index);
  //   }
  //   for (var i = 0; i < $('.j-list').find('.j-li').length; i++) {
  //     if (thisIndex === i) {
  //       $('.j-list').find('.j-li').eq(i).css('opacity', '1');
  //       $('.j-list').find('.j-li').eq(i).find('.j-img')
  //         .css('transform', 'scale(1)');
  //     } else {
  //       $('.j-list').find('.j-li').eq(i).css('opacity', '0');
  //       $('.j-list').find('.j-li').eq(i).find('.j-img')
  //         .css('transform', 'scale(0.5)');
  //     }
  //     $('.j-list').find('.j-li').eq(i).css('transform', 'translateX(' + (x + 50 * i) + '%)');
  //     $('.j-text').find('.j-tt').eq(i).css('transform', 'translateX(' + (x + 50 * i) + '%)');
  //   }
  // });

});