'use strict';

angular.module('personnel')
  .controller('dashboardCtrl', function () {})

  .config(function ($stateProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'dashboardCtrl'
      });
  })
;
