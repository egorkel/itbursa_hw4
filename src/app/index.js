'use strict';

angular.module('personnel', ['ui.router', 'permission'])
  .run(function (Permission, authServ) {
    Permission.defineRole('anonymous', function () {
      return !authServ.isUser();
    });
  });