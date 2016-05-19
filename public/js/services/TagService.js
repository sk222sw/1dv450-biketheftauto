angular
  .module("bikeTheft")
  .factory("TagService", TagService);

TagService.inject = ["$http", "$q", "HttpService"];

function TagService($http, $q, HttpService) {
  return {
    getThefts: function (id) { return HttpService.getTheftsByTag(id); }
  }
}
