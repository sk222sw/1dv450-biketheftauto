angular.module("bikeTheft")
  .factory("HttpService", HttpService);

HttpService.inject = ["$http", "$q", "$localStorage"];

function HttpService($http, $q, $localStorage) {

  var apiUrl = "https://bta-back-sk222sw.c9users.io/api/";
  var theftsUrl = apiUrl + "thefts/";
  var allThefts = theftsUrl + "?limit=100";
  var tagsUrl = apiUrl + "tags/";
  var loginUrl = "https://bta-back-sk222sw.c9users.io/knock/auth_token";
  var apiKey = "lsNPmzUUcC8Zd1U67_KQ-A"
  var headers = {
      "Content-Type": "application/json",
      "Api-Key": apiKey,
      "Authorization": jsonWebToken()
  };

  function jsonWebToken() {
    console.log($localStorage.currentUser);
    return $localStorage.currentUser.token || "";
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

  // refactor this to to be sent through the other service layers
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
    getAllThefts: function() { return request("GET", allThefts); },
    getTheftById: function(id) { return request("GET", oneTheft(id)); },
    getTheftsByTag: function(id) { return request("GET", theftsByTag(id)); },
    doLogin: function(user) { return login(user); },
    newTheft: function(theft) { return request("POST", theftsUrl, theft); }
  }
}
