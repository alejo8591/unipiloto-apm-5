import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './component/app.component';
import { PageOneComponent } from './component/page-one.component';
import {AppRoutingModule} from "./rounting/app-routing.module";
import {AboutComponent} from "./component/about.component";
import {PageTwoComponent} from "./component/page-two.component";
import {HomeComponent} from "./component/home.component";
import {APP_BASE_HREF} from "@angular/common";

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule,
      AppRoutingModule
  ],
  declarations: [
      AppComponent,
      PageOneComponent,
      PageTwoComponent,
      HomeComponent,
      AboutComponent
  ],
  providers: [
      {
          provide: APP_BASE_HREF, useValue : '/'
      }
  ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
