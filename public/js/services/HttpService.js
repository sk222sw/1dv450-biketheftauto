angular.module("bikeTheft")
  .factory("HttpService", HttpService);

HttpService.inject = ["$http", "$q"];

function HttpService($http, $q) {

  var apiUrl = "https://bta-back-sk222sw.c9users.io/api/";
  var theftsUrl = apiUrl + "thefts/";
  var tagsUrl = apiUrl + "tags/";
  var loginUrl = "https://bta-back-sk222sw.c9users.io/knock/auth_token";
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
 function request(method, url, data) {
    var req = $q.defer();
    var config = {
      method: method,
      url: url,
      headers: headers,
      data: data,
      cache: true
    }

    $http(config)
      .then(function success(response) {
        req.resolve(response)
      }, function error(err){
        req.reject(err);
      });

    return req.promise;
 }

  function theftsByTag(id) {
    return tagsUrl + id + "/?thefts=true";
  }

  function login(user) {
    var data = {
      "auth": {
        "email": user.email,
        "password": user.password
      }
    };
    return request("POST", loginUrl, data);
  }

  return {
    getAllThefts: function() { return request("GET", theftsUrl); },
    getTheftById: function(id) { return request("GET", oneTheft(id)); },
    getTheftsByTag: function(id) { return request("GET", theftsByTag(id)); },
    doLogin: function(user) { return login(user); }
  }
}
