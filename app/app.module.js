'use strict';

var app = angular.module('mobileStore', [
    'appHeader',
    'phoneList',
    'phoneItem',
    'reviewTab'
]);

app.component("mobileStore", {
    controller: function MobileStoreController() {
        this.searchQuery = "";
    }
});


