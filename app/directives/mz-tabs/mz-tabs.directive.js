angular.module('mzTabsDirective', []).
directive('mzTabs', function () {
    return {
        restrict: 'EA',
        templateUrl: '/directives/mz-tabs/mz-tabs.template.html',
        scope: {
            tabNames: '=',
            selectedTab: '='
        },
        transclude: true,
        controller: ['$scope', function mzTabsController($scope) {

            $scope.selectedTab = $scope.selectedTab || 1;

            $scope.selectTab = function(tabIndex) {
                $scope.selectedTab = tabIndex;
            };

            $scope.isTabSelected = function(tabIndex) {
                return $scope.selectedTab == tabIndex;
            }
        }]
    }
});