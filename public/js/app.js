angular
  .module("bikeTheft", ['ngRoute', "ngFlash", "angular-jwt", "ngStorage", "ngMap"])
  .config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: '/partials/index.html'
        })
        .when('/login', {
          templateUrl: '/partials/login.html',
          controller: 'LoginController',
          controllerAs: 'login'
        })
        .when('/logout', {
          templateUrl: "/partials/index.html",
          controller: 'LogoutController',
        })
        .when('/new', {
          templateUrl: '/partials/new-theft.html',
          controller: 'TheftController',
          controllerAs: 'theft'
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
        .when("/tags/:id", {
          templateUrl: '/partials/tag-detail.html',
          controller: 'TagDetailsController',
          controllerAs: 'tag'
        })
        .otherwise({
          redirectTo: '/'
        });
      $locationProvider.html5Mode(true);

    }]);