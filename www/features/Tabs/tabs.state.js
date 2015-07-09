GreatDate
    .App
    .config(['$stateProvider',
    function tabsState($stateProvider) {
            var tabs = {
                url: '/tab',
                templateUrl: 'Tabs/tabs.partial.html',
                abstract: true
            };
            $stateProvider
                .state('tab', tabs);
 }]);
