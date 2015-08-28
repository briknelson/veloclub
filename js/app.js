var app = angular.module('utahVeloClub', ['firebase', 'ngRoute', 'ui.bootstrap', 'ngTouch']);

app.constant('fb', {
  url:'https://uvclub.firebaseio.com/'
});

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: '/js/views/home/homeTmpl.html',
    controller: 'homeCtrl'
  })
  .when('/membership', {
    templateUrl: '/js/views/membershipReq/memberReqTmpl.html',
    controller: 'memberReqCtrl'
  })
  .when('/members', {
    templateUrl: '/js/views/membershipReq/memberList.html',
    controller: 'memberReqCtrl'
  })
  .when('/risk', {
      templateUrl: '/js/views/riskAssumption/riskAssumpTmpl.html',
      controller: 'riskAssumpCtrl'
  })
  .when('/riskForms', {
    templateUrl: 'js/views/riskAssumption/riskForms.html',
    controller: 'riskAssumpCtrl'
  })
  .when('/calendar', {
      templateUrl: '/js/views/calendar/calendarTmpl.html',
      controller: 'calCtrl',
      resolve: {
      eventsRef: function(calServ){
        return calServ.getAllEvents();
        }
      }
  })
  .when('/pictures', {
      templateUrl: '/js/views/pictures/picturesTmpl.html',
      controller: 'picturesCtrl'
  })
  .when('/login', {
      templateUrl: '/js/views/auth/authTmpl.html',
      controller: 'authCtrl'
  })
  .when('/eventsEdit', {
    templateUrl: '/js/views/calendar/calendarEditTmpl.html',
    controller: 'calCtrl'
  })
  .otherwise({
      redirect: '/'
  });
});
