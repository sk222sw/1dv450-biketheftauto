angular
  .module("bikeTheft")
  .controller("LogoutController", LogoutController);

LogoutController.$inject = ["LoginService", "$location", "$localStorage"];

function LogoutController(LoginService, $location, $localStorage) {
  delete $localStorage.currentUser;
  $location.path("/");
  if ($location.currentUser) {
    console.log($localStorage.currentUser)
    return;
  } else {
    console.log($localStorage.currentUser);
    console.log("nboee");
  }
  // console.log("pendejo")
  // LoginService.logout();
  // $location.path("/")
}