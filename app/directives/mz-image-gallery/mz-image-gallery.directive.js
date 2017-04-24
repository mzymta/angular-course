angular.module('mzImageGalleryDirective', []).
directive('mzImageGallery', function () {
    return {
        restrict: 'EA',
        templateUrl: '/directives/mz-image-gallery/mz-image-gallery.template.html',
        scope: {
            images: '=',
            phoneName: "="
        },
        link: function (scope, elem, attrs) {
            scope.mainIndex = 0;

            scope.isImageSelected = function(index) {
                return index === scope.mainIndex;
            };

            scope.selectImage = function(index) {
                scope.mainIndex = index;
            };

            scope.switchImage = function() {
                console.log('test');
            }

            scope.switchImage = function() {
                if(scope.mainIndex <= 1) {
                    scope.mainIndex++;
                    return;
                }
                scope.mainIndex = 0;
            };
        }
    }
});