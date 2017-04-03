(function () {
  'use strict';

  angular
    .module('public')
    .controller('SignupController', SignupController);

  SignupController.$inject = ['MenuService', 'userService'];
  function SignupController(MenuService, userService) {
    var vm = this;
    vm.user = {};

    vm.register = function () {
      if (!vm.shortName) {
        return false;
      }

      vm.checkShortName().then(function(result){
        console.log(result);
        if (result) {
          vm.shortNameError = '';
          vm.user.favoriteDishShortName = vm.shortName;
          userService.save(vm.user);
          vm.successMessage = 'Your information has been saved';
        } else {
          vm.shortNameError = 'No such menu number exists';
          return;
        }
      });
    };

    vm.checkShortName = function () {
      return MenuService
              .getMenuItemsByShortName(vm.shortName)
                .then(function(resp) {
                  console.log(resp);
                  if (resp.name !== undefined)
                    return true;
                  else
                    return false;
                });
    };
  }
})();
