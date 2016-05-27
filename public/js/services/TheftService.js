angular
  .module("bikeTheft")
  .factory('TheftService', TheftService);

TheftService.$inject = ["HttpService"];

function TheftService(HttpService) {

  function makeTags(tagString) {
    var tagArray = tagString.split(",");
    var tags = [];
    for (var i = 0; i < tagArray.length; i++) {
      tags.push({name: tagArray[i]});
    }
    return tags;
  }

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
    if (theft.tags !== undefined) {
      newTheft.theft.tags = makeTags(theft.tags);
    }
    HttpService.newTheft(newTheft);
  }

  return {
    getAll: function(){ return HttpService.getAllThefts(); },
    getTheft: function(id){ return HttpService.getTheftById(id); },
    createNewTheft: function(theft) { return createNewTheft(theft); }
  };
}
