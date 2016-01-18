'use strict';

appControllers.controller('applicationCtrl',['$scope','$rootScope',
    function($scope,$rootScope){
        $scope.status = "[AppplicationCtrl] - Loaded";
        console.log($scope.status);
    }]);
