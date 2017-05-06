/**
 * @ngdoc function
 * @name arbitriumApp.controller:LoginCtrl
 @name arbitriumApp.controller:LogoutCtrl
 * @description Controller de login et de logout
 * # LoginCtrl & LogoutCtrl
 * Controller of the arbitriumApp
 */


//Service d'authentification
angular.module('arbitriumApp').factory('AuthService', function(store) {
  var service = {

    authToken: store.get('authToken'),

    setAuthToken: function(token) {
      service.authToken = token;
      store.set('authToken', token);
    },

    unsetAuthToken: function() {
      service.authToken = null;
      store.remove('authToken');
    },

    userInf: store.get('userInf'),

    setUserId: function(userId) {
      service.userInf = userId;
      store.set('userInf', userId);
    },

    unsetUserId: function() {
      service.userInf = null;
      store.remove('userInf');
    }

  };

  return service;
});

angular.module('arbitriumApp').controller('LoginCtrl' ,function(AuthService, $location, $http, $scope, $route) {
  var LoginCtrl = this;
  $scope.userSchema = {};
  $(".error").hide();

  //Lors du clique sur le bouton de login lance la fonction
  $("#login").click(function(){
    //Récupération des valeurs
    $scope.userSchema.mail = $("#emailLogin").val();
    $scope.userSchema.password = $("#pwdLogin").val();
    //Envoie des valeurs par post
    $http({
      method: 'POST',
      url: 'http://hexagon-api-dev.comem.ch/auth',
      data: $scope.userSchema
    }).then(function(res) {

      AuthService.setAuthToken(res.data.token);
      AuthService.setUserId(res.data.user);
      console.log("Login OK");
      // Redirection sur la page kallax
      $location.path('/kallax');

    }).catch(function() {

      loginCtrl.error = 'Impossible de se loguer';
    });
  });
});

angular.module('arbitriumApp').controller('LogoutCtrl', function(AuthService, $route, $location, $scope) {
  var LogoutCtrl = this;

  //Lors du clique sur le bouton logout, delogue l'utilisateur
  $("#logout").click(function(){

    //console.log(AuthService.userInf);
    //console.log(AuthService.authToken);
    AuthService.unsetAuthToken();
    //console.log("delog");
    AuthService.unsetUserId();
    //console.log(AuthService.userInf);
    //console.log(AuthService.authToken);
    console.log("Logout OK");
    $location.path('/');
  });
});

angular.module('arbitriumApp').factory('AuthInterceptor', function(AuthService) {
  return {

    // The request function will be called before all requests.
    // In it, you can modify the request configuration object.
    request: function(config) {

      // If the user is logged in, add the Authorization header (unless it's already there)
      if (AuthService.authToken && !config.headers.Authorization) {
        config.headers.Authorization = 'Bearer ' + AuthService.authToken;
      }
      return config;
    }
  };
});

angular.module('arbitriumApp').config(function($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptor');
});
