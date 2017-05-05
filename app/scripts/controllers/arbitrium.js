'use strict';


angular.module('arbitriumApp').factory('ArbitriumService', function($http) {
  var service = {};

  //Get stories
  service.getStories = function (id){
    return $http({
      method: 'GET',
      url: 'http://hexagon-api-dev.comem.ch' + '/stories'
    }).then(function(res) {
      return res.data;
    }).catch(function() {
      console.log("error no such ");

    });
  };


  return service;

});




/**
 * @ngdoc function
 * @name arbitriumApp.controller:AbritriumCtrl
 * @description
 * # ArbitriumCtrl
 * Controller of the arbitriumApp
 */
angular.module('arbitriumApp')
  .controller('ArbitriumCtrl', function (ArbitriumService, $location ,$scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var arbitriumCtrl = this;
    //Initialise les statistiques avec une valeur de base
    arbitriumCtrl.business = 50;
    arbitriumCtrl.communication = 50;
    arbitriumCtrl.management = 50;
    arbitriumCtrl.marketing = 50;
    arbitriumCtrl.multimedia = 50;
    arbitriumCtrl.programmation = 50;

    arbitriumCtrl.coutArgent = 8000;
    arbitriumCtrl.coutTemps = 35;

    //Récupère toutes les stories stockées dans la BD
    ArbitriumService.getStories().then(function(stories){

      //On utilise que la première story
      arbitriumCtrl.story = stories[0].questions;


      $scope.cards = [];
      //Ajoute la première question depuis la story
      $scope.cards.push(stories[0].questions[0]);
      //Génère plus de cartes vides que de questions totales et les place à la suite du tas de carte
      for (var i = 1; i < arbitriumCtrl.story.length + 10; i++) {
        $scope.cards.push({
        "titre": "",
        "picture": "blank.png",
        "idCarte": "",
        "reponseG": {
          "titre": "",
          "communication": "",
          "marketing":"" ,
          "business": "",
          "programmation": "",
          "multimedia": "",
          "management": "",
          "coutTemps":"" ,
          "jumpTo": ""
        },
        "reponseD": {
          "titre": "",
          "communication": "" ,
          "marketing": "",
          "business": "",
          "programmation": "",
          "multimedia": "",
          "management": "",
          "coutTemps": "",
          "jumpTo": ""
        },
        "estMultiple": false
      });
      }
      //Renverse le tas de carte puisque angulr-swing affiche en premier la fin du tableau
      $scope.cards.reverse();
    });

    //Permet d'afficher les informations de la prochaine carte sur la carte vide qui suit la carte swipée
    arbitriumCtrl.addNextCard = function (card, direction, index, eventObject){
      arbitriumCtrl.story.reverse();
      console.log(index);
      //Condition qiu test si la carte actuelle possède des jumpTo sur la carte suivante
      //Permet de déterminer si on arrive à la de la story puisque seule la dernière question n'a pas de jumpTo
      if($scope.cards[index].reponseD.jumpTo && $scope.cards[index].reponseG.jumpTo){
        if(direction == "gauche"){
          var nextQuestionID = $scope.cards[index].reponseD.jumpTo;
        }else {
          var nextQuestionID = $scope.cards[index].reponseG.jumpTo;
        }
      }else{
        $location.path('spiderProfile/'+arbitriumCtrl.communication+'/'+arbitriumCtrl.marketing+'/'+arbitriumCtrl.business+'/'+arbitriumCtrl.programmation+'/'+arbitriumCtrl.multimedia+'/'+arbitriumCtrl.management);
      }
      var nextQuestion = eventObject.target.parentElement.children[index-1];

      console.log(nextQuestion);
      console.log(eventObject);

      angular.forEach(arbitriumCtrl.story, function(question, key){
        if(nextQuestionID == question.idCarte){
          nextQuestion.children["0"].childNodes[1].innerHTML = question.titre;
          nextQuestion.children["0"].children[1].src = "http://hexagon-api-dev.comem.ch/"+question.picture;
          nextQuestion.children["0"].attributes[1].value = question.reponseD.titre;
          nextQuestion.children["0"].attributes[2].value = question.reponseG.titre;
          nextQuestion.attributes[9].value = nextQuestionID;
          $scope.cards[index-1] = question;
        }
      });
      console.log($scope.cards[index-1]);
      $scope.card = card;
      $scope.$apply();
    }

    //Supprime la carte qui déclanche l'évenement
    arbitriumCtrl.remove = function (eventObject) {
      //Supprime la carte après l'avoir lancé sur un côté
      var htmlDeletedCard = eventObject.target;
      eventObject.target.remove();
    }

    arbitriumCtrl.throwout = function (index, eventObject) {
    };

    //Se déclanche lorsqu'une carte est swipée à gauche
    arbitriumCtrl.throwoutleft = function (index, eventObject) {

      //ajoute les statistiques de chaque cartes aux compteurs de statistiques de l'utilisateur
      var carte = $scope.cards[index];
      arbitriumCtrl.business += carte.reponseD.business;
      arbitriumCtrl.communication += carte.reponseD.communication;
      arbitriumCtrl.management += carte.reponseD.management;
      arbitriumCtrl.marketing += carte.reponseD.marketing;
      arbitriumCtrl.multimedia += carte.reponseD.multimedia;
      arbitriumCtrl.programmation += carte.reponseD.programmation;
      arbitriumCtrl.coutArgent += carte.reponseD.coutArgent;
      var coutArgentAfficher = arbitriumCtrl.coutArgent / 100;
      arbitriumCtrl.coutTemps -= carte.reponseD.coutTemps;
      var coutTempsAfficher = arbitriumCtrl.coutTemps * 2.5;

      console.log("business: " + arbitriumCtrl.business);
      console.log("comm: " + arbitriumCtrl.communication);
      console.log("management: " + arbitriumCtrl.management);
      console.log("marketing: " + arbitriumCtrl.marketing);
      console.log("media: " + arbitriumCtrl.multimedia);
      console.log("programmation: " + arbitriumCtrl.programmation);
      console.log("argent: " + arbitriumCtrl.coutArgent);
      console.log("temps: " + arbitriumCtrl.coutTemps);

      //Met à jour l'affichage des jauges
      angular.element(document.querySelector(".time"))[0].style.width = coutTempsAfficher + "%";
      angular.element(document.querySelector(".money"))[0].style.width = coutArgentAfficher + "%";


      arbitriumCtrl.addNextCard($scope.cards[index] ,"gauche", index, eventObject);
      arbitriumCtrl.remove(eventObject);
    };

    //Se déclanche lorsqu'une carte est swipée à gauche
    arbitriumCtrl.throwoutright = function (index, eventObject) {
      var carte = $scope.cards[index];
      arbitriumCtrl.business += carte.reponseG.business;
      arbitriumCtrl.communication += carte.reponseG.communication;
      arbitriumCtrl.management += carte.reponseG.management;
      arbitriumCtrl.marketing += carte.reponseG.marketing;
      arbitriumCtrl.multimedia += carte.reponseG.multimedia;
      arbitriumCtrl.programmation += carte.reponseG.programmation;
      arbitriumCtrl.coutArgent += carte.reponseG.coutArgent;
      var coutArgentAfficher = arbitriumCtrl.coutArgent / 100;
      arbitriumCtrl.coutTemps -= carte.reponseG.coutTemps;
      var coutTempsAfficher = arbitriumCtrl.coutTemps * 2.5;

      console.log("business: " + arbitriumCtrl.business);
      console.log("comm: " + arbitriumCtrl.communication);
      console.log("management: " + arbitriumCtrl.management);
      console.log("marketing: " + arbitriumCtrl.marketing);
      console.log("media: " + arbitriumCtrl.multimedia);
      console.log("programmation: " + arbitriumCtrl.programmation);
      console.log("argent: " + arbitriumCtrl.coutArgent);
      console.log("temps: " + arbitriumCtrl.coutTemps);

      angular.element(document.querySelector(".time"))[0].style.width = coutTempsAfficher + "%";
      angular.element(document.querySelector(".money"))[0].style.width = coutArgentAfficher + "%";

      arbitriumCtrl.addNextCard($scope.cards[index],"droite", index, eventObject);
      arbitriumCtrl.remove(eventObject);

    };

    arbitriumCtrl.throwin = function (eventName, eventObject) {
        console.log('throwin', eventObject);
    };

    var description
    arbitriumCtrl.dragstart = function (eventName, eventObject) {
        description = eventObject.target.innerHTML;
    };

    //Se déclanche lorsqu'une carte est en train d'être déplacée
    arbitriumCtrl.dragmove = function (eventName, eventObject) {

      //Affiche sur la carte, lors du drag les réponses possibles
      var repGauche = eventObject.target.children[0].attributes[1].value;
      var repDroite = eventObject.target.children[0].attributes[2].value;

        //Si la carte va en direction de la gauche, alors on affiche la réponse gauche, sinon on affiche la réponse droite
        if(eventObject.throwDirection <= -1 && eventObject.throwOutConfidence > 0){
          eventObject.target.children[0].childNodes[5].innerHTML = repGauche;

        }
        else if (eventObject.throwDirection >= 1 && eventObject.throwOutConfidence > 0){
          eventObject.target.children[0].childNodes[5].innerHTML = repDroite;
        }
    };

    arbitriumCtrl.dragend = function (eventName, eventObject) {
      eventObject.target.innerHTML = description;
    };

    arbitriumCtrl.options = {
        throwOutConfidence: function (offset, elementWidth) {
            console.log('throwOutConfidence', offset, elementWidth);
            return Math.min(Math.abs(offset) / elementWidth, 1);
        },
        isThrowOut: function (offset, elementWidth, throwOutConfidence) {
            console.log('isThrowOut', offset, elementWidth, throwOutConfidence);
            return throwOutConfidence === 1;
        }
    };


});
