var gulp = require('gulp');
var minifycss = require('gulp-minify-css');//压缩css
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');//压缩js
var rename = require('gulp-rename');//更改文件名
var del = require('del');
var imagemin = require('gulp-imagemin');//压缩图片

//压缩css
gulp.task('minifycss',function(){
  gulp.src(['static/css/**/*.css','!static/css/**/*.min.css'])
    .pipe(rename({suffix:'.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('static/css/'));
  console.log("css压缩成功");
});

//压缩js
gulp.task('minifyjs',function () {
  gulp.src(['static/js/**/*.js','!static/js/**/*.min.js','!static/js/plug-in/**/*.min.js'])
    // .pipe(concat('main.js'))
    .pipe(rename({suffix:'.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('static/js/'));
  console.log("js压缩成功");
});

//压缩图片
gulp.task('testImagemin',function () {
  gulp.src('static/images/**/*.{png,jpg,gif,ico}')
    .pipe(imagemin({
      optimizationLevel: 7,//优化等级
      progressive: true,//无损压缩jpg
      interlaced: true,//各行扫描gif进行渲染
      multipass: true//多次优化直到svg完全优化
    }))
    .pipe(gulp.dest('static/images/'));
  console.log("img压缩成功");
});

gulp.task('default',function () {
  gulp.start('minifycss','minifyjs','testImagemin');
});

// gulp.watch(['static/css/**/*.css','static/js/**/*.js'],['minifycss','minifyjs']).on('change',function (event) {
//     console.log("压缩启动");
// });
