angular.module('myApp', []).controller('GreetingController', function($scope) {
$scope.now = new Date();
$scope.helloMessages = ['Hello', 'Bonjour', 'Hola', 'Conichiwa','Hallo'];
$scope.greeting = $scope.helloMessages[0];
$scope.getRandomHelloMessage = function() {
$scope.greeting = $scope.helloMessages[parseInt((Math.random()* $scope.helloMessages.length))];
}
});
