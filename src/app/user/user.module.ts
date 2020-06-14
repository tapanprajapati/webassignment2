import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';

import { ProfileComponent, ChangePasswordDialog } from './profile/profile.component';
import { FooterComponent } from '@app/@shared/footer/footer.component';
import { SharedModule } from '@app/@shared';
import { MaterialModule } from '@app/material.module';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, UserRoutingModule, SharedModule, MaterialModule, ReactiveFormsModule],
  declarations: [ProfileComponent, ChangePasswordDialog],
  providers: [],
})
export class UserModule {}
