//declare that the page is going to be using angular
var app = angular.module('myApp', [])

//declaring the controller.  need to inject the scope and http we are using
app.controller('myCtrl', function($scope,$http){

	//how we declare a variable in angular $scope; this object
	// $scope.name = {
	// 	first:'Nick',
	// 	last:'Wong'
	// }

	//enter the api in the $http.get function.  function(response = any name we want)
	//get request to get book data
	$http.get('https://www.googleapis.com/books/v1/volumes?q=quilting').then(function(response){
		// console.log(response);
		//$scope.books can be any name you want like $scope.papers ect.
		$scope.books = response.data.items;
		console.log($scope.books);
	})
})