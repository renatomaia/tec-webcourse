(function () {
"use strict";

angular.module('public')
.controller('SignUpFormController', SignUpFormController);

SignUpFormController.$inject = ['NewsletterRegistryService'];
function SignUpFormController(newsreg) {
  var $ctrl = this;
  $ctrl.invalidDish = true;
  $ctrl.submitData = function () {
    $ctrl.saved = newsreg.saveData($ctrl.firstName,
                                   $ctrl.lastName,
                                   $ctrl.eMail,
                                   $ctrl.phone,
                                   $ctrl.dishId);
  };
  $ctrl.validateDish = function () {
    if (typeof $ctrl.dishId === 'string') {
      newsreg.getMenuItem($ctrl.dishId).then(function (item) {
        $ctrl.invalidDish = (item === undefined);
      });
    } else {
      $ctrl.invalidDish = true;
    }
  };
}

})();
