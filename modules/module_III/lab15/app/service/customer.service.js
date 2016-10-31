"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var customer_mock_1 = require("../mock/customer-mock");
var CustomerService = (function () {
    function CustomerService() {
    }
    CustomerService.prototype.getCustomers = function () {
        return Promise.resolve(customer_mock_1.CUSTOMERS);
    };
    CustomerService.prototype.getProduct = function (id) {
        return this.getCustomers()
            .then(function (customers) { return customers.find(function (customer) { return customer.id === id; }); });
    };
    CustomerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CustomerService);
    return CustomerService;
}());
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer.service.js.map