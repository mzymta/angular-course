'use strict';

var app = angular.module('mobileStore', [
    'ngRoute',
    'ngCookies',
    'appHeader',
    'appFooter',
    'phoneList',
    'phoneItem',
    'reviewTab',
    'phoneDetail',
    'mzStarRatingDirective',
    'mzImageGalleryDirective',
    'mzTabsDirective',
    'cartContent',
    'cartItem'
]);

app.controller('MobileStoreController', ['phoneStore', 'cartHandler', function MobileStoreController(phoneStore, cartHandler) {
    phoneStore.load();
    cartHandler.load();
}]);
