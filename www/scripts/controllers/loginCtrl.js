'use strict';

appControllers.controller('loginCtrl',['$scope','$location',function($scope,$location){
    $scope.status = "[LoginCtrl] - Loaded";
    console.log($scope.status);
    $scope.login = function(){
        $location.path('/app');
    };
}])