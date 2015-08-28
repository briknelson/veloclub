var app = angular.module('utahVeloClub');

app.service('memberReqServ', function($firebaseArray){
  var ref = new Firebase('https://uvclub.firebaseio.com/memberForms');
  var formUser = $firebaseArray(ref);

  this.postForm=function(user){
    console.log(user);
      formUser.$add(user);
  };
});
