'use strict';

angular.
    module('phoneItem').
    component('phoneItem', {
    templateUrl: 'phone-list/phone-item/phone-item.template.html',
    controller: ['phoneStore', 'cartHandler', function PhoneItemController(phoneStore, cartHandler) {
        this.getReviewsNumber = phoneStore.getReviewsNumber.bind(this, this.phone.id);

        this.addToCart = cartHandler.addToCart.bind(this, this.phone.id);

        this.getProductCount = cartHandler.getProductCount.bind(this, this.phone.id);
    }],
    bindings: {
        phone: '<'
    }
});