(function(){
  'use strict';

  var app = angular.module('LunchCheck', []);
  app.controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController ($scope) {
    $scope.lunchItems = "";
    $scope.userMessage = "";
    $scope.messageType = "";

    $scope.checkQty = function() {
      //var re = /\s*,\s*/; //RegExpr to clean spaces before and after each comma
                            //Useful if we use the content string
                            //var lunchItems = $scope.lunchItems.split(re);
      var lunchItems = $scope.lunchItems.split(',');
      var itemsCounter = 0;

      for (var i = 0; i < lunchItems.length; i++) {
        if (lunchItems[i] != "") {
          itemsCounter++;
        }
      }

      // console.log(lunchItems.length + ' items in list');
      // console.log(lunchItems);
      console.log(itemsCounter + ' valid items in list');

      if (itemsCounter > 3) {
        $scope.userMessage = 'Too much!';
        $scope.messageType = 'alert-danger';
      } else if (itemsCounter == 0) {
        $scope.userMessage = 'Please enter data first';
        $scope.messageType = 'alert-warning';
      } else {
        $scope.userMessage = 'Enjoy!';
        $scope.messageType = 'alert-success';
      }
    };
  };
})();