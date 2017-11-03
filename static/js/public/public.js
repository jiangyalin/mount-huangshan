$(function () {
    
    $('html').height(window.innerHeight);
    
    Main();

    // 返回上一页
    $('.j-return').hammer().bind("tap", function () {
        window.history.go(-1);
    });

    function Main() {
        $('.j-loading').fadeOut(300);
    }

});

window.addEventListener('pageshow', function(e) {
    // 通过persisted属性判断是否存在 BF Cache
    if (e.persisted) {
        location.reload();
    }
});