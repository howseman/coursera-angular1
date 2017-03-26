(function () {
  'use strict';

  angular
    .module('MenuApp')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html'
    })
    .state('categories', {
      url: '/categories',
      component: 'categoriesComponent', // This is another way to call the component from state see: https://ui-router.github.io/guide/ng1/route-to-component#update-the-state-definition
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories()
            .then(function (resp) {
              return resp;
            });
        }]
      }
    })
    .state('categories.items', {
      url: '/items/{short_name}',
      component: 'itemsComponent', // This is another way to call the component from state see: https://ui-router.github.io/guide/ng1/route-to-component#update-the-state-definition
      resolve: {
        items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
          return MenuDataService.getItemsForCategory($stateParams.short_name)
            .then(function (resp) {
              return resp.menu_items;
            });
        }]
      }
    });
  }
})();