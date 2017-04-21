'use strict';

angular.
    module('phoneList', []).
    component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['$http', 'searchQuery', 'phoneStore', function PhoneListController($http, searchQuery, phoneStore) {
        this.getPhones = phoneStore.getPhoneList;

        this.search = searchQuery.query;

        this.search("");
    }]
});
