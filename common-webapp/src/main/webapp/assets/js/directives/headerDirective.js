'use strict';

angular.module('abcnjapp')
.directive('header', function ($rootScope) {
	return {
		restrict: 'E',
		templateUrl: 'assets/views/header.html',
		controller: 'HeaderController',
		/*link: function(scope, element) {
			$rootScope.$on('$routeChangeSuccess', function (event, currentRoute) {
				switch(currentRoute.templateUrl) {
					case 'assets/views/sfs/ship-from-store.html':
					case 'assets/views/sfs/pick-list.html':
					case 'assets/views/sfs/processed-orders.html':
					case 'assets/views/sfs/process-order.html':
						element.attr('id', 'sfsheader');
						break;
					case 'assets/views/ispu/in-store-pickup.html':
					case 'assets/views/ispu/pick-list.html':
					case 'assets/views/ispu/processed-orders.html':
					case 'assets/views/ispu/process-order.html':
						element.attr('id', 'ispuheader');
						break;
					default:
						element.attr('id', 'header');
						break;
				}

				element.removeClass('header home-nav');
				element.removeClass('header');
				switch(currentRoute.templateUrl) {
					case 'assets/views/sfs/ship-from-store.html':
					case 'assets/views/sfs/pick-list.html':
					case 'assets/views/sfs/processed-orders.html':
					case 'assets/views/sfs/process-order.html':
					case 'assets/views/ispu/in-store-pickup.html':
					case 'assets/views/ispu/pick-list.html':
					case 'assets/views/ispu/processed-orders.html':
					case 'assets/views/ispu/process-order.html':
						element.addClass('header');
						break;
					default:
						element.addClass('header home-nav');
						break;
				}
			});
		}*/
	};
});