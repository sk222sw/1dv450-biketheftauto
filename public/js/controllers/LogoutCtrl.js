angular
  .module("bikeTheft")
  .controller("LogoutController", LogoutController);

LogoutController.$inject = ["$location", "$localStorage"];

function LogoutController($location, $localStorage) {
  // Sorry, this controller isn't that exciting right now. Go watch a movie if you want some excitement.
  delete $localStorage.currentUser;
  $location.path("/");
}