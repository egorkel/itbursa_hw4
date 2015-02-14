'use strict';

angular.module('personnel')
  .factory('getLocalService', function ($window, $q) {
    return {
      getData: function (key) {
        return $q(function (resolve, reject) {
          var data = $window.localStorage.getItem(key);
          data ? resolve(data) : reject('No data');
        });
      }
    };
  });
