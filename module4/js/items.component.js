(function () {
  'use strict';

  angular.module('MenuApp')
  .component('itemsComponent', {
    templateUrl: 'templates/items.html',
    controller: ItemsComponentController,
    controllerAs: 'vm',
    bindings: {
      items: '<'
    }
  });

  function ItemsComponentController() {
    var vm = this;

    vm.$onInit = function () {
      console.log('$onInit');
      console.log(vm.items);
    };
  }
})();