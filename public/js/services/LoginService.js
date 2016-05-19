angular
  .module("bikeTheft")
  .factory("LoginService", LoginService);

LoginService.inject = ["$http", "HttpService", "$localStorage"];

function LoginService($http, HttpService, $localStorage) {

  login = function(user) {
    HttpService.doLogin(user)
      .then(function(response) {
        var jwt = response.data.jwt;
        console.log(response.data)
        $localStorage.currentUser = { email: "so@nny.com", token: jwt };
        $http.defaults.headers.common.Authorization = "Bearer " + jwt;
        // console.log(jwtHelper.ge tTokenExpirationDate(jwt));
      })
      .then(function() {
        console.table($http.defaults.headers)
      })
      .catch(function(error) {
        // console.log(error);
      })
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