import { Component } from '@angular/core';
import { Product } from '../model/product';
import {ProductService} from "../service/product.service";

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/product-list.html',
    providers: [ProductService]
})
export class AppComponent {
	title: string = "los productos del Año";

    selected: Product;

    products: Product[];

    constructor(private productService: ProductService) {

    }

    getProducts() {
        this.productService.getProducts().then(products => this.products = products);
    }

    ngOnInit(): void {
        this.getProducts();
    }

    onSelect(product: Product){
        this.selected = product;
    }
}