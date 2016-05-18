angular
  .module("bikeTheft")
  .factory('TheftService', TheftService);

TheftService.inject = ["$http", "$q"];

function TheftService($http, $q) {

  var apiUrl = "https://bta-back-sk222sw.c9users.io/api/";
  var theftsUrl = apiUrl + "thefts/";
  var apiKey = "lsNPmzUUcC8Zd1U67_KQ-A"
  var config = {
  headers: {
      "Api-Key": apiKey
    },
    cache: true
  }

  /**
   * returns the API url for getting one theft
   *
   * @param id theft ID from
   * @returns string url
   */
  function oneTheft(id) {
    return theftsUrl + id;
  }

  return {

    getAll: function() {
      var getAll = $q.defer();

      $http.get(theftsUrl, config)
        .then(function success(response) {
          getAll.resolve(response);
        }, function error(err) {
          getAll.reject(err);
        });

      return getAll.promise;
    },

    getTheft: function(id) {

      var getTheft = $q.defer();

      $http.get(oneTheft(id), config)
        .then(function success(response) {
          getTheft.resolve(response);
        }, function error(err) {
          getTheft.reject(err);
        })

      return getTheft.promise;
    }

  };
}