'use strict';

var app = angular.module('mobileStore', [
    'appHeader',
    'phoneList',
    'phoneItem'
]);

app.component("mobileStore", {
    controller: function MobileStoreController() {
        this.searchQuery = "";
    }
});


 // app.factory('Search', function(){
 //     return {
 //        value: ""
 //     }
 // });