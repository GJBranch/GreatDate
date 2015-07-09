GreatDate
    .App
    .config(['$stateProvider',
    function reviewsState($stateProvider) {
            var reviews = {
                url: '/reviews/:venue',
                templateUrl: 'Reviews/reviews.partial.html',
                controller: 'ReviewsController',
                controllerAs: 'Reviews'
            };
            $stateProvider
                .state('reviews', reviews);
 }]);
