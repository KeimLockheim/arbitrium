angular.module('arbitriumApp.auth', ['angular-storage']).factory('AuthService', function(store) {
  var service = {
    authToken: store.get('authToken'),

    setAuthToken: function(token) {
      service.authToken = token;
      store.set('authToken', token);
    },

    unsetAuthToken: function() {
      service.authToken = null;
      store.remove('authToken');
    }
  };

  return service;
});

angular.module('arbitriumApp.auth', ['angular-storage']).controller('LoginCtrl', function(AuthService, $http, $scope, $route) {
  var loginCtrl = this;
  $scope.userSchema = {};

  // Add the register function to the scope.
  loginCtrl.logIn = function() {

    // Forget the previous error (if any).
    delete loginCtrl.error;
    $scope.userSchema.mail = $("#email").val();
    $scope.userSchema.password = $("#pwd1").val();

    $http({
      method: 'POST',
      url: 'http://hexagon-api-dev.comem.ch/auth',
      data: $scope.userSchema
    }).then(function(res) {

      // If successful, give the token to the authentication service.
      AuthService.setAuthToken(res.data.token);

      // Go to the issue creation tab.
      $route.go('/');

    }).catch(function() {

      // If an error occurs, hide the loading message and show an error message.
      $ionicLoading.hide();
      loginCtrl.error = 'Could not log in.';
    });
  };
});

/*angular.module('arbitriumApp').controller('LogoutCtrl', function(AuthService, $route) {
  var logoutCtrl = this;

  logoutCtrl.logOut = function() {
    AuthService.unsetAuthToken();
    $route.go('login');
  };
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
});*/
