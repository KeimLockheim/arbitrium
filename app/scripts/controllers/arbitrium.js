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

    ArbitriumService.getStories().then(function(stories){
      var stories = stories;

      var conversations = stories[0].Assets.Conversations[0].DialogNodes;
      console.log(conversations);
    });

    arbitriumCtrl.cards = [
        {name: 'clubs', symbol: '♣'},
        {name: 'diamonds', symbol: '♦'},
        {name: 'hearts', symbol: '♥'},
        {name: 'spades', symbol: '♠'}
    ];

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

    arbitriumCtrl.dragstart = function (eventName, eventObject) {
        console.log('dragstart', eventObject);
    };

    arbitriumCtrl.dragmove = function (eventName, eventObject) {
        console.log('dragmove', eventObject);
    };

    arbitriumCtrl.dragend = function (eventName, eventObject) {
      console.log('dragend', eventObject);
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
