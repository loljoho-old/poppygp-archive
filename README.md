poppyGP
=======

[![Build Status](//travis-ci.org/travis-ci/travis-web.svg?branch=lp-no-builds)](//travis-ci.org/travis-ci/travis-web)

> A community-centered video stream and webchat single-page AngularJS web application





## Overview

__poppyGP__ is a community-centered, single-page, video stream and webchat application built with [AngularJS][ng].  It features a Sass-styled bespoke cross-platform, cross-browser, mobile-first, responsive UI/UX based on the [Angular-Material][ngMaterial] implementation.


## Development Tools


 * [Node.js][node] provides the environment in which application development is done
 * [npm][npm] manages development tool dependencies
 * [Bower][bower] is used to manage front-end dependencies including Angular modules, Javascript libraries, icon fonts, etc
 * [Gulp.js][gulp] * streaming build system and workflow automation

*After the __1.0.0__ release, I adopted a number of [best practices and recommendations][dev-psi] to improve performance and further streamline workflow, which was accomplished with the tools listed below.*

 * [Yeoman][yo] scaffolding tool to restructure the application
 * Full-featured [Gulp][gulp] capabilities provided by [generator-gulp-angular][gulp-ng]:
   * Improved `serve` and `watch` tasks over my pre-existing [Browser-Sync][bs] setup
   * Automated `index.html` injection of Bower dependencies, project stylesheets, and Javascript files
   * A vastly superior `build` system including:
     * AngularJS-specific automation with `gulp` plugins:
       * `angular-templatecache`
       * `angular-filesort`
       * `ng-annotate`
     * Bower dependencies handled with `main-bower-files` plugins
     * Static asset revisioning à la `gulp-rev` plugin
     * Improved `scss` compilation and `css` optimisation
     * Improved `js` code linting, optimisation, and minification
 * Automated testing and continuous integration (__work in progress__)
   * [Travis-CI][travis] continuous integration
   * [Protractor][protractor] end-to-end testing
   * [Karma][karma] unit testing


## Front-End UI/UX Components

__AngularJS & Modules__

 * [AngularJS 1.4.x][ng] * Javascript application framework
   * Angular-Animate
   * Angular-Aria
   * Angular-Resource
   * Angular-Sanitize
   * ~~Angular-Touch~~
 * [Angular-Material][ngMaterial] * official Angular implementation of Google's [Material design specification][md]
 * [Angular-XML][ngXML] * module supplying [X2JS][x2js] for XML to JSON conversion
 * [AngularFire][ngFire] * module for interaction with [Firebase][firebase] realtime cloud database
 * ~~[Angular-UI-Router][ui-router] * third-party Angular routing module~~


 __JS Libraries__

 * [Moment.js][moment] * Javascript library for date/time parsing
 * [Modernizr][modernizr] * Javascript library for HTML5/CSS3 browser feature detection
 * [lodash][lodash] * Javascript utility library


__Fonts, Icons, etc.__

 * [Google Fonts][gfont] * provides the [Source Sans Pro][sourcesanspro] font face
 * [Font-Awesome][fa] * icon library and font toolkit
 * [Ionicons][ion] * icon library for [Ionic Framework][ionic]
 * [Material Design Icons][mdIcons] * icon library for Material Design



## Contributing

Due to a considerable dearth in willing and qualified developers in the community, this section has not yet been written.

Kindly send me a message if you're interested in contributing--I'd love the help!



[ng]://angularjs.org
[ngMaterial]://material.angularjs.org/
[md]://google.com/design/spec/material-design/introduction.html
[ngXML]://github.com/johngeorgewright/angular-xml
[ngFire]:firebase.com/docs/web/libraries/angular/
[x2js]://code.google.com/p/x2js/
[ui-router]://github.com/angular-ui/ui-router
[moment]://momentjs.com
[ion]://ionicons.com
[mdIcons]://google.com/design/icons/
[ionic]://ionicframework.com/
[design-ms]://dev.windows.com/en-us/design
[gulp]://gulpjs.com/
[sass]://sass-lang.com
[firebase]://firebase.com
[modernizr]://modernizr.com/
[gfont]:google.com/fonts/
[sourcesanspro]://www.google.com/fonts/specimen/Source+Sans+Pro
[lodash]://lodash.com
[yo]://yeoman.io
[gulp-ng]://github.com/Swiip/generator-gulp-angular
[node]://nodejs.org
[npm]://npmjs.com
[bower]://bower.io
[fa]://fortawesome.github.io/Font-Awesome/
[git]://git-scm.com/
[bs]://browsersync.io

[dev-psi]://developers.google.com/speed/docs/insights/rules

[jp-style]://github.com/johnpapa/angular-styleguide
[jp-modular]://github.com/johnpapa/ng-demos/tree/master/modular

[karma]://karma-runner.github.io
[protractor]://angular.github.io/protractor/
[travis]://travis-ci.org

## License

Copyright © 2013 * 2015 Jonathan Ho
