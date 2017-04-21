angular.module('phoneDetail', [])
    .component('phoneDetail', {
            templateUrl: 'phone-detail/phone-detail.component.html',
            controller: ['$routeParams', '$http', 'phoneStore', 'tabsQuery', function PhoneDetailController($routeParams, $http, phoneStore, tabsQuery) {
                tabsQuery.load();

                this.tabNames = tabsQuery.get;

                this.selectedTab = 1;

                this.isTabSelected = function(tabIndex) {
                    return this.selectedTab === tabIndex;
                };

                this.getRating = phoneStore.getRating.bind(null, this.phoneId);

                this.getReviewsNumber = phoneStore.getReviewsNumber.bind(this, this.phoneId);

                this.isValidId = function() {
                    return !!Object.keys(this.phone).length !== 0;
                };

            }],
            bindings: {
                phone: "=",
                phoneId: "="
            }
    });