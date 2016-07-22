'use strict';
angular.module('autoSales',[
    'ui.router'
]).config(['$stateProvider' ,'$urlRouterProvider', function ($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/homeContent.html'
        });
    $urlRouterProvider
        .otherwise('/home');
}]);