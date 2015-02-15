'use strict';

angular.module('personnel', ['ui.router', 'ui.bootstrap.modal', 'permission'])
  .run(function (Permission, authServ) {
    Permission.defineRole('anonymous', function () {
      return !authServ.isUser();
    });
  });