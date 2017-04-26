'use strict';

angular.module('citizen-engagement').factory('IssuesService', function($http, apiUrl) {

  var service = {};

  // service.retrieveQuestionsPage = function(page, interest) {
  //   page = page || 1; // Start from page 1

  //   var requestData = {};

  //   if (interest) {
  //     requestData.interest = interest;
  //   }

  //   // GET the current page
  //   return $http({
  //     method: 'POST',
  //     url: apiUrl + '/questions/searches',
  //     params: {
  //       page: page
  //     },
  //     data: requestData
  //   })
  // };

  service.checkResults = function() {
    
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
  .controller('QuizzCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var quizzCtrl = this;




  });