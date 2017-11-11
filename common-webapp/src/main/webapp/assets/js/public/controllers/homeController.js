angular.module('abcnjapp')
.controller('HomeController',function($scope,$http,$window,$q,HomeService){
	$scope.test='ABCDE';
	
	HomeService.getHelloMessage().then(
			function(response){
				$scope.test = response.test;
			},function(errResponse){
				alert(errResponse);
			}
	);
});