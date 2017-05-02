'use strict';

/**
 * @ngdoc function
 * @name arbitriumApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the arbitriumApp
 */
angular.module('arbitriumApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var note = $('#note'),
		ts = new Date(2017, 4, 5), // Date (année,mois,jour) --> mois 4 = mai
		newYear = true;

	if((new Date()) > ts){
		// Jours*heures*minutes*secondes
		ts = (new Date()).getTime() + 35*24*60*60*1000;
		newYear = false;
	}

	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){

			var message = "";

			message += days + " jour" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " heure" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " et ";
			message += seconds + " seconde" + ( seconds==1 ? '':'s' ) + " <br />";

/*			if(newYear){
				message += "left until the new year!";
			}
			else {
				message += "left to 10 days from now!";
			}
*/
			note.html(message);
		}
	});


  });
