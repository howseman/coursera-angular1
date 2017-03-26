(function () {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService)
  .constant('APIURL', 'https://davids-restaurant.herokuapp.com');

  MenuDataService.$inject = ['$http', 'APIURL'];
  function MenuDataService($http, APIURL) {
    var service = this;

    service.getAllCategories = function () {
      // this method should return a promise which is a result of using the $http service,
      // using the following REST API endpoint: https://davids-restaurant.herokuapp.com/categories.json

      return $http({
        method: "GET",
        url: (APIURL + "/categories.json")
      })
      .then(function (result) {
        return result.data;
      },
      function (e) {
        console.log('Error: ', e);
      });
    };

    service.getItemsForCategory = function (categoryShortName) {
      /*
        this method should return a promise which is a result of using the $http service,
        using the following REST API endpoint: https://davids-restaurant.herokuapp.com/menu_items.json?category=,
        where, before the call to the server, your code should append whatever categoryShortName value was passed
        in as an argument into the getItemsForCategory method.
      */
      return $http({
        method: "GET",
        url: (APIURL + "/menu_items.json?category=" + categoryShortName)
      })
      .then(function (result) {
        return result.data;
      },
      function (e) {
        console.log('Error: ', e);
      });
    };
  }
})();