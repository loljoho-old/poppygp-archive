(function() {
  'use strict';

  angular.module('poppyGP.playlist')
    .controller('PlaylistController', PlaylistController);

  /** @ngInject */
  function PlaylistController(_, playlistService, $timeout, $log) {
    var vm = this;

    vm.playlist   = {};
    //vm.tracks     = {};
    vm.trackList  = {};

    activate();

    function activate() {
      getTracks();
      $log.info('Activated PlaylistController');
    }

    function getTracks() {
      playlistService.get().$promise.then(function(response) {
        vm.playlist = response.playlist.trackList.track;
      }, function(errorMsg) {
        vm.playlist = errorMsg;
      });
    }

    function getTrackList() {
      var trackList,
          playlist;

      playlistService.get().$promise.then(function(response) {
        playlist = response.playlist.trackList.track;
        getTrackListSuccess();
      }, function(errorMsg) {
        playlist = errorMsg;
      });

      function getTrackListSuccess() {
        angular.forEach(playlist, function(value) {
          var track = {
            duration: value.duration,
            location: value.location,
            title:    value.title
          };
          this.push(track);
        }, trackList);
        vm.tracks     = trackList;
        //vm.tracks     = angular.toJson(vm.trackList);
        //vm.tracks     = _.filter(_.omit(vm.trackList, 'extension'));
      }

    }



  }

})();
