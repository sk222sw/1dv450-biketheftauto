angular
  .module("bikeTheft")
  .factory("LoginService", LoginService);

LoginService.inject = ["$http", "HttpService", "$localStorage", "$q"];

function LoginService($http, HttpService, $localStorage, $q) {

  login = function(user) {
    var loginPromise = $q.defer();

    HttpService.doLogin(user)
      .then(function(response) {
        var jwt = response.data.jwt;
        console.log(response.data)
        $localStorage.currentUser = { email: user.email, token: jwt };
        $http.defaults.headers.common.Authorization = "Bearer " + jwt;
        loginPromise.resolve(true);
      })
      .catch(function(error) {
        loginPromise.resolve(false)
      })

      return loginPromise.promise;
  }

  logout = function() {
    delete $localStorage.currentUser;
    $http.defaults.headers.common.Authorization = "";
    console.table($http.defaults.headers);
  }

  return {
    login: login
  };

}