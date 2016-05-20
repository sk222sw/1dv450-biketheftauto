angular.module("bikeTheft")
  .controller("TheftController", TheftController);

TheftController.$inject = ["TheftService", "$localStorage", "$location"]; // to be announced

function TheftController(TheftService, $localStorage, $location) {
  if (!$localStorage.currentUser) {
    $location.path("/login");
    return;
  }
  newTheft();

  function newTheft() {
    
  }

}