'use strict';

/**
 * @ngdoc overview
 * @name arbitriumApp
 * @description
 * # arbitriumApp
 *
 * Main module of the application.
 */

angular.module('arbitriumApp', ['angular-storage'])

angular
  .module('arbitriumApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'dragularModule',
    'angular-storage',
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
        controllerAs: 'inscriptionCtrl'
      }).when('/quizzMultimedia', {
        templateUrl: 'views/quizzMultimedia.html',
        controller: 'QuizzMultiCtrl',
        controllerAs: 'quizzMultiCtrl'
      }).when('/multimediaQ1', {
        templateUrl: 'views/multimediaQuestion.html',
        controller: 'QuizzMultiCtrl',
        controllerAs: 'quizzMultiCtrl'
      }).when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'loginCtrl'
      }).otherwise({
        redirectTo: '/'
      });
  });

/*angular.module('arbitriumApp').run(function(AuthService, $rootScope, $location) {

  $rootScope.$on('$routeChangeStart', function(event, toRoute) {

    if (!AuthService.authToken && !(toRoute.name == 'login' || toRoute.name == 'inscription')) {

      event.preventDefault();
      $location.path('login');
    }
  });
});*/
