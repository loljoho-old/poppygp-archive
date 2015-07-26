(function() {
  'use strict';

  angular
    .module('poppyGP.playlist')
    .controller('PlaylistController', PlaylistController);

    /** @ngInject */
    function PlaylistController(_, playlistService, $log) {
      var vm = this;

      vm.playlist   = {};
      vm.trackList  = [];
      vm.tracks     = [];

      activate();

      function activate() {
        playlistService.get().$promise.then(function(response) {
          vm.trackList = response.playlist.trackList.track;
        });

        vm.playlist = _.filter(_.omit(vm.trackList, 'extension'));
        //vm.trackList = vm.playlist.trackList;

        angular.forEach(vm.tracklist, function(key, track) {
          vm.tracks.push({duration: track.duration});
        });
      }

    }

})();