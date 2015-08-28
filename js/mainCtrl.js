var app = angular.module('utahVeloClub');

app.controller('mainCtrl', function($scope, authService){

  var authObj = authService.getAuth();

  authObj.$onAuth(function(user){
    $scope.user = user;
    
  });

});
