'use strict';

function PhoneDetailController(phoneStore, tabsQuery, cartHandler) {
    tabsQuery.load();

    this.tabNames = tabsQuery.get;

    this.selectedTab = 1;

    this.isTabSelected = function(tabIndex) {
        return this.selectedTab === tabIndex;
    };

    this.getRating = phoneStore.getRating.bind(null, this.phoneId);

    this.getReviewsNumber = phoneStore.getReviewsNumber.bind(this, this.phoneId);

    this.isValidId = function() {
        return !!Object.keys(this.phone).length !== 0;
    };

    this.addToCart = cartHandler.addToCart.bind(this, this.phoneId);

    this.getProductCount = cartHandler.getProductCount.bind(this, this.phoneId);
}


module.exports = {
            template: require('./phone-detail.component.html'),
            controller: ['phoneStore', 'tabsQuery', 'cartHandler', PhoneDetailController],
            bindings: {
                phone: "=",
                phoneId: "="
            }
    };