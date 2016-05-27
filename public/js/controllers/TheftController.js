angular
  .module("bikeTheft")
  .controller("TheftController", TheftController);

TheftController.$inject = ["TheftService", "Flash", "$localStorage", "$location"];

function TheftController(TheftService, Flash, $localStorage, $location, $scope) {
  var vm = this;
  vm.theftAddress = "";
  if (!$localStorage.currentUser) {
    $location.path("/login");
    return;
  }

  vm.date = "2012-02-01";

  vm.flash = function(type, message) {
    var id = Flash.create(type, message, 5000, {class: 'custom-class', id: 'custom-id'}, true);
  }

  vm.createNewTheft = function (newTheft) {
    // dont do anything if things aren't valid. maybe there's some angular magic for this. #TODO
    if ( newTheft.description == undefined
        || newTheft.date == undefined
        || dateIsInTheFuture(newTheft.date)
        || theftPositionIsMissing()) {
      return;
    }
    newTheft.latitude = vm.theftAddress.split(",")[0];
    newTheft.longitude = vm.theftAddress.split(",")[1];

    newTheft.changedDate = moment(newTheft.date).format("YYYY-MM-D").toString();
    TheftService.createNewTheft(newTheft);
  }

  /**
  * returns true if the argument date is in the future
  */
  function dateIsInTheFuture(date) {
    if (new Date(date).getUnixTime() > Date.now() / 1000) {
      vm.flash("error", "Date must be in the past.");
      return true;
    } return false;
  }

  function theftPositionIsMissing() {
    if (vm.theftAddress === "") {
      vm.flash("error", "Please use the map to point out the place of the theft.")
      return true;
    }
    return false;
  }

  vm.getPositionFromMarker = function(marker) {
    vm.theftAddress = marker.latLng.lat() + "," + marker.latLng.lng();
  }
}
