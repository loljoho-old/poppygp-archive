(function() {
    'use strict';

    angular
        .module('gpApp.playlist')
        .filter('trackFilter', trackFilter);

    function trackFilter() {

        return function(tracks) {
            var filteredTracks = [];
            for (var i = 0; i < tracks.length; i++) {
                var track = tracks[i];
                var tDate = new Date(tDate);
                if(tDate >= Date.now()) {
                    filteredTracks.push(track);
                }
            }
            return filteredTracks;
        };
    }
/*
    function trackFilter() {
        return function(track) {
            var dateTrack = new Date(track);
            return dateTrack < Date.now() ? : track
        }
        
    }
*/
})();