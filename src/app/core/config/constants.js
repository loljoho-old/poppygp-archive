/* global moment:false, _:false */
(function() {
  'use strict';

  angular
    .module('poppyGP.core')
    .constant('moment', moment)
    .constant('_', window._);

})();