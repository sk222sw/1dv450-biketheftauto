angular
  .module("bikeTheft")
  .controller("TheftListController", TheftListController);

 TheftListController.$inject = ['TheftService', "Flash", "jwtHelper", "$localStorage", "NgMap"];

function TheftListController(TheftService, Flash, jwtHelper, $localStorage, NgMap) {
  var vm = this;

  NgMap.getMap().then(function(map) {
    console.log('map', map);
    vm.map = map;
  });

  vm.flash = function(type, message) {
    var id = Flash.create(type, message, 0, {class: 'custom-class', id: 'custom-id'}, true);
  }

  vm.showInfo = function(e, theft) {
    vm.selectedTheft = theft;
    vm.map.showInfoWindow('map-info-window', theft.id);
  };

  TheftService.getAll()
    .then(function (data) {
      vm.theftList = data.data.thefts;
      console.log(vm.theftList);
    })
    .catch(function (err) {
      var flashMessage = err.data !== null ?
                          "API error: " + err.data.error :
                          "Can't connect to the API server, please try again later.";
      vm.flash("error", flashMessage);
    });
}
