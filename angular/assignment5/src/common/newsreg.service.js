(function () {
"use strict";

angular.module('common')
.service('NewsletterRegistryService', NewsletterRegistryService);


NewsletterRegistryService.$inject = ['$http', 'ApiPath'];
function NewsletterRegistryService($http, ApiPath) {
  var service = this;
  var savedData;

  service.getMenuItem = function (short_name) {
    var url = ApiPath + '/menu_items/' + short_name + ".json";
    return $http.get(url).then(function (response) {
      return response.data;
    }, function (reason) {
      console.log('failed to retrieve \''+url+'\':', reason);
      return undefined;
    });
  };

  service.saveData = function (firstName, lastName, eMail, phone, dishId) {
    savedData = {
      firstName: firstName,
      lastName: lastName,
      eMail: eMail,
      phone: phone,
      dishId: dishId,
    };
    return true;
  };

  service.getSavedData = function () {
    return savedData;
  };

}

})();
