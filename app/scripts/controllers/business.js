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

      //$scope.showDialog = true;

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

  .controller('FormController2', function($scope, AuthService, $http, $location) {

    $scope.check = function() {

      if(angular.element('#orderContainer').children()[0].id == 'order1'
      && angular.element('#orderContainer').children()[1].id == 'order2'
      && angular.element('#orderContainer').children()[2].id == 'order3'
      && angular.element('#orderContainer').children()[3].id == 'order4'
      && angular.element('#orderContainer').children()[4].id == 'order5') {
        console.log('C\'est tout bon !');

        $scope.showMessage = false;
        $scope.showQuizzOver = true;

        /***************** INSERER CODE POUR LE PATCH DE PUTA *****************/

        var actualUserId = AuthService.userInf.id;
      //$scope.userSchema.marketingComDone = true;
      //console.log($scope.userSchema.marketingComDone);
      // Make the request to retrieve or create the user.
          $http({
            method: 'PATCH',
            url: 'http://hexagon-api-dev.comem.ch/users/'+ actualUserId,
            data: {"businessManagementDone" : "true"},
            contentType: 'application/json'
          }).then(function(res) {

            console.log("AUTOP");

              $http({
                method: 'GET',
                url: 'http://hexagon-api-dev.comem.ch/users/'+ actualUserId,
              }).then(function(res) {

                if(res.data.codingDone && res.data.marketingComDone && res.data.businessManagementDone && res.data.multimediaDone){
                  console.log("Bravo, tu as fait les 5 epreuves d'entrainements !");
                }else{
                  console.log("Il te manque encore des entraienemtns");
                }
            });

            $location.path('training');

          }).catch(function(res) {
            console.log("Ca marche pas ton patch de business");
            console.log(res);
            // If an error occurs, hide the loading message and show an error message.
            //MarketingCtrl.error = "Problème avec le post marketing done";
          });

        /***********************************************************************/

      } else {

        $scope.showMessage = true;
      }
    }

  });
