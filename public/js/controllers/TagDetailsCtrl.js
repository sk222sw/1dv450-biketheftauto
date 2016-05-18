angular
  .module("bikeTheft")
  .controller("TagDetailsController", TagDetailsController);

TagDetailsController.$inject = ["TagService", "$routeParams", "Flash"];

function TagDetailsController(TagService, $routeParams, Flash) {
  var vm = this;

  vm.flash = function(type, message) {
    var id = Flash.create(type, message, 0, {class: 'custom-class', id: 'custom-id'}, true);
  }

  vm.showTheftInfo = function() {
    console.log(this);
  }

  vm.active = false;

  TagService.getThefts($routeParams.id)
    .then(function handleTheftsByTag(data){
      console.log(data.data.tag);
      vm.tag = data.data.tag;
      vm.theftsByTag = data.data.thefts;
    })
    .catch(function handleError(err) {
        vm.flash("error", err.data.error);
    })

}