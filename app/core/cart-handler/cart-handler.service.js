module.exports = angular.module('core').factory('cartHandler', ['$cookies', function($cookies) {
    var cartContent = [];
    var key = "mz-cart";

    function load() {
        if($cookies.get(key)) cartContent = JSON.parse(decodeURIComponent($cookies.get(key)));
    };

    function get() {
        return cartContent;
    }

    function addToCart(id) {
        for(var i = 0; i < cartContent.length; i++) {
            if(cartContent[i].id === id) {
                cartContent[i].count++;
                $cookies.put(key, JSON.stringify(cartContent));
                return;
            }
        }

        var newObj = {};
        newObj.id = id;
        newObj.count = 1;
        cartContent.push(newObj);
        $cookies.put(key, JSON.stringify(cartContent));
    }

    function removeFromCart(options) {
        for(var i = 0; i < cartContent.length; i++) {
            if(cartContent[i].id === options.id) {
                cartContent[i].count--;

                if(cartContent[i].count === 0 || options.remove) cartContent.splice(i, 1);

                $cookies.put(key, JSON.stringify(cartContent));
                return;
            }
        }
    }

    function getCartCount() {
        var count = cartContent.reduce(function(sum, current) {
            return sum + current.count;
        }, 0);

        return count;
    }

    function getProductCount(id) {
        for(var i = 0; i < cartContent.length; i++) {
            if(cartContent[i].id === id) return cartContent[i].count;
        }
    }

    function clean() {
        cartContent = [];
        $cookies.remove(key);
    }

    return {
        load: load,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        getCartCount: getCartCount,
        getProductCount: getProductCount,
        clean: clean,
        get: get
    };
}]);
