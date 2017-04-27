module.exports = angular.module('core').factory('tabsQuery', ['$http', function($http) {
    var tabs = [];

    function load() {
        $http({
            method: 'GET',
            url: '/api/tab-names.json'
        }).then(function successCallback(response) {
            tabs = response.data;
        });
    };

    return {
        get: function() {
            return tabs;
        },
        load: load
    }
}]);