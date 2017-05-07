'use strict';

/**
 * @ngdoc function
 * @name arbitriumApp.controller:AbritriumCtrl
 * @description
 * # ArbitriumCtrl
 * Controller of the arbitriumApp
 */
angular.module('arbitriumApp')
  .controller('CodingCtrl', function ($routeParams, $scope, $http, AuthService, store, $location) {
    $scope.userSchema = {};
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var codingCtrl = this;

    //Cette page est uniquement en place pour que l'utilisateur vienne valider de lui-même qu'il a réalisé l'activité qui ne se trouve pas dans l'application.
    //La demande de validation de l'activité lui est faite à plusieurs reprises pour le sensibiliser un minimum à ne pas mentir.
  
    // Initialisation de la page avec les différents modes d'affichage selon le degré de demande de validation. 
    codingCtrl.start = function() {
    	console.log("start");
		  $scope.activityOver = false;
		  $scope.activityOver1 = false;
		  $scope.activityOver2 = false;
		  $scope.activityOver3 = false;
    };

    //Validation à la première question
    //Celle-ci disparaît et la deuxième question apparaît
    $scope.firstValidation = function() {
    	console.log("firstValidation");
		$scope.activityOver = true;
    	$scope.activityOver1 = true;
    };
    
    //Validation à la deuxième question
    //Celle-ci disparaît et la troisième question apparaît
     $scope.secondValidation = function() {
    	$scope.activityOver1 = false;
    	$scope.activityOver2 = true;
    };
    
    //Validation à la troisième question
    //Celle-ci disparaît et le message de félicitations et confirmation apparaît
    $scope.lastValidation = function() {
    	$scope.activityOver1 = false;
    	$scope.activityOver2 = false;
    	$scope.activityOver3 = true;
    };
  
    codingCtrl.start();

    // Le code pour le patch commence ICI

    // Pour tester le patch, décommentez la ligne ci-dessous
    //$scope.activityOver3 = true;

    $scope.patch = function() {
    	console.log("test");
      var actualUserId = AuthService.userInf.id;
      // Make the request to retrieve or create the user.
          $http({
            method: 'PATCH',
            url: 'http://hexagon-api-dev.comem.ch/users/'+ actualUserId,
            data: {"codingDone" : "true"},
            contentType: 'application/json'
          }).then(function(res) {

            console.log("Patch OK");

              $http({
                method: 'GET',
                url: 'http://hexagon-api-dev.comem.ch/users/'+ actualUserId,
              }).then(function(res) {

                if(res.data.codingDone && res.data.codingComDone && res.data.businessManagementDone && res.data.multimediaDone){
                  console.log("Bravo, tu as fait les 5 epreuves d'entrainements !");
                  $location.path('arbitrium');
                }else{
                  console.log("Il te manque encore des entrainements");
                  $location.path('training');
                }
            });

            

          }).catch(function(res) {
            console.log("Ca marche pas ton patch sur coding");
            console.log(res);
            // If an error occurs, hide the loading message and show an error message.
            //codingCtrl.error = "Problème avec le post coding done";
          });
     }

});
