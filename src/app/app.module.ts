import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './core/toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingPageItemComponent } from './landing-page/landing-page-item/landing-page-item.component';
import { FooterComponent } from './core/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LandingPageComponent,
    LandingPageItemComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
