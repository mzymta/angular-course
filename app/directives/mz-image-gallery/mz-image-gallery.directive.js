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
            }

            scope.selectImage = function(index) {
                scope.mainIndex = index;
            }
        }
    }
});