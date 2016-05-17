// register the controller to the module
angular
  .module("bikeTheft")
  .controller("TheftListController", TheftListController); // registrera med namn, funktion

// inject the service - no need if we use the registered name as the funtion parameters eg. TheftService
 //TheftListController.$inject = ['TheftService'];

function TheftListController(TheftService) {
  var vm = this;

  TheftService.get()
    .then(function (data) {
      console.log("hedsfkdjfsj", data.data.thefts);
      vm.theftList = data.data.thefts;
    })
    .catch(function (err) {
      vm.flash = "API error: " + err.data.error;
      console.log(err);
      console.log("Error!");
    })
}
