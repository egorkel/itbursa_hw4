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

    $scope.remove = function (employee) {
      $scope.employees = _.reject($scope.employees, {id: employee.id});
      localStorService.updateData($scope.key, JSON.stringify($scope.employees));
    };

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