'use strict';

angular.module('bhendi', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        templateUrl: 'app/components/navbar/navbar.html',
        controller: 'NavbarCtrl',
        abstract: true
      })
      .state('home.todos', {
      	url: '/',
        templateUrl: 'app/todos/todos.html',
        controller: 'TodoCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
