(function () {
"use strict";

angular.module('public')
.controller('MyInfoDisplayController', MyInfoDisplayController);

MyInfoDisplayController.$inject = ['savedData'];
function MyInfoDisplayController(savedData) {
  var $ctrl = this;
  $ctrl.saved = savedData;
}

})();
