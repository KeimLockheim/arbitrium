'use strict';


angular.module('arbitriumApp').factory('ArbitriumService', function($http) {
  var service = {};

  //Get stories
  service.getStories = function (id){
    return $http({
      method: 'GET',
      url: 'http://localhost:3005' + '/stories'
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
    $scope.finished = false;
    arbitriumCtrl.business = 50;
    arbitriumCtrl.communication = 50;
    arbitriumCtrl.management = 50;
    arbitriumCtrl.marketing = 50;
    arbitriumCtrl.multimedia = 50;
    arbitriumCtrl.programmation = 50;

    arbitriumCtrl.coutArgent = 8000;
    arbitriumCtrl.coutTemps = 35;

    ArbitriumService.getStories().then(function(stories){

      var story = stories[0].questions;

      arbitriumCtrl.cards = []
      angular.forEach(story, function(question, key){
      arbitriumCtrl.cards.push(question);
      arbitriumCtrl.cards.push({"idCarte":"b"+question.idCarte});

      });
      arbitriumCtrl.cards.reverse();
    });

    arbitriumCtrl.goToSpiderProfile = function(){
      $location.path('spiderProfile/'+arbitriumCtrl.communication+'/'+arbitriumCtrl.marketing+'/'+arbitriumCtrl.business+'/'+arbitriumCtrl.programmation+'/'+arbitriumCtrl.multimedia+'/'+arbitriumCtrl.management);
      //console.log('spiderProfile/'+arbitriumCtrl.communication+'/'+arbitriumCtrl.marketing+'/'+arbitriumCtrl.business+'/'+arbitriumCtrl.programmation+'/'+arbitriumCtrl.multimedia+'/'+arbitriumCtrl.management);
    }

    arbitriumCtrl.remove = function (index, eventObject) {
      //Supprime la carte après l'avoir lancé sur un côté
      var idCarte = arbitriumCtrl.cards[index].idCarte;

      var htmlDeletedCard = eventObject.target;
      eventObject.target.remove();


      //Supprime la carte vide qui suit la carte qui vient d'être détruite
      var htmlBlankCard = angular.element(document.querySelector( '.b'+idCarte ));
      htmlBlankCard.remove();
    }

    arbitriumCtrl.throwout = function (index, eventObject) {
        arbitriumCtrl.remove(index,eventObject);
        console.log(arbitriumCtrl);
        console.log($scope);
        if(angular.element(document.querySelector(".stack"))[0].children.length == 0){
          $scope.finished = true;
          $scope.$apply();
        }
    };

    arbitriumCtrl.throwoutleft = function (index, eventObject) {

      var carte = arbitriumCtrl.cards[index];
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

      console.log(arbitriumCtrl);

      angular.element(document.querySelector(".time"))[0].style.width = coutTempsAfficher + "%";
      angular.element(document.querySelector(".money"))[0].style.width = coutArgentAfficher + "%";


      if(arbitriumCtrl.cards[index].estMultiple && arbitriumCtrl.cards[index-5]){
        var idCarteASupprimer = arbitriumCtrl.cards[index-4].idCarte;
        var idCarteBlankASupprimer = arbitriumCtrl.cards[index-5].idCarte;

        angular.element(document.querySelector("." + idCarteASupprimer)).remove();
        angular.element(document.querySelector("." + idCarteBlankASupprimer)).remove();

      }
    };

    arbitriumCtrl.throwoutright = function (index, eventObject) {
      var carte = arbitriumCtrl.cards[index];
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


      angular.element(document.querySelector(".time"))[0].style.width = coutTempsAfficher + "%";
      angular.element(document.querySelector(".money"))[0].style.width = coutArgentAfficher + "%";


      if(arbitriumCtrl.cards[index].estMultiple && arbitriumCtrl.cards[index-3]){
        var idCarteASupprimer = arbitriumCtrl.cards[index-2].idCarte;
        var idCarteBlankASupprimer = arbitriumCtrl.cards[index-3].idCarte;

        angular.element(document.querySelector("." + idCarteASupprimer)).remove();
        angular.element(document.querySelector("." + idCarteBlankASupprimer)).remove();

      }
    };

    arbitriumCtrl.throwin = function (eventName, eventObject) {
        console.log('throwin', eventObject);
    };

    var description
    arbitriumCtrl.dragstart = function (eventName, eventObject) {
        description = eventObject.target.innerHTML;
    };

    arbitriumCtrl.dragmove = function (eventName, eventObject) {

      var repGauche = eventObject.target.children[0].attributes[1].value;
      var repDroite = eventObject.target.children[0].attributes[2].value;

        if(eventObject.throwDirection <= -1 && eventObject.throwOutConfidence > 0){
          eventObject.target.children[0].childNodes[9].innerHTML = repGauche;

        }
        else if (eventObject.throwDirection >= 1 && eventObject.throwOutConfidence > 0){
          eventObject.target.children[0].childNodes[9].innerHTML = repDroite;
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
