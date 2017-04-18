'use strict';

angular.
    module('phoneList', []).
    component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['$http', function PhoneListController($http) {
        var self = this;

        $http({
            method: 'GET',
            url: '/api/phones.json'
        }).then(function successCallback(response) {
            self.phones = response.data;
        }, function errorCallback(response) {
            console.dir(response.status, response.statusText);
        });
    }],
    bindings: {
        search: "<"
    }
});
