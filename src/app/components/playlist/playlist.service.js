(function() {
  'use strict';

  angular
    .module('poppyGP.playlist')
    .factory('playlistService', playlistService);

  /* @ngInject */
  function playlistService($log, $q) {
    var tracks = [{
      year: '1996',
      round: '1',
      session: 'Qualifying',
      duration: 2771000
    }, {
      year: '1996',
      round: '1',
      session: 'Race',
      duration: 8223000
    }, {
      year: '2008',
      round: '7',
      session: 'Race',
      duration: 8664960
    }, {
      year: '2012',
      round: '2',
      session: 'Race',
      duration: 13646000
    }, {
      year: '1986',
      round: '16',
      session: 'Race',
      duration: 8919000
    }, {
      year: '2007',
      round: '10',
      session: 'Race',
      duration: 10540000
    }];

    // Promise-Based API
    return {
      get : function() {
        $log.info('playlistService.get() response.\n' + tracks);
        // Simulate Asynchronous Data Service
        return $q.when(tracks);
      }
    };
  }

})();