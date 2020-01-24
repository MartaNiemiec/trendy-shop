import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './core/toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingPageItemComponent } from './landing-page/landing-page-item/landing-page-item.component';
import { FooterComponent } from './core/footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { ProductInfoComponent } from './products/product/product-info/product-info.component';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { ToolbarRightComponent } from './core/toolbar/toolbar-right/toolbar-right.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LandingPageComponent,
    LandingPageItemComponent,
    FooterComponent,
    ProductsComponent,
    ProductComponent,
    ProductInfoComponent,
    SignupComponent,
    LoginComponent,
    ToolbarRightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    AngularFontAwesomeModule,
    FlexLayoutModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
