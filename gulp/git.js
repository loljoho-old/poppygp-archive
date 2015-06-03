/*
'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();


var paths = {
    scripts       : ['src/*.js'],
    versionToBump : ['./package.json'],
    versionToCheck: 'package.json',
    dest          : './'
}

module.exports = function(options) {

  function inc(importance, isCommitted) {

    var bumpFiles = 
    // files in which version numbers are to be incremented
    var process = gulp.src(paths.versionToBump) // get all the files to bump version in
      .pipe($.prompt.confirm('Have you commited all the changes to be included by this version?'));

    if(isCommitted === true) {
      process.pipe($.prompt.confirm('Are you sure?'));
    }

    process.pipe($.bump({type: importance}))        // bump the version number in those files
      .pipe(gulp.dest(paths.dest))                  // save it back to filesystem
      .pipe($.git.commit('bumps package version'))  // commit the changed version number
      .pipe($.filter(paths.versionToCheck))         // read only one file to get the version number
      .pipe($.tagVersion())                         // tag it in the repository 
      .pipe($.git.push('origin', 'master', { args: '--tags' })) // push the tags to master
  }

  gulp.task('patch', function() {
    return inc('patch');
  });
  gulp.task('feature', function() {
    return inc('minor');
  });
  gulp.task('release', function() {
    return inc('major', true);
  });
};
*/