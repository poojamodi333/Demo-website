import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HeaderComponent } from './main-section/header/header.component';
import { FooterComponent } from './main-section/footer/footer.component';
import { HomePageComponent } from './main-section/home-page/home-page.component';

// Import your library
import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 // Specify your library as an import
 SlickCarouselModule

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HomePageComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
