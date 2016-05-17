angular
  .module("bikeTheft")
  .controller("TheftDetailController", TheftDetailController);

TheftDetailController.$inject = ['$routeParams', 'TheftService'];

function TheftDetailController($routeParams, theftService) {
  var vm = this;
  var theTheft = theftService.getTheft($routeParams.id);
  vm.name = theTheft.name;
  vm.age = theTheft.age;
}
