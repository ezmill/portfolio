'use strict';

/**
 * @ngdoc overview
 * @name portfolio2App
 * @description
 * # portfolio2App
 *
 * Main module of the application.
 */
angular
  .module('portfolio2App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/spout', {
        templateUrl: 'views/spout.html',
        controller: 'SpoutCtrl'
      })      
      .when('/syrup', {
        templateUrl: 'views/syrup.html',
        controller: 'SyrupCtrl'
      })
      .when('/lamp', {
        templateUrl: 'views/lamp.html',
        controller: 'LampCtrl'
      })
      .when('/radix', {
        templateUrl: 'views/radix.html',
        controller: 'RadixCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
