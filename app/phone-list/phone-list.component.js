'use strict';

angular.
    module('phoneList', []).
    component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: function PhoneListController() {

        this.phones = [
            {
                name: "Motorola 2000",
                image: "images/motorola2000.jpg",
                description: {
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis fugiat in laboriosam necessitatibus nulla officia quasi quibusdam repudiandae vero voluptas!"
                },
                specs: {
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequuntur cupiditate officiis reiciendis, repellat sed?"
                },
                reviews: [
                        {
                            stars: 5,
                            body: "blablabla",
                            author: "tim@tim.com"
                        },
                        {
                            stars: 4,
                            body: "I like it. It's good. Not best. Not worst. Just fine.",
                            author: "rachel@tim.com"
                        }
                    ]
            },
            {
                name: "Xiaomi 20s",
                image: "images/xiaomi20s.jpg",
                description: {
                    text: "Xiaomi 20s dolor sit amet, consectetur adipisicing elit. Amet aperiam eligendi error magnam ullam."
                },
                specs: {
                    text: "lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorem ea, in officia perspiciatis quisquam reiciendis sapiente?"
                },
                reviews: [
                        {
                            stars: 5,
                            body: "2222blablabla",
                            author: "tim@tim.com"
                        },
                        {
                            stars: 3,
                            body: "2222222",
                            author: "rachel@tim.com"
                        },
                        {
                            stars: 4,
                            body: "I like it. It's good. Not best. Not worst. Just fine.",
                            author: "rachel@tim.com"
                        }
                    ]

            },
            {
                name: "Nexus 5",
                image: "images/nexus4.jpg",
                description: {
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dicta ea exercitationem quis!"
                },
                specs: {
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                },
                reviews: [
                        {
                            stars: 2,
                            body: "33333blablabla",
                            author: "tim@tim.com"
                        },
                        {
                            stars: 4,
                            body: "d3333333adadadadadad",
                            author: "rachel@tim.com"
                        }
                    ]
            },
            {
                name: "Xiaomi 3s",
                image: "images/xiaomi20s.jpg",
                description: {
                    text: "Xiaomi 20s Lorem ipsum dolor sit amet, consectetur adipisicing."
                },
                specs: {
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores exercitationem maxime nulla. Cumque cupiditate ea magnam minima nulla obcaecati pariatur rerum? Deserunt dolores harum iure provident ullam veniam vitae voluptas!"
                },
                reviews: [
                        {
                            stars: 1,
                            body: "444444blablabla",
                            author: "tim@tim.com"
                        },
                        {
                            stars: 4,
                            body: "4444444dadadadadadad",
                            author: "rachel@tim.com"
                        }
                    ]
            }
        ];

        this.tabNames = {
            description: {
                name: "Description",
                title: "Product description"
            },
            specs: {
                name: "Specification",
                title: "Product specification"
            },
            reviews: {
                name: "Reviews",
                title: "Product reviews"
            }
        };
    },
    bindings: {
        search: "<"
    }
});
