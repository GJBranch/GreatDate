'use strict';

GreatDate
    .Reviews
    .controller('ReviewsController', function ($scope, $stateParams, Reviews) {
		$scope.reviews = Reviews.get($stateParams.venue);
	});
