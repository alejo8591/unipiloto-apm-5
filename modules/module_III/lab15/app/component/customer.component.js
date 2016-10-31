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
var core_1 = require('@angular/core');
var customer_service_1 = require("../service/customer.service");
var CustomerComponent = (function () {
    function CustomerComponent(customerService) {
        this.customerService = customerService;
        this.title = 'Clientes';
    }
    CustomerComponent.prototype.getCustomers = function () {
        var _this = this;
        this.customerService.getCustomers().then(function (customers) { return _this.customers = customers; });
    };
    CustomerComponent.prototype.ngOnInit = function () {
        this.getCustomers();
    };
    CustomerComponent = __decorate([
        core_1.Component({
            selector: 'customer-app',
            templateUrl: 'app/templates/customer.html',
            providers: [customer_service_1.CustomerService]
        }), 
        __metadata('design:paramtypes', [customer_service_1.CustomerService])
    ], CustomerComponent);
    return CustomerComponent;
}());
exports.CustomerComponent = CustomerComponent;
//# sourceMappingURL=customer.component.js.map