(function() {
  'use strict';
  
  angular.module('poppyGP.schedule.playlist')
    .factory('playlistService', playlistService);

  /* @ngInject */
  function playlistService($resource) {
    return $resource('./api/playlist.xspf');
  }
  
  /*
    PSEUDOCODE
  */
  /*
    Iterate through response.trackList `tracks`
      - REPLACE '%20' with '.'
      - FIND MODE $year
      - FIND MODE $round
      - FIND string LIKE [$country, $city, $circuit, $raceName]
      - FIND string LIKE ['warmup', 'qualifying', 'practice', 'race']
    */

})();