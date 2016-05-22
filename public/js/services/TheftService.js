angular
  .module("bikeTheft")
  .factory('TheftService', TheftService);

TheftService.$inject = ["HttpService"];

function TheftService(HttpService) {

  function createNewTheft(theft) {
    console.log(theft);
    // var newTheft = {
    //   "theft": {
    //     "description": theft.description,
    //     "time": theft.date,
    //     "latitude": theft.,
    //     "longitude": "15.933407",
    //     "tags": [
    //       { "name": "katt" },
    //       { "name": "hund" }
    //     ]
    // }
    // HttpService.newTheft(theft)
  }

  return {
    getAll: function(){ return HttpService.getAllThefts(); },
    getTheft: function(id){ return HttpService.getTheftById(id); },
    createNewTheft: function(theft) { return createNewTheft(theft); }
  };
}
