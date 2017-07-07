/**
 * Created by yanma on 17-7-5.
 */

var gulp = require('gulp');
var less = require('gulp-less');
gulp.task('default',function () {
         gulp.src('index.less')
        .pipe(less())
        .pipe(gulp.dest('dist/'));
});