'use strict';

appControllers.controller('mainCtrl',['$scope',function($scope){
    $scope.status = "[MainCtrl] - Loaded";
    console.log($scope.status);
}])