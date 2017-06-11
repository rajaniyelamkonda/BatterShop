import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NdbDateComponent } from './home/date.component';
import { SummaryComponent } from './summary/summary.component';
import { MenuComponent } from './home/home.component';
import {OrdersService} from './orders.service';
import { OrderClass } from './orderClass.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, NdbDateComponent, SummaryComponent, OrderClass],
  imports: [BrowserModule, FormsModule, HttpModule, NgbModule.forRoot(),
        RouterModule.forRoot([
          {
            path:'',
            redirectTo : 'NavTabs',
            pathMatch : 'full'
          },
          {
            path:'NavTabs',
            component : MenuComponent
          },
          {
            path:'summary',
            component: SummaryComponent
          }
        ])],
  providers: [OrdersService],
  bootstrap: [AppComponent],
  entryComponents: [NdbDateComponent]
})
export class AppModule { }
