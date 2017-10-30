// 提示信息插件
var TextTips = (function () {
    var init = function (text) {
        $('body').children('.u-text-tips[data-text-tips]').fadeOut(50);
        window.setTimeout(function () {
            $('body').children('.u-text-tips[data-text-tips]').eq(0).remove();
        }, 2950);
        $('body').append('<section class="u-text-tips" data-text-tips="false">' +
            '<span class="u-text">' + text + '</span>' +
            '</section>');
    };

    return {
        init: init
    }

})();

$(function () {
    
    $('html').height(window.innerHeight);
    
    Main();

    // 返回上一页
    $('.j-return').hammer().bind("tap", function () {
        window.history.go(-1);
    });

    // 关闭弹窗
    $('.j-btn-close').hammer().bind("tap", function () {
        $(this).parents('.j-modal').attr('data-switch','false');
    });

    // 链接跳转
    $('body').on('click','[data-to]',function () {
        if($(this).attr('data-to') != 'false') window.location.href = $(this).attr('data-to');
    });

    function Main() {
        $('.j-loading').fadeOut(300);
    }

    // $('.g-hd').click(function () {
    //     myPopup.init({
    //         title: '这是标题',
    //         onClickConfirmBtn: function () {
    //             console.log('确定');
    //         },
    //         onClickCancelBtn: function () {
    //             console.log('取消');
    //         },
    //         closeBtnShow: 'false'
    //     })
    // });

});

window.addEventListener('pageshow', function(e) {
    // 通过persisted属性判断是否存在 BF Cache
    if (e.persisted) {
        location.reload();
    }
});