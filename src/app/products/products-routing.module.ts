import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from '@app/auth/authentication.guard';

import { extract } from '@app/i18n';
import { ProductsComponent } from './products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: '', component: ProductsComponent, data: { title: extract('Home') } },
  {
    path: ':id',
    component: ProductDetailsComponent,
    data: { title: extract('Home') },
    canActivate: [AuthenticationGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ProductsRoutingModule {}
