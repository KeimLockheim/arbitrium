angular.module('arbitriumApp')
  .controller('QuizzMultiCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

var quizzMultiCtrl = this;

//A modifier pour choper la bonne question
var multimediaQuestions = multimediaQ1;

switch (multimediaQuestions) {
	case "multimediaQ1":
		quizzMultiCtrl.intitule = "Quel objet jette le bébé de son berceau?";
		quizzMultiCtrl.reponse1 = "Un biberon";
		quizzMultiCtrl.reponse2 = "Une hache";
		quizzMultiCtrl.reponse3 = "Un petit ourson";
		quizzMultiCtrl.reponseCorrect = "Un petit ourson";
	break;
	case "multimediaQ2":
		quizzMultiCtrl.intitule = "Quelle est la première ville apparaissant dans la vidéo?";
		quizzMultiCtrl.reponse1 = "Lausanne";
		quizzMultiCtrl.reponse2 = "New York";
		quizzMultiCtrl.reponse3 = "Tokyo";
		quizzMultiCtrl.reponseCorrect = "New York";
	break;
}

});