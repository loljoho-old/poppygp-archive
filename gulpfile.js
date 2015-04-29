/* jshint camelcase:false */
var gulp        = require('gulp');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');
var reload      = browserSync.reload;
var $           = require('gulp-load-plugins')({lazy:true});
var paths       = require('./gulp.config.json');

/**
 * Lint JavaScript
 */
gulp.task('lint', function() {
    return gulp
        .src(paths.js)
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'))
        .pipe($.if(!browserSync.active, $.jshint.reporter('fail')));
});

/**
 * Compile/Inject Sass
 */
gulp.task('sass', function() {
    return gulp
        .src(paths.sass)
        .pipe($.sass())
        .pipe(gulp.dest(paths.css));
});

/**
 * Serve with BrowserSync
 */
gulp.task('serve', function() {

    browserSync({
        server: ['./client'],
        notify: false,
        reloadDelay: 1500
    });
});


/**
 * Watch files, build and reload.
 */
gulp.task('watch', ['sass', 'lint'], function() {

    gulp.watch(paths.html, reload);
    gulp.watch(paths.sass, ['sass', reload]);
    gulp.watch(paths.js, ['lint', reload]);
});

/**
 * Default Task
 */
gulp.task('default', ['serve', 'watch']);