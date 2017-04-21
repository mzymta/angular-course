'use strict';

angular.
    module('phoneItem').
    component('phoneItem', {
    templateUrl: 'phone-list/phone-item/phone-item.template.html',
    controller: ['phoneStore', function PhoneItemController(phoneStore) {
        this.getReviewsNumber = phoneStore.getReviewsNumber.bind(this, this.phone.id);
    }],
    bindings: {
        phone: '<'
    }
});