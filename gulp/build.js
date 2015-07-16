'use strict';

// Import Important Stuff
// ------------------------------

var path  = require('path');
var gulp  = require('gulp');
var conf  = require('./conf');


// Load Plugins
// ------------------------------

var $ = require('gulp-load-plugins')({
  pattern: [
    'gulp-*',               // $.camelCase from gulp-camel-case
    'main-bower-files',     // $.mainBowerFiles
    'uglify-save-license',  // $.uglifySaveLicense
    'del'                   // $.del
  ]
});


// Partials Task
// ------------------------------

gulp.task('partials', function () {
  return gulp.src([
    path.join(conf.paths.src, '/app/**/*.html'),
    path.join(conf.paths.tmp, '/serve/app/**/*.html')
  ])
    .pipe($.minifyHtml({
      empty:  true,
      spare:  true,
      quotes: true
    }))
    .pipe($.angularTemplatecache('templateCacheHtml.js', {
      module: 'poppyGP',
      root:   'app'
    }))
    .pipe(gulp.dest(conf.paths.tmp + '/partials/'));
});


// HTML Task
// ------------------------------

gulp.task('html', ['inject', 'partials'], function () {
  var partialsInjectFile = gulp.src(path.join(conf.paths.tmp, '/partials/templateCacheHtml.js'), { read: false });
  var partialsInjectOptions = {
    starttag: '<!-- inject:partials -->',
    ignorePath: path.join(conf.paths.tmp, '/partials'),
    addRootSlash: false
  };

  var htmlFilter  = $.filter('*.html');
  var jsFilter    = $.filter('**/*.js');
  var cssFilter   = $.filter('**/*.css');
  var assets;

  return gulp.src(path.join(conf.paths.tmp, '/serve/*.html'))
    .pipe($.inject(partialsInjectFile, partialsInjectOptions))
    .pipe(assets = $.useref.assets())
    .pipe($.rev())
    .pipe(jsFilter)
    .pipe($.ngAnnotate())
    .pipe($.uglify({preserveComments: $.uglifySaveLicense })).on('error', conf.errorHandler('Uglify'))
    .pipe(jsFilter.restore())
    .pipe(cssFilter)
    .pipe($.csso())
    .pipe(cssFilter.restore())
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe($.revReplace())
    .pipe(htmlFilter)
    .pipe($.minifyHtml({
      empty:        true,
      spare:        true,
      quotes:       true,
      conditionals: true
    }))
    .pipe(htmlFilter.restore())
    .pipe(gulp.dest(path.join(conf.paths.dist, '/')))
    .pipe($.size({
      title:      path.join(conf.paths.dist, '/'), 
      showFiles:  true 
    }));
});


// Images Task
// ------------------------------

gulp.task('images', function () {
  return gulp.src(path.join(conf.paths.src, '/assets/images/**/*'))
    .pipe($.imagemin({
      optimizationLevel:  3,
      progressive:        true,
      interlaced:         true
    }))
    .pipe(gulp.dest(path.join(conf.paths.dist, '/assets/images/')));
});


// Fonts Task (Bower)
// ------------------------------

gulp.task('fonts', function () {
  return gulp.src($.mainBowerFiles())
    .pipe($.filter('**/*.{eot,svg,ttf,woff,woff2}'))
    .pipe($.flatten())
    .pipe(gulp.dest(path.join(conf.paths.dist, '/fonts/')));
});


// Other Task
// ------------------------------

gulp.task('other', function () {
  var fileFilter = $.filter(function (file) {
    return file.stat.isFile();
  });

  return gulp.src([
    path.join(conf.paths.src, '/**/*'),
    path.join('!' + conf.paths.src, '/**/*.{html,css,js,scss,jpg,png,gif,svg}')
  ])
    .pipe(fileFilter)
    .pipe(gulp.dest(path.join(conf.paths.dist, '/')));
});


// Clean Task
// ------------------------------

gulp.task('clean', function (done) {
  $.del([path.join(conf.paths.dist, '/'), path.join(conf.paths.tmp, '/')], done);
});


// Build Task
// ------------------------------

gulp.task('build', ['html', 'images', 'fonts', 'other']);
