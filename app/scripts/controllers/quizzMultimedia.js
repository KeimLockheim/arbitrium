angular.module('arbitriumApp')
  .controller('QuizzMultiCtrl', function ($routeParams, $scope, $http, AuthService, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

	var quizzMultiCtrl = this;

	//Définit quelle question doit être afficher selon l'ID
	var multimediaQuestions = $routeParams.Id;

	//Structure de questions à poser selon la vidéo visionnée
	switch (multimediaQuestions) {
		case "Q1":
			quizzMultiCtrl.intitule = "Quel objet jette le bébé de son berceau?";
			quizzMultiCtrl.reponse1 = "Un biberon";
			quizzMultiCtrl.reponse2 = "Une hache";
			quizzMultiCtrl.reponse3 = "Un petit ourson";
			quizzMultiCtrl.reponseCorrect = "Un petit ourson";

		break;
		case "Q2":
			quizzMultiCtrl.intitule = "Quelle est la première ville apparaissant dans la vidéo?";
			quizzMultiCtrl.reponse1 = "Lausanne";
			quizzMultiCtrl.reponse2 = "New York";
			quizzMultiCtrl.reponse3 = "Tokyo";
			quizzMultiCtrl.reponseCorrect = "New York";
		break;
		case "Q3":
			quizzMultiCtrl.intitule = "De quelle marque sont les deux paires de chaussures?";
			quizzMultiCtrl.reponse1 = "Adidas";
			quizzMultiCtrl.reponse2 = "Nike";
			quizzMultiCtrl.reponse3 = "Asics";
			quizzMultiCtrl.reponseCorrect = "Nike";
		break;
		case "Q4":
			quizzMultiCtrl.intitule = "Quel objet est utilisé comme embarcation pour traverser la rivière?";
			quizzMultiCtrl.reponse1 = "Un bol";
			quizzMultiCtrl.reponse2 = "Un balais";
			quizzMultiCtrl.reponse3 = "La carapace d'une tortue";
			quizzMultiCtrl.reponseCorrect = "Un bol";
		break;
		case "Q5":
			quizzMultiCtrl.intitule = "Quel jeu apparaît en premier dans la vidéo?";
			quizzMultiCtrl.reponse1 = "League of Legends";
			quizzMultiCtrl.reponse2 = "Mario Kart";
			quizzMultiCtrl.reponse3 = "Hearthstone";
			quizzMultiCtrl.reponseCorrect = "Mario Kart";
		break;
		case "Q6":
			quizzMultiCtrl.intitule = "En combien de groupes a été divisé la classe pour ce projet?";
			quizzMultiCtrl.reponse1 = "2";
			quizzMultiCtrl.reponse2 = "3";
			quizzMultiCtrl.reponse3 = "5";
			quizzMultiCtrl.reponseCorrect = "3";
		break;
	}

	$(function(){
	    $("input[type='radio']").change(function(){

	        $("button[type='button']").prop("disabled", false);
	    });
	});



	$scope.valideReponse = function() {

		var answer = document.querySelector('input[name = "answer"]:checked').value;

		if (quizzMultiCtrl.reponseCorrect == answer) {
			$scope.showGoodMessage = true;
		}

		else {
			$scope.showBadMessage = true;
		}

		console.log("testetstest");

	};

	$scope.terminerMission = function (){

		
		
		var actualUserId = AuthService.userInf.id;
		console.log(actualUserId);
      // Make the request to retrieve or create the user.
         $http({
            method: 'PATCH',
            url: 'http://hexagon-api-dev.comem.ch/users/'+ actualUserId,
            data: {"multimediaDone" : "true"},
            contentType: 'application/json'
          }).then(function(res) {

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
            console.log("Ca marche pas ton patch dans multimedia");
            console.log(res);
            // If an error occurs, hide the loading message and show an error message.
            //MarketingCtrl.error = "Problème avec le post marketing done";
          });
          

	};

});
