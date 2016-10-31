import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "../component/home.component";
import {ProductsComponent} from "../component/product-list.component";
import {AboutComponent} from "../component/about.component";
import {ProductDetailComponent} from "../component/product-detail.component";

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home',  component:  HomeComponent},
    { path: 'about',  component:  AboutComponent},
    { path: 'products',     component: ProductsComponent },
    { path: 'product/detail/:id',     component: ProductDetailComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}