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

  $("#login").click(function(){
    $scope.userSchema.mail = $("#emailLogin").val();
    $scope.userSchema.password = $("#pwdLogin").val();

    $http({
      method: 'POST',
      url: 'http://localhost:3005/auth',
      data: $scope.userSchema
    }).then(function(res) {

      AuthService.setAuthToken(res.data.token);
      AuthService.setUserId(res.data.user);
      console.log("Login OK");

      $location.path('/kallax');

    }).catch(function() {

      loginCtrl.error = 'Impossible de se loguer';
    });
  });
});

angular.module('arbitriumApp').controller('LogoutCtrl', function(AuthService, $route, $location) {
  var logoutCtrl = this;

  $("#logout").click(function(){
    AuthService.unsetAuthToken();
    console.log("delog");
    AuthService.unsetUserId();
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
