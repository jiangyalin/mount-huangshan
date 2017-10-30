const path = require('path');
const express = require('express');
const app = express();
const session = require('express-session');
const pkg = require('./package');
const routes = require('./routes/');
const config = require('./config/default');

app.set('views',path.join(__dirname,'views'));
app.engine('html',require('ejs').renderFile); // 设置模板后缀名为.html
app.set('view engine','html');

app.use(express.static(path.join(__dirname,'static')));

app.locals.blog = {
    title: pkg.name,
    description: pkg.description
};

routes(app);

app.listen(config.port,function () {
    console.log('服务启动'+config.port);
});

