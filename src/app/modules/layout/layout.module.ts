import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutComponent } from './layout.component';
import { RouterModule, Routes } from '@angular/router';
import { StockComponent } from '../stock/stock.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'stock',
    component: StockComponent,
  },
];

@NgModule({
  declarations: [
    HeaderComponent,
    DashboardComponent,
    FooterComponent,
    LayoutComponent,
    ContentComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
