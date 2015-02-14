'use strict';

angular.module('personnel')
  .controller('employeeFormCtrl', function ($scope) {
    $scope.save = function () {};
  })

  .config(function ($stateProvider) {
    $stateProvider
      .state('dashboard.employeeList.employeeForm', {
        templateUrl: 'app/dashboard/employeelist/employeeform/employeeform.html',
        controller: 'employeeFormCtrl'
      });
  })
;