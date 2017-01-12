angular.module('myApp', []).controller('GreetingController',function($scope) {
this.now = new Date();
this.helloMessages = ['Hello', 'Bonjour', 'Ola', 'Ciao', 'Hallo'];
this.greeting = this.helloMessages[0];
this.getRandomHelloMessage = function() {
this.greeting = this.helloMessages[parseInt((Math.random() * this.helloMessages.length))];
}
});
