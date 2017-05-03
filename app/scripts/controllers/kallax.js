angular.module('arbitriumApp').controller('KallaxCtrl', function($scope, AuthService, $http) {

  // Récupère l'utilisateur actuel
  var actualUserId = AuthService.userInf.id;

  // Instantiation des variables
  $scope.imageHexagon = 'jauge.png';
  $scope.hrefHexagonImg = '';
  var nbMissionsSucceeded = 0;

  $scope.showBasic = true;
  $scope.showOne = false;
  $scope.showTwo = false;
  $scope.showThree = false;
  $scope.showFour = false;

  // Récupération de l'état de complétion des activités
  $http({
    method: 'GET',
    url: 'http://hexagon-api-dev.comem.ch/users/'+ actualUserId,
  }).then(function(res) {

    // Si la mission développement est remplie
    if(res.data.codingDone) {
      nbMissionsSucceeded++;
    }

    // Si la mission marketing est remplie
    if(res.data.marketingComDone) {
      nbMissionsSucceeded++;
    }

    // Si la mission business/management est remplie
    if(res.data.businessManagementDone) {
      nbMissionsSucceeded++;
    }

    // Si la mission multimedia est remplie
    if(res.data.multimediaDone) {
      nbMissionsSucceeded++;
    }

    // Affichage des images en fonction du nombre de missions complétées
    switch (nbMissionsSucceeded) {
      case 1:
          $scope.showBasic = false;
          $scope.showOne = true;
        break;
      case 2:
          $scope.showBasic = false;
        $scope.showTwo = true;
        break;
      case 3:
        $scope.showBasic = false;
        $scope.showThree = true;
        break;
      case 4:
        $scope.showBasic = false;
        $scope.showFour = true;
        $scope.hrefHexagonImg = '/#!/arbitrium';
        break;
      default:
    }

  });

});
