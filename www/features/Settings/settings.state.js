GreatDate
    .App
    .config(['$stateProvider',
        function settingsState($stateProvider) {
            var settings = {
                url: '/settings',
                views: {
                    'tab-settings': {
                        templateUrl: 'Settings/settings.partial.html',
                        controller: 'SettingsController',
                        controllerAs: 'Settings'
                    }
                }
            };
            $stateProvider
                .state('tab.settings', settings);
        }]);
