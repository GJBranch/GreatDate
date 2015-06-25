angular.module('GreatDate.controllers', [])

  .controller('DashCtrl', function ($scope) { })

  .controller('VenuesController', function ($scope, Reviews) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  var reviews = Reviews.all();
  var uniqueVenues = _.uniq(reviews, 'venue');
  $scope.venues = _.map(uniqueVenues, function getAverageRating(review) {
    var venueRatings = _.where(reviews, { venue: review.venue });
    var totalRating = _.chain(venueRatings)
      .pluck('rating')
      .sum()
      .value();

    var averageRating = totalRating / venueRatings.length;
    review.averageRating = averageRating;
    return review;
  });

  $scope.remove = function remove(venue) {
    Reviews.remove(venue);
  };
})

  .controller('ReviewsController', function ($scope, $stateParams, Reviews) {
  $scope.reviews = Reviews.get($stateParams.venue);
})

  .controller('SettingsController', function ($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
