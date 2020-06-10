import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/i18n';

import { PolicyComponent } from './policy.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';

const routes: Routes = [
  {
    path: '',
    component: PolicyComponent,
    data: { title: extract('Home') },
    children: [
      { path: 'privacy', component: PrivacyComponent, data: { title: extract('Home') } },
      { path: 'terms', component: TermsConditionComponent, data: { title: extract('Home') } },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class PolicyRoutingModule {}
