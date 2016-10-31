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
var sales_invoice_mock_1 = require("../mock/sales-invoice-mock");
var SalesInvoiceService = (function () {
    function SalesInvoiceService() {
    }
    SalesInvoiceService.prototype.getSalesInvoices = function () {
        return Promise.resolve(sales_invoice_mock_1.SALES_INVOICES);
    };
    SalesInvoiceService.prototype.getSalesInvoicesCustomerDetail = function (id) {
        return this.getSalesInvoices()
            .then(function (salesInvoices) {
            return salesInvoices.filter(function (obj) {
                if (obj.customer.id === id) {
                    return true;
                }
            });
        });
    };
    SalesInvoiceService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SalesInvoiceService);
    return SalesInvoiceService;
}());
exports.SalesInvoiceService = SalesInvoiceService;
//# sourceMappingURL=sales-invoice.service.js.map