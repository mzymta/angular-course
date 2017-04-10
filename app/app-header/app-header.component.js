'use strict';

angular.
    module('appHeader').
    component('appHeader', {
    templateUrl: 'app-header/app-header.template.html',
    controller: function AppHeaderController() {
        this.menuOpen = false;

        this.toggleMenuState = function() {
            this.menuOpen = !this.menuOpen;
        }

        // this.search = Search;
    }
});