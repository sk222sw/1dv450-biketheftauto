angular
  .module("bikeTheft")
  .controller("TheftDetailController", TheftDetailController);

TheftDetailController.$inject = ['$routeParams', 'TheftService', "Flash", "$location", "$localStorage", "NgMap"];

function TheftDetailController($routeParams, theftService, Flash, $location, $localStorage, NgMap) {
  var vm = this;

  NgMap.getMap().then(function(map) {
    // vm.map.hideInfoWindow("map-info-window")
    vm.map = map;
  });

  vm.flash = function(type, message) {
    var id = Flash.create(type, message, 0, {class: 'custom-class', id: 'custom-id'}, true);
  }

  theftService.getTheft($routeParams.id)
    .then(function handleTheftData(theft) {
      vm.theft = theft.data.theft
    })
    .catch(function handleError(err) {
      vm.flash("error", err.data.error);
    });
}
