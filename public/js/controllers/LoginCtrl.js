angular
  .module("bikeTheft")
  .controller("LoginController", LoginController);

LoginController.inject = ["LoginService", "Flash", "jwtHelper"];

function LoginController(LoginService, Flash, jwtHelper) {
  var vm = this;

  vm.flash = function(type, message) {
    var id = Flash.create(type, message, 0, {class: 'custom-class', id: 'custom-id'}, true);
  }
  // LoginService.Login();

  vm.login = function(user) {
    LoginService.login(user)
  }

  // LoginService.login()
    // .then(function(response) {
    //   vm.flash("success", "Logged in!");
    //   var jwt = response.data.jwt;
    //   console.log(jwt);
    //   console.log(jwtHelper.getTokenExpirationDate(jwt));
    // })
    // .catch(function(error) {
    //   vm.flash("error", "User authentication failed.");
    //   console.log(error);
    // })
}