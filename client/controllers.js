angular.module('Traffic.controllers', [])
.controller('SearchController', ['$scope', '$routeParams', '$location', function($scope, $routeParams, $location) {
    console.log('search controller');
}])
.controller('AgendaController', ['$scope', '$routeParams', '$location', function($scope, $routeParams, $location) {
    console.log('agenda controller');
}])
.controller('AgendaItemController', ['$scope', '$routeParams', '$location', function($scope, $routeParams, $location) {
    console.log('agenda item controller');
}])