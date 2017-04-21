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

app.controller('MobileStoreController', ['phoneStore', function MobileStoreController(phoneStore) {
    phoneStore.load();
}]);
