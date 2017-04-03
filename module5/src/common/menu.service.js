(function () {
"use strict";

angular.module('common')
  .service('MenuService', MenuService);

MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json')
                .then(function (response) {
                  return response.data;
                });
  };

  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config)
                .then(function (response) {
                  return response.data;
                });
  };

  service.getMenuItemsByShortName = function (shortName) {
    var config = {};

    return $http.get(ApiPath + '/menu_items/' + shortName + '.json')
                .then(function (result) {
                  result.data.imageUrl = ApiPath + '/images/' + shortName;
                  console.log(result.data);
                  return result.data;
                }, function (response) {
                  console.log(response);
                  return response;
                });
  };
}
})();
