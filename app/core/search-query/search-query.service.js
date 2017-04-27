module.exports = angular.module('core').factory('searchQuery', function() {
    var queryString = '';

    return {
        query: function() {
            if (!arguments.length) return queryString;

            queryString = arguments[0];
        }
    }
});