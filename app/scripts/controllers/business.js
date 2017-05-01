'use strict';

/**
 * @ngdoc function
 * @name arbitriumApp.controller:BusinessCtrl
 * @description
 * # BusinessCtrl
 * Controller of the arbitriumApp
 */
angular.module('arbitriumApp')
  .controller('BusinessCtrl', ['dragularService', function TodoCtrl(dragularService) {
    dragularService('.dragContainer', { nameSpace: 'peopleTask' }),
    dragularService('.dragPeople', { nameSpace: 'peopleTask' }),
    dragularService('.dragHorizontalOrder', { nameSpace: 'test' });
  }])
  .controller('FormController', ['$scope', '$location', function($scope, $location) {

    $scope.check = function() {

      var tag = '';
      angular.element('.businessManQuizzMessage').html('<h5>Indices :</h5>');

      var taskPlanningParent = angular.element(document.querySelector( '#taskPlanning')).parent().attr('id');
      if(taskPlanningParent != 'contChefProjet') {
        tag += '<p>Planification du projet n\'est pas au bon endroit.</p>';
      }

      var taskDesignParent = angular.element(document.querySelector('#taskDesign')).parent().attr('id');
      if(taskDesignParent != 'contGraphiste') {
        tag += '<p>Réalisation de maquettes design n\'est pas au bon endroit.</p>';
      }

      var taskAnalyseParent = angular.element(document.querySelector('#taskAnalyse')).parent().attr('id');
      if(taskAnalyseParent != 'contComptable') {
        tag += '<p>Analyse financière n\'est pas au bon endroit.</p>';
      }

      var taskMarketParent = angular.element(document.querySelector('#taskMarket')).parent().attr('id');
      if(taskMarketParent != 'contRespMarket') {
        tag += '<p>Étude de marché n\'est pas au bon endroit.</p>';
      }

      var taskDevParent = angular.element(document.querySelector('#taskDev')).parent().attr('id');
      if(taskDevParent != 'contDev') {
        tag += '<p>Développement web n\'est pas au bon endroit.</p>';
      }

      if(tag != '') {
        angular.element(tag).appendTo(document.querySelector('.businessManQuizzMessage'));
        $scope.showMessage = true;
      } else {
        $location.path('quizzBusiness2');
      }
    }
  }])
  .controller('FormController2', function($scope) {

    $scope.check = function() {

      if(angular.element('#orderContainer').children()[0].id == 'order1'
      && angular.element('#orderContainer').children()[1].id == 'order2'
      && angular.element('#orderContainer').children()[2].id == 'order3'
      && angular.element('#orderContainer').children()[3].id == 'order4'
      && angular.element('#orderContainer').children()[4].id == 'order5') {
        console.log('C\'est tout bon !');
      } else {
        angular.element('.businessManQuizzMessage').html('<h5>Les tâches ne sont pas encore dans le bon ordre ...</h5>');
        $scope.showMessage = true;
      }
    }

  });
