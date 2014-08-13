angular.module('peplayer.activity', [
	'ui.router',
	'services.trackdata'
])

.config(function($provide, $stateProvider) {

	$provide.decorator('$state', function($delegate) {
		$delegate.state = $stateProvider.state;
		return $delegate;
	});


})

.run(function($state, TrackDataService, $timeout) {


	$state.state('activity', {
		url: '/activity',
		views: {
			'main': {
				templateUrl: 'activity/activity.tpl.html',
				controller: 'ActivityCtrl'
			}
		}
	})
	;

	$timeout(function() {
		$state.go('activity');
	}, 3000);


})


.controller('ActivityCtrl', function($scope) {

})
;