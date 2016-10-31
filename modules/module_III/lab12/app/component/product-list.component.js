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
var product_service_1 = require("../service/product.service");
var router_1 = require("@angular/router");
var ProductsComponent = (function () {
    function ProductsComponent(router, productService) {
        this.router = router;
        this.productService = productService;
        this.title = "los productos del Año";
    }
    ProductsComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.getProducts().then(function (products) { return _this.products = products; });
    };
    ProductsComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductsComponent.prototype.onSelect = function (product) {
        this.selected = product;
    };
    ProductsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['product/detail/', this.selected.id]);
    };
    ProductsComponent = __decorate([
        core_1.Component({
            selector: 'product-list-app',
            templateUrl: 'app/templates/product-list.html',
            providers: [product_service_1.ProductService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, product_service_1.ProductService])
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=product-list.component.js.map