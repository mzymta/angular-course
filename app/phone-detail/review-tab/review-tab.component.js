'use strict';

angular.
    module('reviewTab').
    component('reviewTab', {
    templateUrl: 'phone-detail/review-tab/review-tab.template.html',
    controller: function ReviewTabController($http) {
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
           this.reviews.push(this.newReview);

           this.newReview = {};
           this.newReview.stars = 1;
        };

        this.isReviewFormValid = function(form) {
            return form.$valid;
        };

    },
    bindings: {
        reviews: "="
    }
});
