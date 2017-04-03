(function () {
  'use strict';

  angular
    .module('common')
    .service('userService', userService);

  function userService() {
    var service = this;
    service.user = {};

    service.save = function (user) {
      service.user = user;
      console.log(service.user);
    };

    service.getRegisteredUser = function() {
      return service.user;
    }
  }
})();
