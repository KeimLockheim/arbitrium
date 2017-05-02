angular.module('arbitriumApp').controller('KallaxCtrl', function($scope, AuthService, $http) {

  // Récupère l'utilisateur actuel
  var actualUserId = AuthService.userInf.id;

  // Instantiation des variables
  $scope.imageHexagon = 'jauge.png';
  $scope.hrefHexagonImg = '';
  var nbMissionsSucceeded = 0;
  var imgHexagonFill = '';

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
        imgHexagonFill = 'jauge_1.png';
        break;
      case 2:
        imgHexagonFill = 'jauge_2.png';
        break;
      case 3:
        imgHexagonFill = 'jauge_3.png';
        break;
      case 4:
        imgHexagonFill = 'jauge_4.png';
        $scope.hrefHexagonImg = '/#!/arbitrium';
        break;
      default:
    }

    // Changement du nom de l'image dans le scope
    $scope.imageHexagon = imgHexagonFill;

  });

});
