$(function () {

  var x = 0;
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

      var index = Math.abs(x/50);
      // 加载主题类容
      $('.j-mn-gp').find('.j-mn-box').fadeOut(100);
      $('.m-ldg').attr('data-state', 'true');
      $('.j-mn-gp').find('.j-mn-box').eq(index).find('img').each(function() {
        $(this).prop('src', $(this).attr('data-src'));
      });
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

      var index = Math.abs(x/50);
      // 加载主题类容
      $('.j-mn-gp').find('.j-mn-box').fadeOut(100);
      $('.m-ldg').attr('data-state', 'true');
      $('.j-mn-gp').find('.j-mn-box').eq(index).find('img').each(function() {
        $(this).prop('src', $(this).attr('data-src'));
      });
      window.setTimeout(function () {
        $('.j-ldg').attr('data-state', 'false');
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

      var index = Math.abs(x/50);
      // 加载主题类容
      $('.j-mn-gp').find('.j-mn-box').fadeOut(100);
      $('.m-ldg').attr('data-state', 'true');
      $('.j-mn-gp').find('.j-mn-box').eq(index).find('img').each(function() {
        $(this).prop('src', $(this).attr('data-src'));
      });
      window.setTimeout(function () {
        $('.j-ldg').attr('data-state', 'false');
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

      var index = Math.abs(x/50);
      // 加载主题类容
      $('.j-mn-gp').find('.j-mn-box').fadeOut(100);
      $('.j-ldg').attr('data-state', 'true');
      $('.j-mn-gp').find('.j-mn-box').eq(index).find('img').each(function() {
        $(this).prop('src', $(this).attr('data-src'));
      });
      window.setTimeout(function () {
        $('j-ldg').attr('data-state', 'false');
        $('.j-mn-gp').find('.j-mn-box').eq(Math.abs(x/50)).fadeIn(100);
        $('.j-ban').removeClass('s-ban-active');
        $('.j-mn-gp').removeClass('s-mn-gp-active');
      }, 600);
    }
  });

  // 上拉下滑
  document.addEventListener('touchmove', function (e) {
    var y = e.changedTouches[0].pageY - e.changedTouches[0].clientY;
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

  // 返回顶部
  $('.j-return-top').hammer().bind('tap', function () {
    $(window).scrollTop(0);
  });

  // 进入详情
  $('.j-g-mn-1').find('a').hammer().bind("tap", function () {
    $('.j-loading').fadeIn(300);
    $('.j-ldg').attr('data-state', 'true');
    $('.j-g-mn-1').fadeOut(300);

    // 加载ban
    for (var i = 0; i < $('.j-ban').find('.j-list').find('.j-li').length; i++) {
      var src = $('.j-ban').find('.j-list').find('.j-li').eq(i).find('.j-img').attr('data-src');
      $('.j-ban').find('.j-list').find('.j-li').eq(i).find('.j-img').prop('src', src);
    }
    document.getElementById('img-ban').onload = function () {
      $('.j-loading').fadeOut(300);
    };

    var index = $(this).parents('.j-li').index();

    // 切换指定ban
    x = -index * 50;
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

    // 加载主题类容
    $('.j-mn-gp').find('.j-mn-box').eq(index).find('img').each(function() {
      $(this).prop('src', $(this).attr('data-src'));
    });
    window.setTimeout(function () {
      $('body').css({
        'overflow': 'auto',
        'height': 'auto'
      });
      $('.j-ldg').attr('data-state', 'false');
      $('.j-mn-gp').find('.j-mn-box').eq(index).fadeIn(100);
      $('.j-ban').removeClass('s-ban-active');
      $('.j-mn-gp').removeClass('s-mn-gp-active');
    }, 600);

  });

  // 返回
  $('.j-arrow-gp').hammer().bind("tap", function () {
    $('.j-loading').fadeIn(300);
    window.setTimeout(function () {
      $('.j-loading').fadeOut(300);
      $('body').css({
        'overflow': 'hidden',
        'height': '100%'
      });
      $('.j-g-mn-1').fadeIn(300);
    }, 300);
  });

});