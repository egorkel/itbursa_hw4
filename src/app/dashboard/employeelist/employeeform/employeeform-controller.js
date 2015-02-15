'use strict';

angular.module('personnel')
  .controller('employeeFormCtrl', function ($scope, idGenService, localStorService, $state) {
    $scope.employee = {
      id: '',
      firstName: '',
      lastName: '',
      position: ''
    };

    $scope.save = function () {
      $scope.employee.id = idGenService.getId();
      $scope.employees.push($scope.employee);
      localStorService.updateData($scope.key, JSON.stringify($scope.employees));
      $state.go('dashboard.employeeList');
    };
  })

  .config(function ($stateProvider) {
    $stateProvider
      .state('dashboard.employeeList.employeeForm', {
        templateUrl: 'app/dashboard/employeelist/employeeform/employeeform.html',
        controller: 'employeeFormCtrl'
      });
  })
;