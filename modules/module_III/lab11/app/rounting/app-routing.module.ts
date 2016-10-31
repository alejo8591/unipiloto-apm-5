import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "../component/home.component";
import {ProductsComponent} from "../component/product-list.component";
import {AboutComponent} from "../component/about.component";

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home',  component:  HomeComponent},
    { path: 'about',  component:  AboutComponent},
    { path: 'products', component: ProductsComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}