(function() {
    'use strict';

    angular
        .module('gpApp.playlist')
        .controller('Schedule', Schedule);

    Schedule.$inject = ['dataservice', '$log', '$q'];
    function Schedule(dataservice, $log, $q) {
        var vm = this;
        vm.schedule = [{"year":"2002","round":"","title":"Melbourne Qualifying","length":"3992"},{"year":"2002","round":"01","title":"Australia","length":"6979"},{"year":"1984","round":"12","title":"Austria Race","length":"1977"},{"year":"1988","round":"15","title":"Japan Race","length":"7288"},{"year":"2004","round":"06","title":"Monaco Qualifying","length":"2720"},{"year":"2004","round":"06","title":"Monaco 1","length":"4496"},{"year":"2004","round":"06","title":"Monaco 2","length":"4668"},{"year":"1984","round":"1","title":"USA Race","length":"2040"},{"year":"2001","round":"01","title":"Australian race Melbourne","length":"7658"},{"year":"1981","round":"09","title":"Great Britain Race","length":"7020"},{"year":"1991","round":"16","title":"Australia Race","length":"2291"},{"year":"1991","round":"16","title":"Australia Race 2","length":"5729"},{"year":"1993","round":"03","title":"Europe Race 1","length":"3926"},{"year":"1993","round":"03","title":"Europe Race 2","length":"5870"},{"year":"1982","round":"11","title":"France Race","length":"6334"},{"year":"1996","round":"01","title":"Australia Qualifying","length":"2771"},{"year":"1996","round":"01","title":"Australia Sunday Warmup","length":"1873"},{"year":"1996","round":"01","title":"Australia Melbourne race","length":"8223"},{"year":"1981","round":"","title":"NC South Africa Race","length":"3622"},{"year":"2009","round":"01","title":"Australia Qualifying","length":"8134"},{"year":"2009","round":"01","title":"Australia Race","length":"10821"},{"year":"1990","round":"16","title":"Australia Race","length":"2041"},{"year":"2002","round":"","title":"Melbourne Qualifying","length":"3992"},{"year":"2002","round":"01","title":"Australia","length":"6979"},{"year":"1984","round":"12","title":"Austria Race","length":"1977"},{"year":"1988","round":"15","title":"Japan Race","length":"7288"},{"year":"2004","round":"06","title":"Monaco Qualifying","length":"2720"},{"year":"2004","round":"06","title":"Monaco 1","length":"4496"},{"year":"2004","round":"06","title":"Monaco 2","length":"4668"},{"year":"1984","round":"1","title":"USA Race","length":"2040"},{"year":"2001","round":"01","title":"Australian race Melbourne","length":"7658"},{"year":"1981","round":"09","title":"Great Britain Race","length":"7020"},{"year":"1991","round":"16","title":"Australia Race","length":"2291"},{"year":"1991","round":"16","title":"Australia Race 2","length":"5729"},{"year":"1993","round":"03","title":"Europe Race 1","length":"3926"},{"year":"1993","round":"03","title":"Europe Race 2","length":"5870"},{"year":"1982","round":"11","title":"France Race","length":"6334"},{"year":"1996","round":"01","title":"Australia Qualifying","length":"2771"},{"year":"1996","round":"01","title":"Australia Sunday Warmup","length":"1873"},{"year":"1996","round":"01","title":"Australia Melbourne race","length":"8223"},{"year":"1981","round":"","title":"NC South Africa Race","length":"3622"},{"year":"2009","round":"01","title":"Australia Qualifying","length":"8134"},{"year":"2009","round":"01","title":"Australia Race","length":"10821"},{"year":"1990","round":"16","title":"Australia Race","length":"2041"}];

        //activate();

        ////////////

/*
        function activate() {
            return getSchedule.then(function() {
                $log.info('Activated Schedule view...');
            });
        }

        function getSchedule() {
            return dataservice.getSchedule().then(function(response) {
                vm.schedule = response;
                return vm.schedule;
            })
        }
*/

    }
})();