import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/i18n';
import { HomeComponent } from './home/home.component';

import { AuthenticationGuard } from './auth';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { title: extract('Home') } },
  { path: 'products', loadChildren: () => import('./products/products.module').then((m) => m.ProductsModule) },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then((m) => m.OrdersModule),
    // canActivate: [AuthenticationGuard]
  },
  {
    path: 'cart',
    loadChildren: () => import('./orders/orders.module').then((m) => m.OrdersModule),
    canActivate: [AuthenticationGuard],
  },
  { path: 'policy', loadChildren: () => import('./policy/policy.module').then((m) => m.PolicyModule) },
  { path: 'about', loadChildren: () => import('./about/about.module').then((m) => m.AboutModule) },
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then((m) => m.ContactModule) },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
    // canActivate: [AuthenticationGuard]
  },
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
