'use strict';

angular.module('bhendi')
  .controller('NavbarCtrl', function ($scope) {
    $scope.date = new Date();
    $scope.content = {
    	active: false
    };
  });
