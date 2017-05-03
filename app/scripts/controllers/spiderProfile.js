angular.module('arbitriumApp').controller('SpiderprofileCtrl', function($scope, AuthService, $http, $routeParams) {


    function init() {

      var communication = $routeParams.communication;
      var marketing = $routeParams.marketing;
      var business = $routeParams.business;
      var programmation = $routeParams.programmation;
      var multimedia = $routeParams.multimedia;
      var management = $routeParams.management;

      var ctx = document.getElementById("spiderChart");

      var data = {
          labels: ["Communication", "Marketing", "Business", "Programmation", "Multimédia", "Management"],
          datasets: [
            {
              backgroundColor: "rgba(179,181,198,0.2)",
              borderColor: "rgba(100,200,45,1)",
              pointBackgroundColor: "rgba(179,181,198,1)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(179,181,198,1)",
              data: [communication, marketing, business, programmation, multimedia, management]
            }
          ]
      };

      Chart.defaults.global.defaultFontColor = '#ccc';

      var myRadarChart = new Chart(ctx, {
          type: 'radar',
          data: data,
          options: {
            animation: {
              duration: 0
            },
            legend: {
              display: false,
              onClick: null
            },
            scale: {
              ticks: {
                beginAtZero: true,
                showLabelBackdrop: false
              }
            }
          }
      });

    }

    init();

});
