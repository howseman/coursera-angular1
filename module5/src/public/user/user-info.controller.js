(function () {
  'use strict';

  angular
    .module('public')
    .controller('UserInfoController', UserInfoController);

  UserInfoController.$inject = ['MenuService', 'user'];
  function UserInfoController(MenuService, user) {
    var vm = this;
    vm.user = user;
    vm.favoriteDish = {};

    if (vm.user.favoriteDishShortName !== undefined) {
      MenuService.getMenuItemsByShortName(vm.user.favoriteDishShortName)
      .then(function (resp) {
        console.log(resp);
        vm.favoriteDish = resp;
      });
    }
  }
})();