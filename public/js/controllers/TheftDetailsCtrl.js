angular
  .module("bikeTheft")
  .controller("TheftDetailController", TheftDetailController);

TheftDetailController.$inject = ['$routeParams', 'TheftService', "Flash"];

function TheftDetailController($routeParams, theftService, Flash) {
  var vm = this;

  vm.flash = function(type, message) {
    var id = Flash.create(type, message, 0, {class: 'custom-class', id: 'custom-id'}, true);
  }

  theftService.getTheft($routeParams.id)
    .then(function handleTheftData(theft) {
      console.log(theft.data.theft);
      vm.theft = theft.data.theft
    })
    .catch(function handleError(err) {
      vm.flash("error", err.data.error);
      console.error("hej", err);
    })
  // var vm = this;
  // var theTheft = theftService.getTheft($routeParams.id);
  // vm.name = theTheft.name;
  // vm.age = theTheft.age;
}
