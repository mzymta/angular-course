'use strict';

angular.
    module('appHeader').
    component('appHeader', {
    templateUrl: 'app-header/app-header.template.html',
    controller: ['searchQuery', 'cartHandler', function AppHeaderController(searchQuery, cartHandler) {
        this.menuOpen = false;

        this.toggleMenuState = function() {
            this.menuOpen = !this.menuOpen;
        }

        this.search = searchQuery.query;

        this.getCartCount = cartHandler.getCartCount;

    }],
    bindings: {
        hasSearch: "<",
        hasMenu: "<"
    }
});
