var app = angular.module('utahVeloClub');

app.controller('riskAssumpCtrl', function($scope, $firebaseArray, riskAssumpServ){
  $scope.riskSubmit = function(riskUser){
    //trying to add a timestamp to the object
      // console.log(riskUser);
      // var dateSigned = new Date().getTime();
      // riskUser.push({date: 'dateSigned'});
      console.log(riskUser);
      riskAssumpServ.postRiskForm(riskUser);
      alert("Thank you for your Assumption of Risk form");
      $scope.riskUser = {};
  };

  $scope.riskReset = function(){
    $scope.riskUser = {};
  };

});
