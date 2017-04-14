'use strict';

angular.
    module('reviewTab').
    component('reviewTab', {
    templateUrl: 'phone-list/phone-item/review-tab/review-tab.template.html',
    controller: function ReviewTabController() {
        this.reviewFormShown = false;

        this.isReviewFormShown = function() {
            return this.reviewFormShown;
        };

        this.toggleReviewForm = function() {
            this.reviewFormShown = !this.reviewFormShown;
        };

        this.newReview = {};

        this.addReview = function() {
           this.reviews.push(this.newReview);

           this.newReview = {};

        };

        this.isReviewFormValid = function(form) {
            return form.$valid;
        };

    },
    bindings: {
        reviews: "="
    }
});
