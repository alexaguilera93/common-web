'use strict';
angular.module('abcnjapp',["ngRoute"]);
//.controller('mycontroller');
angular.module('abcnjapp')
.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
	 $httpProvider.defaults.cache = false;
	    if (!$httpProvider.defaults.headers.get) {
	      $httpProvider.defaults.headers.get = {};
	    }
	    // disable IE ajax request caching
	    $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';
	    
	$routeProvider
	.when('/', {
		templateUrl : 'assets/views/index.html',
		controller : 'HomeController'
	})
	.when('/receive/:site/:location/:name*', {
		templateUrl : 'assets/views/receive.html',
		controller : 'ReceiveURLController'
	})
	.otherwise({
		rediectTo : '/'
	});
}]);

