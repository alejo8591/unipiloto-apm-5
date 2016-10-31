import { Component, Input } from '@angular/core';
import { Product } from '../model/product';
import {ProductService} from "../service/product.service";

@Component({
    selector: 'product-detail',
    templateUrl: 'app/templates/product-detail.html'
})

export class ProductDetailComponent {
    @Input()
    product: Product;

    constructor(private productService: ProductService){

    }

    save(): void {
        this.productService.update(this.product)
            .then((response) => console.log(response));
    }
}

