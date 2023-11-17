import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared/shared.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StockComponent } from './pages/stock/stock.component';
import { NewPurchaseComponent } from './pages/new-purchase/new-purchase.component';
import { NewSaleComponent } from './pages/new-sale/new-sale.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StockComponent,
    NewPurchaseComponent,
    NewSaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
