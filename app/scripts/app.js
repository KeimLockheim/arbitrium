'use strict';

/**
 * @ngdoc overview
 * @name arbitriumApp
 * @description
 * # arbitriumApp
 *
 * Main module of the application.
 */

angular.module('arbitriumApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'dragularModule',
    'gajus.swing',
    'angular-storage'
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
      }).when('/spiderProfile', {
        templateUrl: 'views/spiderProfile.html',
        controller: 'SpiderprofileCtrl',
        controllerAs: 'spiderprofileCtrl'
      }).when('/training', {
        templateUrl: 'views/training.html',
        controller: 'TrainingCtrl',
        controllerAs: 'training'
      }).when('/coding', {
        templateUrl: 'views/coding.html',
        controller: 'CodingCtrl',
        controllerAs: 'coding'
      }).when('/quizzBusiness1', {
        templateUrl: 'views/quizzBusiness1.html',
        controller: 'BusinessCtrl',
        controllerAs: 'business'
      }).when('/quizzBusiness2', {
        templateUrl: 'views/quizzBusiness2.html',
        controller: 'BusinessCtrl',
        controllerAs: 'business'
      }).when('/marketing/', {
        templateUrl: 'views/marketing.html'
      }).when('/marketing/quizz/:category', {
        templateUrl: 'views/marketingQuizz.html',
        controller: 'MarketingCtrl',
        controllerAs: 'marketingCtrl'
      }).when('/inscription', {
        templateUrl: 'views/formInscr.html',
        controller: 'InscriptionCtrl',
        controllerAs: 'inscriptionCtrl'
      }).when('/quizzMultimedia', {
        templateUrl: 'views/quizzMultimedia.html',
        controllexr: 'QuizzMultiCtrl',
        controllerAs: 'quizzMultiCtrl'
      }).when('/multimedia/:Id', {
        templateUrl: 'views/multimediaQuestion.html',
        controller: 'QuizzMultiCtrl',
        controllerAs: 'quizzMultiCtrl'
      }).when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'loginCtrl'
      }).when('/kallax', {
        templateUrl: 'views/kallax.html',
        controller: 'KallaxCtrl',
        controllerAs: 'kallaxCtrl'
      }).otherwise({
        redirectTo: '/'
      });
  });

angular.module('arbitriumApp').run(function(AuthService, $rootScope, $route, $location) {

  $rootScope.$on('$routeChangeStart', function(event, toRoute) {

    if (!AuthService.authToken && !(toRoute.originalPath == '/login' || toRoute.originalPath == '/inscription' || toRoute.originalPath == '/')) {

      event.preventDefault();
      $location.url('/');
    }
  });
});
