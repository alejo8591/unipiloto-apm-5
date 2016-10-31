import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "../component/home.component";
import {ProductsComponent} from "../component/product-list.component";
import {AboutComponent} from "../component/about.component";
import {ProductDetailComponent} from "../component/product-detail.component";
import {CustomerComponent} from "../component/customer.component";
import {SalesInvoiceComponent} from "../component/sales-invoice.component";
import {SalesInvoiceCustomerDetailComponent} from "../component/sales-invoice-detail-customer.component";

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home',  component:  HomeComponent},
    { path: 'about',  component:  AboutComponent},
    { path: 'products',     component: ProductsComponent },
    { path: 'product/detail/:id',     component: ProductDetailComponent },
    { path: 'customers',     component: CustomerComponent },
    { path: 'sales-invoices',     component: SalesInvoiceComponent },
    { path: 'sales-invoice/customer/detail/:id',     component: SalesInvoiceCustomerDetailComponent },

];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}