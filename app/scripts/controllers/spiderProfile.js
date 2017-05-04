angular.module('arbitriumApp').controller('SpiderprofileCtrl', function($scope, AuthService, $http, $routeParams, $location) {

    function init() {

      // Récupération des valeurs des jauges
      var communication = $routeParams.communication;
      var marketing = $routeParams.marketing;
      var business = $routeParams.business;
      var programmation = $routeParams.programmation;
      var multimedia = $routeParams.multimedia;
      var management = $routeParams.management;


      // Post des données sur profils afin de pouvoir créer des stats sur les types de users et de profils qui sont les plus getté
      $http({
              method: 'POST',
              url: 'http://localhost:3005/profils/',
              data: '{"business": ' + business + ', "marketing": ' + marketing + ', "communication": ' + communication + ', "programmation": ' + programmation + ',"multimedia": ' + multimedia + ', "management": ' + management + ' }'
            }).then(function(resp) {
              console.log('Post OK');
            })

      // Sélection de l'élément graphique
      var ctx = document.getElementById("spiderChart");

      // Création des données du graphique
      var data = {
          labels: ["Communication", "Marketing", "Business", "Programmation", "Multimédia", "Management"],
          datasets: [
            {
              backgroundColor: "rgba(179,181,198,0.2)",
              borderColor: "rgba(0,173,175,1)",
              pointBackgroundColor: "rgba(179,181,198,1)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(179,181,198,1)",
              data: [communication, marketing, business, programmation, multimedia, management]
            }
          ]
      };

      // Couleur de la police
      Chart.defaults.global.defaultFontColor = '#ccc';

      // Création du graphique
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

      // Rating par défaut
      $scope.rating = 3;
    }

    // Lorsque l'utilisateur clique sur terminer
    $scope.theEnd = function() {
      $('#ratingModal').modal('hide');
      $('body').removeClass('modal-open');
      $('.modal-backdrop').remove();

      var finalRate = $scope.rating;

      // Ajout du rating dans la db
      $http({
        method: 'GET',
        url: 'http://hexagon-api-dev.comem.ch/stats',
      }).then(function(res) {

        // PATCH stats (Ajoute un point à l'étoile correspondante)
        $.each(res.data, function(index, value) {
          if(value.stars == finalRate) {
            var numberOf = value.numberOf;
            numberOf++;

            // Patch stats
            $http({
              method: 'PATCH',
              url: 'http://hexagon-api-dev.comem.ch/stats/' + value.id,
              data: '{"numberOf": ' + numberOf + '}'
            }).then(function(resp) {

              // Déconnexion de l'utilisateur

              AuthService.unsetAuthToken();
              AuthService.unsetUserId();
              console.log('Logout OK');
              $location.path('/');
            })
          }
        });

      });
    }

    // Lancement de la fonction init dès que la page est chargée
    init();

});
