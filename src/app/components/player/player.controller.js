(function() {
'use strict';

angular.module('poppyGP.components')
  .controller('PlayerCtrl', PlayerCtrl);

  /* @ngInject */
  function PlayerCtrl() {
    var self = this;

    self.url = setUrl;

    function setUrl() {
      return 'http://www.ustream.tv/embed/19226178?wmode=direct&amp;showtitle=false';
    }
  }

}();