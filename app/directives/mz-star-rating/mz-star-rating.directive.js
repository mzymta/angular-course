angular.module('mzStarRatingDirective', []).
directive('mzStarRating', function () {
    return {
        restrict: 'EA',
        template: '<ul class="star-rating">' +
        '<li ng-repeat="star in stars" class="star-rating__star" ng-class="{\'star-rating__star_filled\': star.filled, \'star-rating__star_readonly\': star.readonly}" star-index="{{star.index}}" ng-click="toggle(star.index)">' +
        '\u2605' +
        '</li>' +
        '</ul>',
        scope: {
            ratingValue: '=',
            max: '=',
            readonly: '@'
        },
        link: function (scope, elem, attrs) {


            function updateStars() {
                scope.stars = [];
                scope.max = scope.max || 5;

                for (var i = 0; i < scope.max; i++) {
                    scope.stars.push({index: i, filled: i < scope.ratingValue, readonly: scope.readonly});
                }

            }

            scope.$watch('ratingValue', function(oldVal, newVal){
                if(newVal) {
                    updateStars();
                }
            });

            scope.toggle = function(index) {
                if(scope.readonly && scope.readonly === 'true') {
                    return;
                }

                scope.ratingValue = index + 1;
            }
        }
    }
});