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

    // Événement lancé lorsque le bouton "valider" est cliqué
    $scope.check = function() {

      // Vide l'élément tag
      var tag = '';

      // Crée la balise message pour afficher des indices
      angular.element('.businessManQuizzMessage').html('<h5>Indices :</h5>');

      // Récupère le parent de la tâche planning
      var taskPlanningParent = angular.element(document.querySelector( '#taskPlanning')).parent().attr('id');
      if(taskPlanningParent != 'contChefProjet') {
        // Ajoute une ligne dans la balise message, pour indiquer que l'élément est mal placé
        tag += '<p>Planification du projet n\'est pas au bon endroit.</p>';
      }

      // Récupère le parent de la tâche design
      var taskDesignParent = angular.element(document.querySelector('#taskDesign')).parent().attr('id');
      if(taskDesignParent != 'contGraphiste') {
        // Ajoute une ligne dans la balise message, pour indiquer que l'élément est mal placé
        tag += '<p>Réalisation de maquettes design n\'est pas au bon endroit.</p>';
      }

      // Récupère le parent de la tâche analyse
      var taskAnalyseParent = angular.element(document.querySelector('#taskAnalyse')).parent().attr('id');
      if(taskAnalyseParent != 'contComptable') {
        // Ajoute une ligne dans la balise message, pour indiquer que l'élément est mal placé
        tag += '<p>Analyse financière n\'est pas au bon endroit.</p>';
      }

      // Récupère le parent de la tâche marketing
      var taskMarketParent = angular.element(document.querySelector('#taskMarket')).parent().attr('id');
      if(taskMarketParent != 'contRespMarket') {
        // Ajoute une ligne dans la balise message, pour indiquer que l'élément est mal placé
        tag += '<p>Étude de marché n\'est pas au bon endroit.</p>';
      }

      // Récupère le parent de la tâche développement
      var taskDevParent = angular.element(document.querySelector('#taskDev')).parent().attr('id');
      if(taskDevParent != 'contDev') {
        // Ajoute une ligne dans la balise message, pour indiquer que l'élément est mal placé
        tag += '<p>Développement web n\'est pas au bon endroit.</p>';
      }

      // Si tag n'est pas vide (= il y a des fautes)
      if(tag != '') {
        // On affiche le message
        angular.element(tag).appendTo(document.querySelector('.businessManQuizzMessage'));
        $scope.showMessage = true;
      } else {
        // Sinon, on peut passer à la suite du quiz
        $location.path('quizzBusiness2');
      }
    }
  }])

  .controller('FormController2', function($scope, AuthService, $http, $location) {

    // Événement lancé lorsque le bouton "valider" est cliqué
    $scope.check = function() {

      // Vérifie que l'ordre des éléments est bon
      if(angular.element('#orderContainer').children()[0].id == 'order1'
      && angular.element('#orderContainer').children()[1].id == 'order2'
      && angular.element('#orderContainer').children()[2].id == 'order3'
      && angular.element('#orderContainer').children()[3].id == 'order4'
      && angular.element('#orderContainer').children()[4].id == 'order5') {

        // Cache le message d'information
        $scope.showMessage = false;

        // Affiche le message + bouton de fin de quiz
        $scope.showQuizzOver = true;

      } else {
        // Affiche un message pour indiquer que les éléments ne sont pas dans l'ordre
        $scope.showMessage = true;
      }
    };

    // Termine le quiz
    $scope.endQuizz = function() {

      var actualUserId = AuthService.userInf.id;

        // Patch de l'user dans la bd afin de dire qu'il a fait l'épreuve business
        $http({
          method: 'PATCH',
          url: 'http://hexagon-api-dev.comem.ch/users/'+ actualUserId,
          data: {"businessManagementDone" : "true"},
          contentType: 'application/json'
        }).then(function(res) {

          console.log("Patch OK");

            $http({
              method: 'GET',
              url: 'http://hexagon-api-dev.comem.ch/users/'+ actualUserId,
            }).then(function(res) {

              if(res.data.codingDone && res.data.marketingComDone && res.data.businessManagementDone && res.data.multimediaDone){
                console.log("Bravo, tu as fait les 5 epreuves d'entrainements !");
                $location.path('arbitrium');
              }else{
                console.log("Il te manque encore des entrainements");
                $location.path('training');

              }
          });

          

        }).catch(function(res) {
          console.log("Ca marche pas ton patch de business");
          console.log(res);
          // If an error occurs, hide the loading message and show an error message.
          //MarketingCtrl.error = "Problème avec le post marketing done";
        });

    }

  });
