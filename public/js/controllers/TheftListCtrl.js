angular
  .module("bikeTheft")
  .controller("TheftListController", TheftListController);

 TheftListController.$inject = ['TheftService', "Flash"];

function TheftListController(TheftService, Flash) {
  var vm = this;

  vm.flash = function(type, message) {
    var id = Flash.create(type, message, 0, {class: 'custom-class', id: 'custom-id'}, true);
  }

  // TODO: Figure out why this runs twice.
  TheftService.getAll()
    .then(function (data) {
      vm.theftList = data.data.thefts;
    })
    .catch(function (err) {
      var flashMessage = err.data !== null ?
                          "API error: " + err.data.error :
                          "Can't connect to the API server, please try again later.";
      vm.flash("error", flashMessage);
    });
}
