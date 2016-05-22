angular
  .module("bikeTheft")
  .factory('TheftService', TheftService);

TheftService.$inject = ["HttpService"];

function TheftService(HttpService) {

  function createNewTheft(theft) {
    var newTheft =
    {
      "theft": {
        "description": theft.description,
        "time": theft.changedDate,
        "latitude": theft.latitude,
        "longitude": theft.longitude
      }
    }
    console.log(newTheft);
    HttpService.newTheft(newTheft);
  }

  return {
    getAll: function(){ return HttpService.getAllThefts(); },
    getTheft: function(id){ return HttpService.getTheftById(id); },
    createNewTheft: function(theft) { return createNewTheft(theft); }
  };
}
