import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductCardComponent } from './product-card/product-card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteDialogComponent } from './admin/delete-dialog/delete-dialog.component';
import { ErrorComponent } from './error/error.component';
import { CartItemComponent } from './@shared/cart-item/cart-item.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    SharedModule,
    AppRoutingModule, // must be imported as the last module as it contains the fallback route
  ],
  declarations: [AppComponent, HomeComponent, ProductCardComponent, ErrorComponent],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DeleteDialogComponent],
})
export class AppModule {}
