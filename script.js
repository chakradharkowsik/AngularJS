// Code goes here
var app = angular.module('storeapp', []);
var count = 0;
var userNames = [];

var storeController = app.controller('StoreController', function() {
  this.currentUser = {};
  this.users = userNames;

  this.addNewUser = function(username) {
    var user = {
      id: count++,
      userName: username,
      visitedOn: new Date()
    };
    this.users.push(user);
    this.currentUser = {};
  };

  this.getUserCount = function() {
    return this.users.length > 0 ? true : false;
  };
});

app.directive('userDetails',
  function() {
    return {
      restrict: 'E',
      templateUrl: 'userDetails.html',
      controller: 'StoreController',
      controllerAs: 'storeCtrl'
    };
  }
);

app.directive('visitorWidget', function() {
  return {
    restrict: 'E',
    templateUrl: 'visitor-widget.html',
    controller: 'StoreController',
    controllerAs: 'storeCtrl'
  };
});