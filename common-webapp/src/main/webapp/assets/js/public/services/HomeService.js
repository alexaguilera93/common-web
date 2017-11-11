'use strict';
angular.module('abcnjapp')
.factory('HomeService',function($http, $q){
	return {
		getHelloMessage:function(){
			return $http.get('data/home/test').then(
				function(response){
					return response.data;
				},function(errResponse){
					$q.reject(errResponse);
				}
			);
		}
	};
	
});