'use strict';
var gulp = require('gulp');
var options = require('./options.js');
var minifyCSS = require('gulp-minify-css');
function styles() {
    return gulp
        .src(['client/styles/**/*.css'])
        .pipe(minifyCSS())
        .pipe(gulp.dest(options.appOutput));
}


gulp.task('styles', styles);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});