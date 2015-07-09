GreatDate
    .App
    .config(['$stateProvider',
        function venuesState($stateProvider) {
            var venues = {
                url: '/venues',
                views: {
                    'tab-venues': {
                        templateUrl: 'Venues/venues.partial.html',
                        controller: 'VenuesController',
                        controllerAs: 'Venues'
                    }
                }
            };
            $stateProvider
                .state('tab.venues', venues);
        }]);
