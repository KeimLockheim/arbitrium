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
  .controller('ArbitriumCtrl', function (ArbitriumService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var arbitriumCtrl = this;
    arbitriumCtrl.business = 0;
    arbitriumCtrl.communication = 0;
    arbitriumCtrl.coutArgent = 0;
    arbitriumCtrl.coutTemps = 0;
    arbitriumCtrl.management = 0;
    arbitriumCtrl.marketing = 0;






    ArbitriumService.getStories().then(function(stories){

      var conversations = stories[0].Assets.Conversations[0].DialogNodes;

      arbitriumCtrl.cards = [];
      arbitriumCtrl.responses = [];
      //console.log(conversations);
      angular.forEach(conversations, function(value, key) {

        var repGauche = '';
        var repDroite = '';

        //Test permettant de séparer les questions des réponses
        if(value.Fields.estQuestion == "False"){

          var nextQuestionID = '';

          if(value.OutgoingLinks[0]){
            nextQuestionID = value.OutgoingLinks[0].DestinationDialogID;
          }

          arbitriumCtrl.responses.push({name: "n"+value.ID,
                                        description: value.Fields['Dialogue Text'],
                                        nextQuestionID: nextQuestionID
                                       });
        }
        if(value.Fields.estQuestion == "True"){

          // if(value.OutgoingLinks[0] && value.OutgoingLinks[1]){
          //   var idReponseG = value.OutgoingLinks[0].DestinationDialogID;
          //   var idReponseD = value.OutgoingLinks[1].DestinationDialogID;
          //   console.log(arbitriumCtrl.responses);
          //
          //   angular.forEach(arbitriumCtrl.responses, function(response, key){
          //     if(response.name == "n" + idReponseG){
          //       repGauche = response.description;
          //     }
          //     if(response.name == "n" + idReponseD){
          //       repDroite = response.description;
          //     }
          //   });
          // }
            arbitriumCtrl.cards.push({name: "n"+value.ID,
                                      description: value.Fields['Dialogue Text'],
                                      symbol: value.Fields.Picture,
                                      repDroiteID : value.OutgoingLinks[0].DestinationDialogID,
                                      repGaucheID : value.OutgoingLinks[1].DestinationDialogID
                                    });
          }
      });

      console.log(arbitriumCtrl.cards);


      // //Remplir un tableau de cards dans le bon ordre pour la story
      // arbitriumCtrl.cardsOrdered = [];
      // arbitriumCtrl.cardsOrdered.push(arbitriumCtrl.cards[0]);
      // var cptCards = 1;
      // while(cptCards <= arbitriumCtrl.cards.length){
      //
      //   angular.forEach(arbitriumCtrl.cards, function(value, key){
      //     if(value.name == arbitriumCtrl[key]){
      //
      //     }
      //   });
      //
      //   arbitriumCtrl.cardsOrdered.push(arbitriumCtrl.cards[cptCards]);
      //   cptCards += 1;
      // }

      //console.log(arbitriumCtrl.cardsOrdered);

      //Supprime le premier élément qui est inutile
      //arbitriumCtrl.remove(0);

      //Inverser le tableau puisque swing affiche d'abord le dernier élément du tableau
      arbitriumCtrl.cards.reverse();
    });



    arbitriumCtrl.remove = function (index) {
      var cardName = arbitriumCtrl.cards.splice(index, 1)[0].name;

      var htmlDeletedCard = angular.element( document.querySelector( '.'+cardName ) );
      htmlDeletedCard.remove();
    }

    arbitriumCtrl.throwout = function (eventName, eventObject) {
        console.log('throwout', eventObject);
    };

    arbitriumCtrl.throwoutleft = function (eventName, eventObject) {
        console.log('throwoutleft', eventObject);
    };

    arbitriumCtrl.throwoutright = function (eventName, eventObject) {
        console.log('throwoutright', eventObject);
    };

    arbitriumCtrl.throwin = function (eventName, eventObject) {
        console.log('throwin', eventObject);
    };

    var description
    arbitriumCtrl.dragstart = function (eventName, eventObject) {
        description = eventObject.target.innerHTML;
    };

    arbitriumCtrl.dragmove = function (eventName, eventObject) {
        if(eventObject.throwDirection <= -1 && eventObject.throwOutConfidence > 0){
          eventObject.target.children[0].children[1].innerHTML = eventObject.target.children[0].attributes[2].nodeValue;
        }
        else if (eventObject.throwDirection >= 1 && eventObject.throwOutConfidence > 0){
          eventObject.target.children[0].children[1].innerHTML = eventObject.target.children[0].attributes[1].nodeValue;
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
