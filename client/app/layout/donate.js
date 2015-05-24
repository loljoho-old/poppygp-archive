(function() {
    'use strict';

    angular.module('gpApp.layout')
        .controller('Donate', Donate);

    Donate.$inject = ['$mdDialog', '$log', '$q'];
    function Donate($mdDialog) {
        var vm = this;
        vm.hideDonate   = hideDonate;
        function hideDonate() {
            $mdDialog.hide();
        }
    }

})();