import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/i18n';

import { AdminComponent } from './admin.component';
import { AdminOrdersComponent } from './orders/orders.component';
import { AdminWorkersComponent } from './workers/workers.component';
import { AdminProductsComponent } from './products/products.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: AdminComponent,
  //   data: { title: extract('About') },
  //   children: [
  //       { path: 'orders', component: AdminOrdersComponent, data: { title: extract('About') } },
  //       { path: 'products', component: AdminProductsComponent, data: { title: extract('About') } },
  //       { path: 'workers', component: AdminWorkersComponent, data: { title: extract('About') } }
  //   ]
  // }
  {
    path: '',
    component: AdminComponent,
    data: { title: extract('Admin Dashboard') },
    children: [
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: 'orders', component: AdminOrdersComponent, data: { title: extract('Orders Management') } },
      { path: 'products', component: AdminProductsComponent, data: { title: extract('Products Management') } },
      { path: 'workers', component: AdminWorkersComponent, data: { title: extract('Employee Manangement') } },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AdminRoutingModule {}
