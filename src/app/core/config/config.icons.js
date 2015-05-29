(function() {
'use strict';

  var core = angular.module('poppyGP.core');


  /*
   * @ngdoc     run
   * @name      iconRun
   * @module    poppyGP.core
   * @requires  $http, $templateCache
   * @desc      Pre-fetches and caches icon sources by URL
   */
  core.run(iconRun);

  /* @ngInject */
  function iconRun($http, $templateCache) {

  }

  /*
   * @ngdoc     config
   * @name      iconsConfig
   * @module    poppyGP.core
   * @requires  ngMaterial
   * @desc      Configuration for $mdIcon and $mdIconProvider
   */
  //core.config(iconsConfig);

  /* @ngInject */
  //function iconsConfig($mdIconProvider, $mdIcon) {
     
  //}

})();
 /*
  * @ngdoc method
  * @name $mdCompiler#compile
  * @description A helper to compile an HTML template/templateUrl with a given controller,
  * locals, and scope.
  * @param {object} options An options object, with the following properties:
  *
  *    - `controller` - `{(string=|function()=}` Controller fn that should be associated with
  *      newly created scope or the name of a registered controller if passed as a string.
  *    - `controllerAs` - `{string=}` A controller alias name. If present the controller will be
  *      published to scope under the `controllerAs` name.
  *    - `template` - `{string=}` An html template as a string.
  *    - `templateUrl` - `{string=}` A path to an html template.
  *    - `transformTemplate` - `{function(template)=}` A function which transforms the template after
  *      it is loaded. It will be given the template string as a parameter, and should
  *      return a a new string representing the transformed template.
  *    - `resolve` - `{Object.<string, function>=}` - An optional map of dependencies which should
  *      be injected into the controller. If any of these dependencies are promises, the compiler
  *      will wait for them all to be resolved, or if one is rejected before the controller is
  *      instantiated `compile()` will fail..
  *      * `key` - `{string}`: a name of a dependency to be injected into the controller.
  *      * `factory` - `{string|function}`: If `string` then it is an alias for a service.
  *        Otherwise if function, then it is injected and the return value is treated as the
  *        dependency. If the result is a promise, it is resolved before its value is 
  *        injected into the controller.
  *
  * @returns {object=} promise A promise, which will be resolved with a `compileData` object.
  * `compileData` has the following properties: 
  *
  *   - `element` - `{element}`: an uncompiled element matching the provided template.
  *   - `link` - `{function(scope)}`: A link function, which, when called, will compile
  *     the element and instantiate the provided controller (if given).
  *   - `locals` - `{object}`: The locals which will be passed into the controller once `link` is
  *     called. If `bindToController` is true, they will be coppied to the ctrl instead
  *   - `bindToController` - `bool`: bind the locals to the controller, instead of passing them in.
  */