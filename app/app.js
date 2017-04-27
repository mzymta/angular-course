'use strict';
require("./shared/styles/style.scss");

require("./bower_components/angular/angular.min");
require("./bower_components/angular-route/angular-route");
require("./bower_components/angular-cookies/angular-cookies");
require("./bower_components/angular-animate/angular-animate");
var config = require("./app.config");
require("./core/core.module");
require("./directives/mz-star-rating/mz-star-rating.directive");
require("./directives/mz-image-gallery/mz-image-gallery.directive");
require("./directives/mz-tabs/mz-tabs.directive");
require("./app-header/app-header.module");
require("./app-footer/app-footer.module");
require("./phone-list/phone-list.module");
require("./phone-list/phone-item/phone-item.module");
require("./phone-detail/phone-detail.module");
require("./phone-detail/review-tab/review-tab.module");
require("./cart-content/cart-content.module");
require("./cart-content/cart-item/cart-item.module");

var app = angular.module('mobileStore', [
    'ngRoute',
    'ngCookies',
    'ngAnimate',
    'core',
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
]).controller('MobileStoreController', ['phoneStore', 'cartHandler', function MobileStoreController(phoneStore, cartHandler) {
    phoneStore.load();
    cartHandler.load();
}]);

app.config(config).controller('PhoneDetailPageController', ['$scope', '$routeParams', 'phoneStore', function ($scope, $routeParams, phoneStore) {
    $scope.phoneId = $routeParams.phoneId;
    $scope.phone = phoneStore.getPhoneById;
}]);

