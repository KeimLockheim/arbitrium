'use strict';

/**
 * @ngdoc overview
 * @name arbitriumApp
 * @description
 * # arbitriumApp
 *
 * Main module of the application.
 */
angular
  .module('arbitriumApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'gajus.swing'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      }).when('/arbitrium', {
        templateUrl: 'views/arbitrium.html',
        controller: 'ArbitriumCtrl',
        controllerAs: 'arbitriumCtrl'
      }).when('/training', {
        templateUrl: 'views/training.html',
        controller: 'TrainingCtrl',
        controllerAs: 'training'
      }).when('/quizz', {
        templateUrl: 'views/quizz.html',
        controller: 'QuizzCtrl',
        controllerAs: 'quizz'
      }).otherwise({
        redirectTo: '/'
      });
      // use the HTML5 History API
        $locationProvider.html5Mode(true);
  });
