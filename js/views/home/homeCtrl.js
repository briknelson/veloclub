var app = angular.module('utahVeloClub');

app.controller('homeCtrl', function($scope){

  $scope.myInterval = 4000;
  $scope.noWrapSlides = false;
  $scope.slides = [{
    image: '/img/carousel/2015group.jpg'
  }, {
    image: '/img/carousel/nationals.jpg'
  }, {
    image: '/img/carousel/SharonSnowshoe.JPG'
  }, {
    image: '/img/carousel/trike.JPG'
  }];
});
