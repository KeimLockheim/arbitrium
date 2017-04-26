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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      }).when('/arbitrium', {
        templateUrl: 'views/arbitrium.html',
        controller: 'ArbitriumCtrl',
        controllerAs: 'arbitrium'
      }).when('/training', {
        templateUrl: 'views/training.html',
        controller: 'TrainingCtrl',
        controllerAs: 'training'
      }).when('/quizz', {
        templateUrl: 'views/quizz.html',
        controller: 'QuizzCtrl',
        controllerAs: 'quizz'
      }).when('/quizzMultimedia', {
        templateUrl: 'views/quizzMultimedia.html',
        controller: 'QuizzCtrl',
        controllerAs: 'quizz'
      }).when('/multimediaQ1', {
        templateUrl: 'views/multimediaQ1.html',
        controller: 'QuizzCtrl',
        controllerAs: 'quizz'
      })
      .when('/multimediaQ2', {
        templateUrl: 'views/multimediaQ2.html',
        controller: 'QuizzCtrl',
        controllerAs: 'quizz'
      })
      .when('/multimediaQ3', {
        templateUrl: 'views/multimediaQ3.html',
        controller: 'QuizzCtrl',
        controllerAs: 'quizz'
      })
      .when('/multimediaQ4', {
        templateUrl: 'views/multimediaQ4.html',
        controller: 'QuizzCtrl',
        controllerAs: 'quizz'
      })
      .when('/multimediaQ5', {
        templateUrl: 'views/multimediaQ5.html',
        controller: 'QuizzCtrl',
        controllerAs: 'quizz'
      })
      .when('/multimediaQ6', {
        templateUrl: 'views/multimediaQ6.html',
        controller: 'QuizzCtrl',
        controllerAs: 'quizz'
      })
      .when('/multimediaQ7', {
        templateUrl: 'views/multimediaQ7.html',
        controller: 'QuizzCtrl',
        controllerAs: 'quizz'
      }).otherwise({
        redirectTo: '/'
      });
  });
