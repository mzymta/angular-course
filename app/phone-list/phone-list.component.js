'use strict';

angular.
    module('phoneList').
    component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: function PhoneListController() {
        this.phones = [
            {
                name: "Motorola 2000",
                image: "images/motorola2000.jpg",
                description: {
                    title: "Product description",
                    text: "Motorola 2000 is a shitty crap."
                },
                specs: {
                    title: "Product specs",
                    text: "battery: over9000"
                },
                reviews: {
                    title: "Product reviews",
                    text: "Broke after shower"
                }
            },
            {
                name: "Xiaomi 20s",
                image: "images/xiaomi20s.jpg",
                description: {
                    title: "Product description",
                    text: "Xiaomi 20s sucks balls"
                },
                specs: {
                    title: "Product specs",
                    text: "shitness: 100500"
                },
                reviews: {
                    title: "Product reviews",
                    text: "Bullcrappy product"
                }
            },
            {
                name: "Nexus 4",
                image: "images/nexus4.jpg",
                description: {
                    title: "Product description",
                    text: "bullcrap"
                },
                specs: {
                    title: "Product specs",
                    text: "specs"
                },
                reviews: {
                    title: "Product reviews",
                    text: "nice"
                }
            },
            {
                name: "Xiaomi Shit 3s",
                image: "images/xiaomi20s.jpg",
                description: {
                    title: "Product description",
                    text: "Xiaomi 20s sucks balls"
                },
                specs: {
                    title: "Product specs",
                    text: "shitness: 100500"
                },
                reviews: {
                    title: "Product reviews",
                    text: "Bullcrappy product"
                }
            },

        ];
        this.tab = 1;

        // this.search = Search;
    }
});