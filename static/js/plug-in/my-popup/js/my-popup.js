var myPopup = (function () {

    function init(object) {
        var title = object.title || '标题';
        var confirm = object.onClickConfirmBtn || function () {}; // 确定按钮回调事件
        var cancel = object.onClickCancelBtn || function () {}; // 取消按钮回调事件
        var closeBtnShow = object.closeBtnShow || 'true'; // 是否显示取消按钮
        var closeBtnDom = '<button class="u-btn j-cancel" type="button">取消</button>';
        if (closeBtnShow == 'false') closeBtnDom = '';
        $('body').append('<section class="m-popup j-popup">' +
            '<div class="u-mn">' +
            '<h1 class="u-tt">' + title + '</h1>' +
            '<div class="u-btn-gp">' +
            closeBtnDom +
            '<button class="u-btn j-confirm" type="button">确定</button>' +
            '</div>' +
            '</div>' +
            '</section>');
        window.setTimeout(function () {
            $('.j-popup').attr('state','true');
        }, 1);
        $('.j-popup').find('.j-confirm').click(function () {
            $('.j-popup').remove();
            confirm();
        });
        $('.j-popup').find('.j-cancel').click(function () {
            $('.j-popup').remove();
            cancel();
        });
    }

    return {
        init: init
    }

})();