'use strict';


angular.module('arbitriumApp').factory('ArbitriumService', function($http, apiUrl) {
  var service = {};

  service.get = function (checkboxState){

  }


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
  .controller('ArbitriumCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var arbitriumCtrl = this;

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
