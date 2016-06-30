'use strict';

/**
 * @ngdoc directive
 * @name angularYoemanLearningApp.directive:siteMenu
 * @description
 * # siteMenu
 */
angular.module('angularYoemanLearningApp')
  .directive('siteMenu', function () {
    return {
      templateUrl: 'views/sitemenu.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the siteMenu directive');
      }
    };
  });
