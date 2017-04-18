'use strict';

var app = angular.module('mobileStore', [
    'ngRoute',
    'appHeader',
    'phoneList',
    'phoneItem',
    'reviewTab',
    'phoneDetail',
    'mzStarRatingDirective'
]);

app.component("mobileStore", {
    controller: ['$http', function MobileStoreController($http) {

        this.searchQuery = '';

        // var self = this;
        // self.phones = [];
        //
        // $http({
        //     method: 'GET',
        //     url: '/api/phones.json'
        // }).then(function successCallback(response) {
        //     self.phones = response.data;
        //     console.log('test');
        // });
    }]
});


