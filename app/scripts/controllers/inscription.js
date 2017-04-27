angular.module('arbitriumApp').controller('InscriptionCtrl', function($scope, $http) {
  var InscriptionCtrl = this;

  /*// Add the register function to the scope.
  registerCtrl.register = function() {

    // Forget the previous error (if any).
    delete registerCtrl.error;

    // Show a loading message if the request takes too long.
    $ionicLoading.show({
      template: 'Registering...',
      delay: 750
    });

    // Make the request to retrieve or create the user.
    $http({
      method: 'POST',
      url: apiUrl + '/users',
      data: registerCtrl.user
    }).then(function(res) {

      // Hide the loading message.
      $ionicLoading.hide();

      // Set the next view as the root of the history.
      // Otherwise, the next screen will have a "back" arrow pointing back to the registering screen.
      $ionicHistory.nextViewOptions({
        disableBack: true,
        historyRoot: true
      });

      // Go to the login page.
      $state.go('login');

    }).catch(function() {

      // If an error occurs, hide the loading message and show an error message.
      $ionicLoading.hide();
      registerCtrl.error = 'Could not register.';
    });
  };*/

  $("#inscription").click(function(){
        $(".error").hide();
        var hasError = false;
        var ageVal = $("#age").val();
        var passwordVal = $("#pwd1").val();
        var checkVal = $("#pwd2").val();
        if (ageVal<12 || ageVal>99 || isNaN(ageVal)) {
          $("#age").after('<span class="error">Veuillez entrer un age entre 12 et 99 ans</span>');
          hasError = true;
        }
        if (passwordVal == '' || passwordVal.length < 6) {
          $("#pwd1").after('<span class="error">Veuillez entrer un mot de passe de minimum 6 caractères</span>');
          hasError = true;
        } else if (checkVal == '' || checkVal.length < 6) {
          $("#pwd2").after('<span class="error">Veuillez entrer à nouveau votre mot de passe de minimum 6 caractères</span>');
          hasError = true;
        } else if (passwordVal != checkVal ) {
          $("#pwd2").after('<span class="error">Les mots de passes ne sont pas identiques</span>');
          hasError = true;
        }


        if(hasError == false) {
          // Make the request to retrieve or create the user.
          $http({
            method: 'POST',
            url: 'http://hexagon-api-dev.comem.ch/users',
            data: InscriptionCtrl.userSchema
          }).then(function(res) {
            // Va à la page d'accueil
            $window.location.href = '/';

          }).catch(function() {

            // If an error occurs, hide the loading message and show an error message.
            InscriptionCtrl.error = 'Linscription est pour le moment indisponible';
          });
        }
    });
  

});

