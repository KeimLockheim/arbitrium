'use strict';

/**
 * @ngdoc function
 * @name arbitriumApp.controller:BusinessCtrl
 * @description
 * # BusinessCtrl
 * Controller of the business view
 */
angular.module('arbitriumApp').controller('BusinessCtrl', ['dragularService', function TodoCtrl(dragularService) {
  dragularService('.containerVertical');
}]);
