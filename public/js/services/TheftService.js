
angular
  .module("bikeTheft")
  .factory('TheftService', TheftService);

TheftService.inject = ["$http", "$q", "$timeout"];

function TheftService($http, $q, $timeout) {

  return {
    get:function() {

      var getAll = $q.defer();

      var config = {
        headers: {
          "Api-Key": "lsNPmzUUcC8Zd1U67_KQ-AHEJ"
        }
      }

      $http.get("https://bta-back-sk222sw.c9users.io/api/thefts", config)
        .then(function success(response) {
          getAll.resolve(response);
        }, function error(err) {
          getAll.reject(err);
        });

      return getAll.promise;
    },

    doShit: function () {
      console.log("hej");
      var task = $q.defer();

      $timeout(function() {
        console.log("he");
        task.resolve();
      }, 1000);

      return task.promise;
    },

    getTheft:function(id) {
      var result = theftList.filter(function(p) {
          return p.id.toString() === id.toString();
      })[0];

      return result;
    }

  };
}