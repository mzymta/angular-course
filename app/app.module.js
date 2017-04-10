'use strict';

var app = angular.module('mobileStore', [
    'appHeader',
    'phoneList'
]);

 app.factory('Search', function(){
     return {
        value: ""
     }
 });