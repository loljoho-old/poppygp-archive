(function() {
'use strict';

angular.module('poppyGP.components')
  .controller('PlayerCtrl', PlayerCtrl)
  .filter('trustAsResourceUrl', trustAsResourceUrl);

/* @ngInject */
function PlayerCtrl(urlService) {
  var self = this;

  self.url = setUrl;

  function setUrl() {
    urlService.video().$promise.then(function(response) {
      return response;
    });
  }

}

})();