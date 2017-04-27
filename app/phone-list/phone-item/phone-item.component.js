'use strict';

function PhoneItemController(phoneStore, cartHandler) {
    this.getReviewsNumber = phoneStore.getReviewsNumber.bind(this, this.phone.id);

    this.addToCart = cartHandler.addToCart.bind(this, this.phone.id);

    this.getProductCount = cartHandler.getProductCount.bind(this, this.phone.id);
}

module.exports = {
    template: require('./phone-item.template.html'),
    controller: ['phoneStore', 'cartHandler', PhoneItemController],
    bindings: {
        phone: '<'
    }
};