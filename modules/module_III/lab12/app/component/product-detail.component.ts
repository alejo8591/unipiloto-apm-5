import {Component, OnInit} from '@angular/core';
import { Product } from '../model/product';
import {ProductService} from "../service/product.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
    selector: 'product-detail-app',
    templateUrl: 'app/templates/product-detail.html',
    providers: [ProductService]
})

export class ProductDetailComponent implements OnInit {

    product: Product;
    constructor(
        private productService: ProductService,
        private route: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.productService.getProduct(id)
                .then(product => this.product = product);
        });
    }
}

