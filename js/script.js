var Main = function ($scope, $interval) {
  
};
var app = angular.module('game', []);
app.controller('Main',['$scope','$interval', Main]);
app.directive('tlRotate', function () {
  return {
    replace: false,
    transclude: false,
    restrict: 'A',
    scope: false,
    link: function ($scope, element, attrs) {
      
    }
  };
});