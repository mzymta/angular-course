'use strict';

function PhoneListController(searchQuery, phoneStore) {
    this.getPhones = phoneStore.getPhoneList;

    this.search = searchQuery.query;

    this.search("");
}

module.exports = {
    template: require('./phone-list.template.html'),
    controller: ['searchQuery', 'phoneStore', PhoneListController]
};
