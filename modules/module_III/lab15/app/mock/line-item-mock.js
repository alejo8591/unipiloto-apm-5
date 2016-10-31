"use strict";
var product_mock_1 = require("../mock/product-mock");
var _PRODUCTS = product_mock_1.PRODUCTS;
exports.LINE_ITEMS = [
    {
        id: 1,
        productId: _PRODUCTS[0].id,
        purchasePrice: 250000
    },
    {
        id: 2,
        productId: _PRODUCTS[1].id,
        purchasePrice: 255000
    },
    {
        id: 3,
        productId: _PRODUCTS[2].id,
        purchasePrice: 120000
    }
];
//# sourceMappingURL=line-item-mock.js.map