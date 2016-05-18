angular
  .module("bikeTheft")
  .factory("TagService", TagService);

TagService.inject = ["$http", "$q"];

function TagService($http, $q) {

  var apiUrl = "https://bta-back-sk222sw.c9users.io/api/";
  var tagsUrl = apiUrl + "tags/";
  var apiKey = "lsNPmzUUcC8Zd1U67_KQ-A"
  var config = {
  headers: {
      "Api-Key": apiKey
    },
    cache: true
  }

  function theftsByTag(id) {
    return tagsUrl + id + "/?thefts=true";
  }

  return {
    getThefts: function (id) {
      var thefts = $q.defer();

      $http.get(theftsByTag(id), config)
        .then(function success(response) {
          thefts.resolve(response.data);
        }, function error(err) {
          thefts.reject(err);
        });

        return thefts.promise;
    }
  }

}