'use strict';

var path        = require('path');
var gulp        = require('gulp');
var conf        = require('./conf');

var browserSync = require('browser-sync');

var $           = require('gulp-load-plugins')();


gulp.task('scripts', function () {

  return gulp.src(path.join(conf.paths.src, '/app/**/*.js'))

    // Lint with with JSHint
    .pipe($.jshint())

    // Format report with JSHint-Stylish
    .pipe($.jshint.reporter('jshint-stylish'))

    // Reload!
    .pipe(browserSync.reload({ stream: true }))

    .pipe($.size())

});
