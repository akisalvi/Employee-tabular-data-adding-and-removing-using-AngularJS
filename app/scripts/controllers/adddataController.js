'use strict';


var app = angular.module('mytableApp');

app.controller('adddataController', [
  '$scope', '$element', 'title', 'close', 
  function($scope, $element, title, close) {

  $scope.name = null;
  $scope.title = title;
  
  //  This close function doesn't need to use jQuery or bootstrap, because
  //  the button has the 'data-dismiss' attribute.
  $scope.close = function() {
 	  close({
      name: $scope.name,
    },0); 
  };

  //  This cancel function must use the bootstrap, 'modal' function because
  //  the doesn't have the 'data-dismiss' attribute.
  $scope.cancel = function() {

    //  Manually hide the modal.
    $element.modal('hide');
    
    //  Now call close, returning control to the caller.
    close({
      name: $scope.name,
    },0); 
  };

}]);
