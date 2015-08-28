var app = angular.module('utahVeloClub');

app.service('calServ', function($firebaseArray, $firebaseObject, fb){

  var ref = new Firebase('https://uvclub.firebaseio.com/events');
  var eventsForm = $firebaseArray(ref);

  this.addEvent = function(events){
    if (typeof events.eventDate !== 'string') {
    events.eventDate = events.eventDate.toJSON();
      }
    console.log(events);
    eventsForm.$add(events);
  };

  this.getAllEvents = function(){
    ref.on("value", function(snapshot) {
      // need to turn date from string back to date object
      // if (typeof events.eventDate === 'string') {
      // events.eventDate = new Date(events.eventDate);
      //   }
    console.log(snapshot.val());
    return eventsData = snapshot.val();
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  }
)};

  // this.getAllEvents = function(){
  //   return new Firebase(ref + '/id');
  // };

});
