(function () {
  'use strict';

  angular
    .module('MenuApp')
    .component('categoriesComponent', {
      templateUrl: 'templates/categories.html',
      controller: CategoriesComponentController,
      controllerAs: 'vm',
      bindings: {
        categories: '<'
      }
    });

  function CategoriesComponentController() {
    var vm = this;

    vm.$onInit = function () {
      console.log('$onInit');
      console.log(vm.categories);
    };
  }
})();
