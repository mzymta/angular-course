angular.
    module('mobileStore').
    config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider.
                when('/phones', {
                    templateUrl: '/page-templates/phones.template.html'
            }).when('/phones/:phoneId', {
                templateUrl: '/page-templates/detail.template.html',
                controller: 'PhoneDetailPageController'
            }).otherwise('/phones');
    }
]).controller('PhoneDetailPageController', ['$scope', '$routeParams', 'phoneStore', function ($scope, $routeParams, phoneStore) {
    $scope.test = 1;
    $scope.phoneId = $routeParams.phoneId;
    $scope.phone = phoneStore.getPhoneById;
}]);

function Test() {
    this.test = 1;
}