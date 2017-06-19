(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      abstract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    })
    .state('public.signup', {
      url: '/signup',
      templateUrl: 'src/public/sign-up/sign-up.html',
      controller: 'SignUpFormController',
      controllerAs: '$ctrl',
    })
    .state('public.myinfo', {
      url: '/myinfo',
      templateUrl: 'src/public/my-info/my-info.html',
      controller: 'MyInfoDisplayController',
      controllerAs: '$ctrl',
      resolve: {
        savedData: ['NewsletterRegistryService', function (newsreg) {
          var data = newsreg.getSavedData();
          if (data !== undefined) {
            return newsreg.getMenuItem(data.dishId).then(function (item) {
              item.category = data.dishId.match(/^[A-Z]+/g)[0];
              return {
                firstName: data.firstName,
                lastName: data.lastName,
                eMail: data.eMail,
                phone: data.phone,
                dish: item,
              };
            });
          }
          return undefined;
        }]
      }
    });
}
})();
