import {Component, OnInit} from '@angular/core';
import { Product } from '../model/product';
import {ProductService} from "../service/product.service";
import {Router} from "@angular/router";

@Component({
    selector: 'product-list-app',
    templateUrl: 'app/templates/product-list.html',
    providers: [ProductService]
})
export class ProductsComponent implements OnInit {
    title: string = "los productos del Año";

    selected: Product;

    products: Product[];

    constructor(private router: Router, private productService: ProductService) {

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

    gotoDetail(): void {
        this.router.navigate(['product/detail/', this.selected.id]);
    }
}
