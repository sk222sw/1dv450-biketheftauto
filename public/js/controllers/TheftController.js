angular.module("bikeTheft")
  .controller("TheftController", TheftController);

TheftController.$inject = ["TheftService", "$localStorage", "$location", "Flash"]; // to be announced

function TheftController(TheftService, $localStorage, $location, $scope, Flash) {
  var vm = this;
  vm.theftAddress = "hej";

  if (!$localStorage.currentUser) {
    $location.path("/login");
    return;
  }

  vm.flash = function(type, message) {
    var id = Flash.create(type, message, 0, {class: 'custom-class', id: 'custom-id'}, true);
  }


  vm.createNewTheft = function (newTheft) {
    // dont do anything if things aren't valid. maybe there's some angular magic for this. #TODO
    if (newTheft == undefined
        || newTheft == null
        || newTheft.description == undefined
        || newTheft.date == undefined
        || isDateInTheFuture(newTheft.date)) {
      return;
    }
    TheftService.createNewTheft(newTheft);
  }

  /**
  * returns true if the argument date is in the future
  */
  function isDateInTheFuture(date) {
    return new Date(date).getUnixTime() > Date.now() / 1000;
  }

  vm.getPositionFromMarker = function(marker) {
    vm.theftAddress = marker.latLng.lat() + "," + marker.latLng.lng();
  }

  function newTheft() {

  }

}
