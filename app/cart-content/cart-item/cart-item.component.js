'use strict';

function CartItemController(phoneStore, cartHandler) {
    this.phone = phoneStore.getPhoneById.bind(this, this.item.id);

    this.plus = cartHandler.addToCart.bind(this, this.item.id);
    this.minus = cartHandler.removeFromCart.bind(this, {id: this.item.id});
    this.remove = cartHandler.removeFromCart.bind(this, {id: this.item.id, remove: true});
}

module.exports = {
    templateUrl: 'cart-content/cart-item/cart-item.template.html',
    controller: ['phoneStore', 'cartHandler', CartItemController],
    bindings: {
        item: "<"
    }
};
