'use strict';

// Load Modules & Config
// ------------------------------

var path    = require('path');
var gulp    = require('gulp');
var conf    = require('./conf');

var $       = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;
var _       = require('lodash');


/**
 * Gulp Inject Task
 *
 * Injects compiled CSS stylesheet and JS script files into HTML
 *
 * @require scripts 
 * @require styles  
 */

gulp.task('inject', ['scripts', 'styles'], function () {

  // Compiled Stylesheet Files
  var injectStyles = gulp.src([
    path.join(conf.paths.tmp,       '/serve/app/**/*.css'),
    path.join('!' + conf.paths.tmp, '/serve/app/vendor.css')
  ], { 
    read: false 
  });

  // Script Files
  var injectScripts = gulp.src([
    path.join(conf.paths.src,       '/app/**/*.module.js'),
    path.join(conf.paths.src,       '/app/**/*.js'),
    path.join('!' + conf.paths.src, '/app/**/*.spec.js'),
    path.join('!' + conf.paths.src, '/app/**/*.mock.js')
  ])
  .pipe($.angularFilesort()).on('error', conf.errorHandler('AngularFilesort'));

  var injectOptions = {
    ignorePath: [
      conf.paths.src, 
      path.join(conf.paths.tmp, '/serve')
    ],
    addRootSlash: false
  };

  return gulp.src(path.join(conf.paths.src, '/*.html'))
    .pipe($.inject(injectStyles, injectOptions))
    .pipe($.inject(injectScripts, injectOptions))
    .pipe(wiredep(_.extend({}, conf.wiredep)))
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve')));

});
