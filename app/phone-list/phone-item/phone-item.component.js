'use strict';

angular.
    module('phoneItem').
    component('phoneItem', {
    templateUrl: 'phone-list/phone-item/phone-item.template.html',
    controller: function PhoneItemController() {
        this.tab = 3;

        this.selectTab = function(tabIndex) {
            this.tab = tabIndex;
        }

        this.isTabSelected = function(tabIndex) {
            return this.tab === tabIndex;
        }
    },
    bindings: {
        phone: '<',
        tabNames: '<'
    }
});