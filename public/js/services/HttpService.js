angular.module("bikeTheft")
  .factory("HttpService", HttpService);

HttpService.inject = ["$http", "$q"];

function HttpService($http, $q) {

  var apiUrl = "https://bta-back-sk222sw.c9users.io/api/";
  var theftsUrl = apiUrl + "thefts/";
  var tagsUrl = apiUrl + "tags/";
  var apiKey = "lsNPmzUUcC8Zd1U67_KQ-A"
  var headers = {
      "Api-Key": apiKey
  };

  /**
   * returns the API url for getting one theft
   *
   * @param id theft ID from
   * @returns string url
   */
  function oneTheft(id) {
    return theftsUrl + id;
  }

 /**
  * (description)
  *
  * @param method string HTTP/AJAX method
  * @param url string api url
  * @returns promise object with response data or error
  */
 function request(method, url) {
    var req = $q.defer();
    var config = {
      method: method,
      url: url,
      headers: headers,
      cache: true
    }

    $http(config)
      .then(function success(response) {
        console.log(response)
        req.resolve(response)
      }, function error(err){
        req.reject(err);
      });

    return req.promise;
 }

  function theftsByTag(id) {
    return tagsUrl + id + "/?thefts=true";
  }

  return {
    getAllThefts: function() { return request("GET", theftsUrl); },
    getTheftById: function(id) { return request("GET", oneTheft(id)); },
    getTheftsByTag: function(id) { return request("GET", theftsByTag(id)); }
  }
}
