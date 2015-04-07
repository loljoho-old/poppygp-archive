/* jshint camelcase:false */
var gulp        = require('gulp');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');
var reload      = browserSync.reload;
var $           = require('gulp-load-plugins')({lazy:true});

var cfg         = require('./package.json');
var paths       = require('./gulp.config.json');

/**
 * Lint JavaScript
 */
gulp.task('lint', function() {
    return gulp
        .src(paths.js)
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'))
        .pipe($.if(!browserSync.active, $.jshint.reporter('fail')))
        .pipe(reload({stream: true, once: true}));
});

/**
 * Compile/Inject Sass
 */
gulp.task('sass', function() {
    return gulp
        .src(paths.sass)
        .pipe($.sass())
        .pipe(gulp.dest(paths.build.css))
        .pipe(reload({stream: true}));
});

/**
 * Serve with BrowserSync
 */
gulp.task('serve', function() {

    browserSync({
        server: ['./client'],   //, './server'],
        notify: false,
        reloadDelay: 1000
    });
});


/**
 * Watch files, build and reload.
 */
gulp.task('watch', ['sass', 'lint'], function() {


    gulp
        .watch(paths.html)
        .on('change', reload);

    gulp
        .watch(paths.sass, ['sass']);

    gulp
        .watch(paths.js, ['lint'])
        .on('change', reload);
});

/**
 * Default Task
 */
gulp.task('default', ['serve', 'watch']);