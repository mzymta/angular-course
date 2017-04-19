'use strict';

var app = angular.module('mobileStore', [
    'ngRoute',
    'appHeader',
    'appFooter',
    'phoneList',
    'phoneItem',
    'reviewTab',
    'phoneDetail',
    'mzStarRatingDirective',
    'mzImageGalleryDirective',
    'mzTabsDirective'
]);

//
// app.factory('sharedPhones', ['$http', function($http) {
//     $http({
//             method: 'GET',
//             url: '/api/phones.json'
//         }).then(function successCallback(response) {
//             self.phones = response.data;
//             console.log('test');
//         });
// }]);



app.component("mobileStore", {
    controller: ['$http', function MobileStoreController($http) {

        this.searchQuery = '';

        var self = this;
        self.phones = [];

        $http({
            method: 'GET',
            url: '/api/phones.json'
        }).then(function successCallback(response) {
            self.phones = response.data;
            console.log('test');
        });
    }]
});


