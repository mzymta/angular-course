//SEARCH SERVICE

app.factory('searchQuery', function() {
    var queryString = '';

    return function() {
        if (!arguments.length) return queryString;

        queryString = arguments[0];
    }
});

//TABS SERVICE
app.factory('tabsQuery', ['$http', function($http) {
    var tabs = [];

    function load() {
        $http({
            method: 'GET',
            url: '/api/tab-names.json'
        }).then(function successCallback(response) {
            tabs = response.data;
        });
    };

    return {
        get: function() {
            return tabs;
        },
        load: load
    }
}]);

//PHONESTORE SERVICE

app.factory('phoneStore', ['$http', function($http) {
    var phones = [];

    function load() {
        return $http({
            method: 'GET',
            url: '/api/phones.json'
        }).then(function successCallback(response) {
            phones = response.data;
            return phones;
        });
    };

    function updatePhoneList(updatedList) {
        phones = updatedList;
    };

    function getPhoneById(identifier) {
        for(var i = 0; i < phones.length; i++) {
            if(phones[i].id === identifier) {
                return phones[i];
            }
        }
    }

    function updatePhoneReviews(id, review, first) {
        for(var i = 0; i < phones.length; i++) {
            if(phones[i].id === id) {
                if(!!first) {
                    phones[i].reviews.unshift(review);
                }
                else {
                    phones[i].reviews.push(review);
                }

                phones[i].rating = getRating(id);
                console.log(phones[i].rating);
            }
        }
    }

    function getRating(id) {
        var phone = getPhoneById(id);
        var rating = phone.reviews.map(function(item, index, array) {
            return item.stars / array.length;
        }).reduce(function(sum, current) {
            return (sum + current);
        }, 0);

        return parseFloat(rating).toFixed(1);
    }

    function getReviewsNumber(id) {
        var phone = getPhoneById(id);
        return phone.reviews.length;
    }

    return {
        load: load,
        getPhoneList: function() {return phones;},
        getPhoneById: getPhoneById,
        updatePhoneList: updatePhoneList,
        updatePhoneReviews: updatePhoneReviews,
        getReviewsNumber: getReviewsNumber,
        getRating: getRating
    };
}]);

