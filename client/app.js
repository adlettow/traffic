angular.module('Traffic', ['ngRoute', 'ngResource', 'Traffic.controllers'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
            templateUrl: 'views/search.html',
            controller: 'SearchController'
        })
        .when('/agenda', {
            templateUrl: 'views/agenda.html',
            controller: 'AgendaController'
        })
        .when('/agendaitem', {
            templateUrl: 'views/agendaitem.html',
            controller: 'AgendaItemController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);