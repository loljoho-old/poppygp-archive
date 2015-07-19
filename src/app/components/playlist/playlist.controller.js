(function() {
  'use strict';

  angular
    .module('poppyGP.playlist')
    .controller('Playlist', Playlist);

  /* @ngInject */
  function Playlist(playlistService, $log, $q) {
    var vm = this;

    vm.tracks = [];
    vm.currentIndex   = 0;

    activate();

    ////////////

    function activate() {
      playlistService.get().then(function(response) {
        $log.info('Playlist controller activated');
        vm.tracks = response;
      });
      /*
      return dataservice.Playlist().then(function(response) {
        vm.Playlist = response;
        return vm.Playlist;
      });*/
    }
  }
})();