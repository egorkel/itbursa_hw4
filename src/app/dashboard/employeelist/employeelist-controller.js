'use strict';

angular.module('personnel')
  .controller('employeeListCtrl', function ($scope, $state, localStorService, $modal) {
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

      //$state.go('dashboard.employeeList.confirm');
      var modal = $modal.open({
        templateUrl: 'app/dashboard/employeelist/confirmmodal/confirmmodal.html',
        controller: 'confirmModalCtrl',
        resolve: {
          getEmployee: function () {
            return employee;
          }
        }
      }).result.then(
        function () {
          $scope.employees = _.reject($scope.employees, {id: employee.id});
          localStorService.updateData($scope.key, JSON.stringify($scope.employees));
        },
        function (error) {
          console.log(error);
        }
      );
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