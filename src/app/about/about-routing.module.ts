import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/i18n';
import { AboutComponent } from './about.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { VolunteerComponent } from './volunteer/volunteer.component';

const routes: Routes = [
  { path: '', component: AboutComponent, data: { title: extract('About') } },
  { path: 'our-team', component: OurTeamComponent, data: { title: extract('Volunteer') } },
  { path: 'join', component: VolunteerComponent, data: { title: extract('Volunteer') } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AboutRoutingModule {}
