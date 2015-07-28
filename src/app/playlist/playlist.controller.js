(function() {
  'use strict';

  angular.module('poppyGP.playlist')
    .controller('PlaylistController', PlaylistController);

    /** @ngInject */
    function PlaylistController(_, playlistService, $timeout, $log) {
      var vm = this;

      vm.playlist   = {};
      vm.tracks  = [];

      //vm.trackList = angular.fromJson();
      activate();

      function activate() {
        var playlist = getTracks();
      }

      function getTracks() {
        playlistService.get().$promise.then(function(response) {
          vm.playlist = response.playlist.trackList.track;
        }, function(errorMsg) {
          vm.playlist = errorMsg;
        });
      }
        /*

        var trackList = [];
        angular.forEach(playlist, function(value) {
          var track = {
            duration: value.duration,
            location: value.location
          };
          this.push(track);{
            duration: value.duration,
            location: value.location,
            title:    value.title
          });
        }, trackList);
        vm.tracks = trackList;
        */
        //vm.trackList = response.playlist.trackList;
        //$log.info('response.playlist.trackList = ' + response.playlist.trackList);
        //vm.tracks = angular.toJson(vm.trackList);
        //vm.tracks = _.filter(_.omit(vm.trackList, 'extension'));
        //vm.trackList = vm.playlist.trackList;

        //angular.forEach(vm.trackList, function(key, track) {
          //vm.tracks.push({duration: track.duration});
        //});


    }

})();