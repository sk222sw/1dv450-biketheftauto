angular
  .module("bikeTheft")
  .controller("LoginController", LoginController);

LoginController.$inject = ["LoginService", "Flash", "jwtHelper", "$localStorage", "$location"];

function LoginController(LoginService, Flash, jwtHelper, $localStorage, $location) {
  if ($localStorage.currentUser) {
    $location.path("/thefts");
    return;
  }
  var vm = this;

  vm.flash = function(type, message) {
    var id = Flash.create(type, message, 0, {class: 'custom-class', id: 'custom-id'}, true);
  }

  vm.login = function(user) {
    if ($localStorage.currentUser) {

    } else {
      LoginService.login(user)
        .then(function(isLoggedIn) {
          if (isLoggedIn) {
            vm.flash("success", "logged in");
          } else {
            vm.flash("error", "Wrong email or password.");
          }
        });
    }
  }
}
