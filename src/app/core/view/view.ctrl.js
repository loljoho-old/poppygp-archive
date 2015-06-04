(function() {
'use strict';

angular
  .module('poppyGP.view')
  .controller('ViewCtrl', ViewCtrl);

  // @ngInject 
  function ViewCtrl() {
    var self = this;
    self.title = 'Title';
  }

})();