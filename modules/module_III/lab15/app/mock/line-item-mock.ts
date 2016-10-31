import {LineItem} from "../model/line-item";
import {Product} from "../model/product";
import {PRODUCTS} from "../mock/product-mock";

let _PRODUCTS: Product[] = PRODUCTS;

export const LINE_ITEMS: LineItem[] = [
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
