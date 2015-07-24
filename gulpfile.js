
'use strict';

var gulp    = require('gulp');
var wrench  = require('wrench');

/**
 * Load all task and configuration files from `gulp/` with 
 *  `js` or`json` extensions
 */
wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js|json)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file);
});


/**
 * Clean temp directories and build project
 */
gulp.task('default', ['clean'], function () {
  gulp.start('build');
});


/* 

// Run PageSpeed Insights
gulp.task('pagespeed', cb => {
  // Update the below URL to the public URL of your site
  pagespeed('example.com', {
    strategy: 'mobile',
    // By default we use the PageSpeed Insights free (no API key) tier.
    // Use a Google Developer API key if you have one: http://goo.gl/RkN0vE
    // key: 'YOUR_API_KEY'
  }, cb);
});

*/