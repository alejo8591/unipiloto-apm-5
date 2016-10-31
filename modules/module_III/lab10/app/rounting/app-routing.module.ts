import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "../component/home.component";
import {PageTwoComponent} from "../component/page-two.component";
import {AboutComponent} from "../component/about.component";
import {PageOneComponent} from "../component/page-one.component";

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home',  component:  HomeComponent},
    { path: 'about',  component:  AboutComponent},
    { path: 'page-one', component: PageOneComponent },
    { path: 'page-two', component: PageTwoComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}