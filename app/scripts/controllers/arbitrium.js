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
  .controller('ArbitriumCtrl', function (ArbitriumService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var arbitriumCtrl = this;
    arbitriumCtrl.business = 0;
    arbitriumCtrl.communication = 0;
    arbitriumCtrl.management = 0;
    arbitriumCtrl.marketing = 0;
    arbitriumCtrl.multimedia = 0;
    arbitriumCtrl.programmation = 0;

    arbitriumCtrl.coutArgent = 0;
    arbitriumCtrl.coutTemps = 0;



    ArbitriumService.getStories().then(function(stories){

      var story = stories[0].questions;

      arbitriumCtrl.cards = []
      angular.forEach(story, function(question, key){
      arbitriumCtrl.cards.push(question);
      arbitriumCtrl.cards.push({"idCarte":"b"+question.idCarte});

      });
            console.log(arbitriumCtrl.cards);
      arbitriumCtrl.cards.reverse();
    });



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
    };

    arbitriumCtrl.throwoutleft = function (index, eventObject) {
      if(arbitriumCtrl.cards[index].estMultiple){
        var idCarteASupprimer = arbitriumCtrl.cards[index-4].idCarte;
        var idCarteBlankASupprimer = arbitriumCtrl.cards[index-5].idCarte;

        angular.element(document.querySelector("." + idCarteASupprimer)).remove();
        angular.element(document.querySelector("." + idCarteBlankASupprimer)).remove();

      }
    };

    arbitriumCtrl.throwoutright = function (index, eventObject) {
      if(arbitriumCtrl.cards[index].estMultiple){
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
