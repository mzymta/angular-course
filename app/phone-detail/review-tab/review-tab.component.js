'use strict';

function ReviewTabController(phoneStore) {

    this.reviewFormShown = false;

    this.newReview = {};
    this.newReview.stars = 1;

    this.isReviewFormShown = function() {
        return this.reviewFormShown;
    };

    this.toggleReviewForm = function() {
        this.reviewFormShown = !this.reviewFormShown;
    };

    this.addReview = function() {
        phoneStore.updatePhoneReviews(this.phoneId, this.newReview, true);

        this.resetReviewForm();
    };

    this.isReviewFormValid = function(form) {
        return form.$valid;
    };

    this.resetReviewForm = function() {
        this.newReview = {};
        this.newReview.stars = 1;
    }

}

module.exports = {
    template: require('./review-tab.template.html'),
    controller: ['phoneStore', ReviewTabController],
    bindings: {
        reviews: "=",
        phoneId: "="
    }
};
