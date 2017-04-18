'use strict';

angular.
    module('phoneItem').
    component('phoneItem', {
    templateUrl: 'phone-list/phone-item/phone-item.template.html',
    controller: function PhoneItemController() {
        this.getReviewsNumber = function() {
            return this.phone.reviews.length;
        }
    },
    bindings: {
        phone: '<'
    }
});