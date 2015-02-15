'use strict';

angular.module('personnel')
  .controller('employeeListCtrl', function ($scope, $state, localStorService) {
    $scope.key = 'employeelist';

    localStorService.getData($scope.key).then(
      function (empList) {
        $scope.employees = JSON.parse(empList);
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