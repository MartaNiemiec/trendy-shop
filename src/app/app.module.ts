import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './core/toolbar/toolbar.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingPageItemComponent } from './landing-page/landing-page-item/landing-page-item.component';
import { FooterComponent } from './core/footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { ProductDetailsComponent } from './products/product/product-details/product-details.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { ToolbarRightComponent } from './core/toolbar/toolbar-right/toolbar-right.component';
import { SidenavComponent } from './core/sidenav/sidenav.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { AuthService } from './auth/auth.service';
import { ProductsService } from './products/productsService.service';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LandingPageComponent,
    LandingPageItemComponent,
    FooterComponent,
    ProductsComponent,
    ProductComponent,
    ProductDetailsComponent,
    SignupComponent,
    LoginComponent,
    ToolbarRightComponent,
    SidenavComponent,
    WishlistComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService, ProductsService],
  bootstrap: [AppComponent],
  entryComponents: [ProductDetailsComponent]
})
export class AppModule { }
