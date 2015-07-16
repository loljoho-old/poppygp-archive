

var gutil = require('gulp-util');

/**
 * This section defines all project paths and globbing patterns
 *  necesary for Gulp tasks and build processes.
 *
 */

// Main Project Paths
// ------------------------------

exports.paths = {
  src:  'src',    // source code directory
  dist: 'dist',   // build destination
  tmp:  '.tmp',   // temporary files
  e2e:  'e2e'     // end-to-end testing
};


// Main Project Files
// ------------------------------
exports.files = {
  html: 'index.html',
  scss: 'index.scss',
  js:   'index.module.js'
};

// Gulp Task Folders/Subpaths
// ------------------------------
// exports.subpaths = {};


// Gulp Task Globbing Patterns
// ------------------------------
// exports.globs = {};


// Wiredep & Inject Configuration
// ------------------------------

exports.wiredep = {
  //exclude: [/foundation\.js/, /foundation\.css/],
  directory: 'bower_components'
};


// Common Error Handler
// ------------------------------

exports.errorHandler = function(title) {
  'use strict';
  return function(err) {
    gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
    this.emit('end');
  };
};
