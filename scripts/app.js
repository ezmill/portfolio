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
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/portfolio', {
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
      .when('/rarity', {
        templateUrl: 'views/rarity.html',
        controller: 'RarityCtrl'
      })      
      .when('/beautiful_time', {
        templateUrl: 'views/beautiful_time.html',
        controller: 'Beautiful_TimeCtrl'
      })
      .otherwise({
        redirectTo: '/portfolio'
      });
  });
