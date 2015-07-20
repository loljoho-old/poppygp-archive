(function() {
  'use strict';

  angular
    .module('poppyGP.panel')
    .directive('gpPanel', gpPanelDirective)
    .directive('gpPanelHead', gpPanelHeadDirective)
    .directive('gpPanelTabs', gpPanelTabsDirective)
    .directive('gpPanelBody', gpPanelBodyDirective);

  /**
   *
   * @usage:
   * ```
   * <gp-panel title="My Panel">
   *
   * </gp-panel>
   * ```
   */

  function gpPanelDirective() {
    return {
      restrict: 'A',
      transclude: true,
      link: function (scope, iElement, iAttrs) {
        
      }
    };
  }

  function gpPanelHeadDirective() {
    return {
      restrict: 'A',
      link: function (scope, iElement, iAttrs) {
        
      }
    };
    
  }

  function gpPanelBodyDirective() {
    return {
      restrict: 'A',
      transclude: true,
      link: function (scope, iElement, iAttrs) {
        
      }
    };
    
  }

  function gpPanelTabsDirective() {
    return {
      restrict: 'A',
      link: function (scope, iElement, iAttrs) {
        
      }
    };
    
  }

})();
