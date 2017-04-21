angular.module('phoneDetail', [])
    .component('phoneDetail', {
            templateUrl: 'phone-detail/phone-detail.component.html',
            controller: ['$routeParams', '$http', 'phoneStore', 'tabsQuery', function PhoneDetailController($routeParams, $http, phoneStore, tabsQuery) {
                tabsQuery.load();

                this.tabNames = tabsQuery.get;

                this.selectedTab = 3;

                this.isTabSelected = function(tabIndex) {
                    return this.selectedTab === tabIndex;
                };

                this.getRating = phoneStore.getRating.bind(null, this.phone.id);

                this.getReviewsNumber = phoneStore.getReviewsNumber.bind(this, this.phone.id);

                this.isValidId = function() {
                    return !!Object.keys(this.phone).length !== 0;
                };

            }],
            bindings: {
                phone: "="
            }
    });