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
    'dragularModule',
    'gajus.swing'

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
        controllerAs: 'arbitriumCtrl'
      }).when('/training', {
        templateUrl: 'views/training.html',
        controller: 'TrainingCtrl',
        controllerAs: 'training'
      }).when('/business', {
        templateUrl: 'views/business.html',
        controller: 'BusinessCtrl',
        controllerAs: 'business'
      }).when('/quizz', {
        templateUrl: 'views/quizz.html',
        controller: 'QuizzCtrl',
        controllerAs: 'quizz'
      }).when('/inscription', {
        templateUrl: 'views/formInscr.html',
        controller: 'InscriptionCtrl',
        controllerAs: 'formInscr'
      }).when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'loginInscr'
      }).when('/quizzMultimedia', {
        templateUrl: 'views/quizzMultimedia.html',
        controller: 'QuizzMultiCtrl',
        controllerAs: 'quizzMultiCtrl'
      }).when('/multimedia/:Id', {
        templateUrl: 'views/multimediaQuestion.html',
        controller: 'QuizzMultiCtrl',
        controllerAs: 'quizzMultiCtrl'
      }).when('/resultMultimedia/', {
        templateUrl: 'views/resultMultimedia.html',
        controller: 'QuizzMultiCtrl',
        controllerAs: 'quizzMultiCtrl'
      }).otherwise({
        redirectTo: '/'
      });
  });
