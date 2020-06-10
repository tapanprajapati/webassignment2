import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/i18n';

import { CartComponent } from './cart.component';

const routes: Routes = [{ path: '', component: CartComponent, data: { title: extract('Home') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class CartRoutingModel {}
