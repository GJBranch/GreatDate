GreatDate
    .App
    .config(['$stateProvider',
        function dashboardState($stateProvider) {
            var dashboard = {
                url: '/dashboard',
                views: {
                    'tab-dash': {
                        templateUrl: 'Dashboard/dashboard.partial.html',
                        controller: 'DashboardController',
                        controllerAs: 'Dashboard'
                    }
                }
            };
            $stateProvider
                .state('tab.dashboard', dashboard);
        }]);
