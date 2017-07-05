/**
 * Created by yanma on 17-7-5.
 */

var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var cssmin = require('gulp-minify-css');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var browserify = require('gulp-browserify');
gulp.task('default',function () {
    return gulp.src('index.less')
        .pipe(less())
        .pipe(concat('index.css'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Safari >0', 'Explorer >0', 'Edge >0', 'Opera >0', 'Firefox >=20'],
            cascade: true,
            remove: true
        }))
        .pipe(browserify({insertGlobals : true,
            debug : !gulp.env.production}))
        .pipe(gulp.dest('dist/'));
});