angular.module('phoneDetail', [])
    .component('phoneDetail', {
            templateUrl: 'phone-detail/phone-detail.component.html',
            controller: ['$routeParams', '$http', function PhoneDetailController($routeParams, $http) {
                var self = this;

                this.phone = {};

                this.phoneId = $routeParams.phoneId;

                $http({
                    method: 'GET',
                    url: '/api/phones.json'
                }).then(function successCallback(response) {
                    response.data.forEach(function(item){
                        if(item.id == self.phoneId) {
                            self.phone = item;
                        }
                    });
                    console.log(self.phone);
                });

                $http({
                    method: 'GET',
                    url: '/api/tabs.json'
                }).then(function successCallback(response) {
                    self.tabNames = response.data;
                    console.log(response.data);
                });

                this.tab = 1;

                this.selectTab = function(tabIndex) {
                    this.tab = tabIndex;
                };

                this.isTabSelected = function(tabIndex) {
                    return this.tab === tabIndex;
                }

                this.getRating = function() {
                    var ratingValue =  self.phone.reviews.map(function(item, index, array) {
                        return item.stars / array.length;
                    }).reduce(function(sum, current) {
                        return (sum + current);
                    }, 0);

                    return parseFloat(ratingValue).toFixed(1);
                }

                this.getReviewsNumber = function() {
                    return self.phone.reviews.length;
                }
            }]
    });