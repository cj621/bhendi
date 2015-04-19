'use strict';

angular.module('bhendi')
  .controller('TodoCtrl', function ($scope) {
    $scope.date = new Date();
    $scope.content = {
    	active: false
    };
  });
