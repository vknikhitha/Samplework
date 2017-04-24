//author P.Tummala

var app = angular.module('myApp', ['ngRoute']);
app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('login',{
        templateUrl:'login.html',
        controller:'loginController'
    }).otherwise({
        redirectTo:'index.html'
    })
}]);
app.controller('loginController',function($scope){
    $scope.someWord = "Click To Check details";
});
app.controller('myCtrl', function($scope) {
    $scope.application = "My3/IIS tech touch-Angular concepts";
    var day;
    switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case  6:
        day = "Saturday";
        break;
}

if(day == "Friday"){
    day = "Happy friday";
} else if(day == "Saturday" || day == "Sunday") {
    day = "Happy Weekend";
}
    	$scope.idx = day;
        $scope.d = new Date();



});
