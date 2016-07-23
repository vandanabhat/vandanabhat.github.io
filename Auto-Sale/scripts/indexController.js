'use strict';
angular.module('autoSales').controller('indexController',[ '$scope',
    function ($scope) {
    $scope.toggleSearch = function () {
        $scope.showSearch = !$scope.showSearch;
        var menuExpanded =  $('button.navbar-toggle').attr('aria-expanded');
        if(menuExpanded == "true"){
            $('button.navbar-toggle').attr('aria-expanded', 'false');
            $('div.navbar-collapse').removeClass('in');
        }
    };
}]);