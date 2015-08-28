var app = angular.module('utahVeloClub');

app.controller('authCtrl', function($scope, authService, $firebaseObject, $location){

  var ref = new Firebase('https://uvclub.firebaseio.com/');
  var authObj = authService.getAuth();
  //$scope.user = authService.currentUser();

  $scope.login = function(loginUser){
    authService.login($scope.loginUser);
  };

  $scope.logout = function(){
    authObj.$unauth();
  };

  $scope.checkUser = function(){
    authService.currentUser();
  }

});
