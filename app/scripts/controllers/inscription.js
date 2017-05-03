 angular.module('arbitriumApp').controller('InscriptionCtrl', function($location, $scope, $http, $route) {
  var InscriptionCtrl = this;

  $("#inscription").click(function(){
        $(".error").hide();
        $scope.userSchema = {};
        var hasError = false;
        var ageVal = $("#age").val();
        var sexVal = $("#sex").val();

        var sexVal = document.querySelector('input[name = "sex"]:checked').value;

        var passwordVal = $("#pwd1").val();
        var checkVal = $("#pwd2").val();
        if (ageVal<12 || ageVal>99 || isNaN(ageVal)) {
          $("#age").after('<span class="error">Veuillez entrer un age entre 12 et 99 ans</span>');
          hasError = true;
        }
        if (passwordVal == '' || passwordVal.length < 4) {
          $("#pwd1").after('<span class="error">Veuillez entrer un mot de passe de minimum 4 caractères</span>');
          hasError = true;
        } else if (checkVal == '' || checkVal.length < 4) {
          $("#pwd2").after('<span class="error">Veuillez entrer à nouveau votre mot de passe de minimum 4 caractères</span>');
          hasError = true;
        } else if (passwordVal != checkVal ) {
          $("#pwd2").after('<span class="error">Les mots de passes ne sont pas identiques</span>');
          hasError = true;
        }

        if(hasError == false) {
          $scope.userSchema.mail = $("#emailInscr").val();
          $scope.userSchema.sex = sexVal;
          $scope.userSchema.age = ageVal;
          $scope.userSchema.password = passwordVal;


          // Make the request to retrieve or create the user.
          $http({
            method: 'POST',
            url: 'http://hexagon-api-dev.comem.ch/users',
            data: $scope.userSchema
          }).then(function(res) {
            // Va à la page d'accueil
            console.log("Post OK");
            $location.path('/');

          }).catch(function() {

            // If an error occurs, hide the loading message and show an error message.
            InscriptionCtrl.error = "L'inscription est pour le moment indisponible";
          });
        }
    });
});