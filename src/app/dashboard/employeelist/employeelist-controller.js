'use strict';

angular.module('personnel')
  .controller('employeeListCtrl', function ($scope, $state, getLocalService) {
    getLocalService.getData('employeelist').then(
      function (empList) {
        $scope.employees = empList;
      },
      function (error) {
        $scope.employees = [];
        console.log(error);
      }
    );

    $scope.add = function () {
      $state.go('dashboard.employeeList.employeeForm');
    }
  })

  .config(function ($stateProvider) {
    $stateProvider
      .state('dashboard.employeeList', {
        templateUrl: 'app/dashboard/employeelist/employeelist.html',
        controller: 'employeeListCtrl'
      });
  })
;