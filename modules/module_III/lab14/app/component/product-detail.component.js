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
var product_1 = require('../model/product');
var product_service_1 = require("../service/product.service");
var ProductDetailComponent = (function () {
    function ProductDetailComponent(productService) {
        this.productService = productService;
    }
    ProductDetailComponent.prototype.save = function () {
        this.productService.update(this.product)
            .then(function (response) { return console.log(response); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', product_1.Product)
    ], ProductDetailComponent.prototype, "product", void 0);
    ProductDetailComponent = __decorate([
        core_1.Component({
            selector: 'product-detail',
            templateUrl: 'app/templates/product-detail.html'
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map