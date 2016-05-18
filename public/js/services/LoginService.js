angular
  .module("bikeTheft")
  .factory("LoginService", LoginService);

LoginService.inject = ["$http"];

function LoginService($http) {


  return {};

}