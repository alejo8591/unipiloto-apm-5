import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './component/app.component';
import { ProductDetailComponent } from './component/product-detail.component';
import {AppRoutingModule} from "./rounting/app-routing.module";
import {AboutComponent} from "./component/about.component";
import {ProductsComponent} from "./component/product-list.component";
import {HomeComponent} from "./component/home.component";
import {APP_BASE_HREF} from "@angular/common";
import {CustomerComponent} from "./component/customer.component";
import {SalesInvoiceComponent} from "./component/sales-invoice.component";
import {SalesInvoiceCustomerDetailComponent} from "./component/sales-invoice-detail-customer.component";

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule,
      AppRoutingModule
  ],
  declarations: [
      AppComponent,
      ProductDetailComponent,
      ProductsComponent,
      HomeComponent,
      AboutComponent,
      CustomerComponent,
      SalesInvoiceComponent,
      SalesInvoiceCustomerDetailComponent
  ],
  providers: [
      {
          provide: APP_BASE_HREF, useValue : '/'
      }
  ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
