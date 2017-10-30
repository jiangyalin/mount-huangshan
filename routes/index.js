
module.exports = function (app) {

    app.get('/',function (req, res) {
        return res.redirect('/index');
    });

    // 首页
    app.get('/index',function (req, res) {
        res.render('index');
    });



};