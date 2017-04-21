'use strict';

angular.
    module('reviewTab').
    component('reviewTab', {
    templateUrl: 'phone-detail/review-tab/review-tab.template.html',
    controller: ['phoneStore', function ReviewTabController(phoneStore) {

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

    }],
    bindings: {
        reviews: "=",
        phoneId: "="
    }
});
