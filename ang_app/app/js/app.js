var app = angular.module("myApp", ['ngRoute', 'ngResource']);


app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'MainController'
      })
      .when('/cats', {
        templateUrl: 'partials/cats/index.html',
        controller: 'CatsIndexController'
      })
      .when('/cats/:id', {
        templateUrl: 'partials/cats/show.html',
        controller: 'CatsShowController'
      })
    $locationProvider.html5Mode(true);
});
