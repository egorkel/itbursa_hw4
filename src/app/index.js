'use strict';

angular.module('personnel', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'loginCtrl'
      });

    $urlRouterProvider.otherwise('/login');
  })
;
