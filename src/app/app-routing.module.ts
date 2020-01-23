import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'ladies', component: ProductsComponent },
  { path: 'men', component: ProductsComponent },
  { path: 'kids', component: ProductsComponent },
  { path: 'home', component: ProductsComponent },
  { path: 'sale', component: ProductsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
