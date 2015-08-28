var app = angular.module('utahVeloClub');

app.controller('calCtrl', function($scope, calServ){

  $scope.eventSubmit = function(events){
    console.log(events)
    calServ.addEvent(events);
    alert("Thanks for adding an event");
    $scope.events={};
  };

});
