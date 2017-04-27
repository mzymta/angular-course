'use strict';

require("./phone-list.component.scss");
var PhoneListComponent = require("./phone-list.component");

angular.module('phoneList', [])
    .component('phoneList', PhoneListComponent);
