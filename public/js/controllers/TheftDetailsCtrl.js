angular
  .module("bikeTheft")
  .controller("TheftDetailController", TheftDetailController);

TheftDetailController.$inject = ['$routeParams', 'TheftService', "Flash", "$location", "$localStorage"];

function TheftDetailController($routeParams, theftService, Flash, $location, $localStorage) {
  var vm = this;

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
