angular
  .module("bikeTheft")
  .factory('TheftService', TheftService);

TheftService.inject = ["HttpService"];

function TheftService(HttpService) {
  return {
    getAll: function(){ return HttpService.getAllThefts(); },
    getTheft: function(id){ return HttpService.getTheftById(id); }
  };
}