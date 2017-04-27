'use strict';

function CartContentController(phoneStore, cartHandler) {
    this.getCartCount = cartHandler.getCartCount;

    this.getCart = cartHandler.get;

    this.getTotalPrice = function() {
        var productList = cartHandler.get();

        var price = productList.reduce(function(sum, current) {
            return sum += ( phoneStore.getPhoneById(current.id).price * current.count );
        }, 0);

        return price;
    };

    this.cleanCart = cartHandler.clean;
}

module.exports = {
    templateUrl: 'cart-content/cart-content.template.html',
    controller: ['phoneStore', 'cartHandler', CartContentController]
};
