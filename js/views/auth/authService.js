var app = angular.module('utahVeloClub');

app.service('authService', function($http, $q, $firebaseAuth, $firebaseObject){

  var ref = new Firebase('https://uvclub.firebaseio.com/');
  var authObject = $firebaseAuth(ref);

  this.login = function(loginUser){
    var dfd = $q.defer();
    authObject.$authWithPassword({
      email: loginUser.email,
      password: loginUser.password
    }).then(function(authData){
      console.log(authData);
      dfd.resolve(authData);
      currentUser=authData;
    }, function(err){
      console.log(err);
      alert(err);
      dfd.reject(err);
    });
    return dfd.promise;
  };

  this.getAuth = function(){
    return authObject;
  };

});
