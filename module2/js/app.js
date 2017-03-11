(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var vm = this;
    var listService = ShoppingListCheckOffService;
    vm.toBuyList = listService.getToBuyItems();

    vm.checkOff = function (itemIndex) {
      listService.moveToBoughtList(itemIndex);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var vm = this;
    var listService = ShoppingListCheckOffService;
    vm.boughtList = listService.getBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;
    var toBuyItems = [
      {name: "Chocolates", quantity: 12},
      {name: "Oranges", quantity: 10},
      {name: "Apples", quantity: 6},
      {name: "Bananas", quantity: 9},
      {name: "Pineapples", quantity: 3},
      {name: "Pears", quantity: 8}
    ];
    var boughtItems = [];

    service.getToBuyItems = function () {
      return toBuyItems;
    };

    service.getBoughtItems = function () {
      return boughtItems;
    };

    service.moveToBoughtList = function (itemIdex) {
      // console.log(item);
      console.log(itemIdex);
      boughtItems.push(toBuyItems[itemIdex]);
      toBuyItems.splice(itemIdex, 1);
    };
  }
})();