angular.
    module('mobileStore').
    config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider.
                when('/phones', {
                    templateUrl: '/page-templates/phones.template.html'
            }).
                when('/phones/:phoneId', {
                templateUrl: '/page-templates/detail.template.html'
            }).
                otherwise('/phones')
    }

]);