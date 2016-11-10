/**
 * Created by os-huzp on 2016/11/7.
 */
//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
    less = require('gulp-less'),
    cssmin=require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps');

//定义一个testLess任务（自定义任务名称）
gulp.task('testLess', function () {
    gulp.src(['src/**/*.less','!src/1.less']) //该任务针对的文件
        .pipe(sourcemaps.init())
        .pipe(less()) //该任务调用的模块
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('src')); //将会在src/css下生成index.css
});
gulp.task('testWatch',function () {
    gulp.watch('src/**/*.less',['testLess']);
})
gulp.task('default',['testLess','testWatch']); //定义默认任务 elseTask为其他任务，该示例没有定义elseTask任务

//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组)
//gulp.dest(path[, options]) 处理完后文件生成路径