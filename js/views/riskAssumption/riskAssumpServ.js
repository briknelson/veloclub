var app = angular.module('utahVeloClub');

app.service('riskAssumpServ', function($firebaseArray){
  var ref = new Firebase('https://uvclub.firebaseio.com/riskforms/');
  var riskFormUser = $firebaseArray(ref);

  this.postRiskForm=function(riskUser){
    // console.log(riskUser);
    riskFormUser.$add(riskUser);
  };

  this.getRiskForm=function(fb){
    return new Firebase(fb.url);
  };

});
