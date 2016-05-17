angular
  .module("bikeTheft", ['ngRoute'])
  .config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: '/partials/index.html'
        })
        .when('/thefts', {
          templateUrl: '/partials/theft-list.html',
          controller: 'TheftListController',
          controllerAs: 'thefts'
        })
        .when('/theft/:id', {
          templateUrl: '/partials/theft-detail.html',
          controller: 'TheftDetailController',
          controllerAs: 'theft'
        })
        .otherwise({
          redirectTo: '/'
        });
      $locationProvider.html5Mode(true);

    }]);