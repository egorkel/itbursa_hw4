'use strict';

angular.module('personnel')
  .controller('loginCtrl', function () {})

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'loginCtrl'
      });

    $urlRouterProvider.otherwise(function ($injector, $location) {
      $location.url('/login');
    });
  })
;
