angular
  .module("bikeTheft")
  .controller("LoginController", LoginController);

LoginController.inject = ["LoginService"];

function LoginController(LoginService) {

}