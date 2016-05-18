angular
  .module("bikeTheft")
  .factory("TagService", TagService);

TagService.inject = ["$http", "$q", "HttpService"];

function TagService($http, $q, HttpService) {

  var apiUrl = "https://bta-back-sk222sw.c9users.io/api/";

  var apiKey = "lsNPmzUUcC8Zd1U67_KQ-A"
  var config = {
  headers: {
      "Api-Key": apiKey
    },
    cache: true
  }



  return {
    getThefts: function (id) { return HttpService.getTheftsByTag(id); }
  }
}
