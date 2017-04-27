'use strict';

function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.
    when('/phones', {
        template: require('./page-templates/phones.template.html')
    }).when('/phones/:phoneId', {
        template: require('./page-templates/detail.template.html'),
        controller: 'PhoneDetailPageController'
    }).when('/cart', {
        template: require('./page-templates/cart.template.html')
    }).otherwise('/phones');
}

config.$inject = ['$locationProvider', '$routeProvider'];

module.exports = config;

