var app = angular.module('utahVeloClub');

app.controller('memberReqCtrl', function($scope, $firebaseArray, memberReqServ){

  $scope.memberSubmit = function(user){
    //trying to add a timestamp to the object
      // var dateSigned = new Date().getTime();
      // user.shift({date: 'dateSigned'});
      memberReqServ.postForm(user);
      alert("Thank you for your Membership Request");
      $scope.user = {};
  };

  $scope.memberReset = function(){
    debugger
    $scope.user = {};
  };

});
