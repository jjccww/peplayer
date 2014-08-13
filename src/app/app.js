angular.module( 'ngBoilerplate', [
	'templates-app',
	'templates-common',
	'ngBoilerplate.home',
	'ui.router',
	'services.trackdata',
	'peplayer.activity',
	'angular-carousel'
])

/*
.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
	$urlRouterProvider.otherwise( '/home' );
})
*/

.config(function($provide, $stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');
})


.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location, $state ) {
	/*
	$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
		if ( angular.isDefined( toState.data.pageTitle ) ) {
			$scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate' ;
		}
	});
	*/
})

;

