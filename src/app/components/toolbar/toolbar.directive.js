(function() {
  'use strict';

  angular
    .module('poppyGP.layout')
    .directive('gpToolbar', gpToolbarDirective);

  /* @ngInject */
  function gpToolbarDirective() {
    var directive = {
      restrict: 'E',
      replace: true,
      transclude: false,
      scope: {

      },
      templateUrl: 'app/components/toolbar/toolbar.html'
      //link: link
    };
    return directive;

    //function link(scope, element, attrs) {
    //  var $navbarInner  = element.find('.md-toolbar-tools');
    //}
    
  }
  
})();
    /*
    function ccSidebar () {
        // Opens and closes the sidebar menu.
        // Usage:
        //  <div data-cc-sidebar">
        //  <div data-cc-sidebar whenDoneAnimating="vm.sidebarReady()">
        // Creates:
        //  <div data-cc-sidebar class="sidebar">
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
                whenDoneAnimating: '&?'
            }
        };
        return directive;

        function link(scope, element, attrs) {
            var $sidebarInner = element.find('.sidebar-inner');
            var $dropdownElement = element.find('.sidebar-dropdown a');
            element.addClass('sidebar');
            $dropdownElement.click(dropdown);

            function dropdown(e) {
                var dropClass = 'dropy';
                e.preventDefault();
                if (!$dropdownElement.hasClass(dropClass)) {
                    $sidebarInner.slideDown(350, scope.whenDoneAnimating);
                    $dropdownElement.addClass(dropClass);
                } else if ($dropdownElement.hasClass(dropClass)) {
                    $dropdownElement.removeClass(dropClass);
                    $sidebarInner.slideUp(350, scope.whenDoneAnimating);
                }
            }
        }*/