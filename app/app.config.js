angular.
    module('mobileStore').
    config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider.
                when('/phones', {
                    template: '<app-header search="$ctrl.searchQuery" has-menu="true"></app-header>' +
                '<phone-list search="$ctrl.searchQuery"></phone-list>'
            }).
                when('/phones/:phoneId', {
                    template: '<app-header has-menu="false"></app-header><phone-detail></phone-detail>'
            }).
                otherwise('/phones')
    }

]);