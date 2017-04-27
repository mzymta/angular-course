'use strict';

function AppHeaderController(searchQuery, cartHandler) {
    this.menuOpen = false;

    this.toggleMenuState = function() {
        this.menuOpen = !this.menuOpen;
    }

    this.search = searchQuery.query;

    this.getCartCount = cartHandler.getCartCount;
};

module.exports = {
    template: require('./app-header.template.html'),
    controller: ['searchQuery', 'cartHandler', AppHeaderController],
    bindings: {
        hasSearch: "<",
        hasMenu: "<"
    }
};
