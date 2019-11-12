import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'ladies', component: ProductsComponent },
  { path: 'men', component: ProductsComponent },
  { path: 'kids', component: ProductsComponent },
  { path: 'home', component: ProductsComponent },
  { path: 'sale', component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
