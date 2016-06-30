'use strict';

/**
 * @ngdoc overview
 * @name angularYoemanLearningApp
 * @description
 * # angularYoemanLearningApp
 *
 * Main module of the application.
 */
angular
  .module('angularYoemanLearningApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'toastr',
	'adf', 
	'adf.structures.base', 
	'adf.widget.clock'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/proveedores', {
        templateUrl: 'views/proveedores.html',
        controller: 'ProveedoresCtrl',
        controllerAs: 'proveedores'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
