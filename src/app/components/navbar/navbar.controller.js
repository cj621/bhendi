(function () {
  'use strict';

angular.module('bhendi')
  .controller('NavbarCtrl',  function ($scope,$mdSidenav,$mdDialog) {
  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };

  $scope.menu=[
  {
    title :'Events',
    link :''
  },
  {
    title : 'Time table',
    link : ''
  },
  {
    title : 'Bulletin Board',
    link : ''
  }
  ];

  $scope.admin=[

  {
    title: 'Settings',
    link: ''
  }
  ];

$scope.showAdd = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      template: '<md-dialog aria-label="Mango (Fruit)"> <md-content class="md-padding"> <form name="userForm"> <div layout layout-sm="column"> <md-input-container flex> <label>Event Name</label> <input ng-model="user.firstName" > </md-input-container>  <md-input-container flex> <label>Date</label> <input ng-model="theMax"> </md-input-container> </div> <div layout layout-sm="column">  <md-input-container flex> <label>FEES</label> <input ng-model="user.address"> </md-input-container> <md-input-container flex> <label>Event type</label> <input ng-model="user.address"> </md-input-container>   </div> <md-input-container flex> <label>Event Detail</label> <textarea ng-model="user.biography" columns="1" md-maxlength="250"></textarea> </md-input-container> </form> </md-content> <div class="md-actions" layout="row"> <span flex></span> <md-button ng-click="answer(\'not useful\')"> Cancel </md-button> <md-button ng-click="answer(\'useful\')" class="md-primary"> Save </md-button> </div></md-dialog>',
      targetEvent: ev,
    })
    .then(function(answer) {
      $scope.alert = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.alert = 'You cancelled the dialog.';
    });
  };

function DialogController($scope, $mdDialog) {

  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}




});


})();