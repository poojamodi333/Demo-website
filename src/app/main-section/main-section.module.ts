import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutPageComponent } from './about-page/about-page.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ContactPageComponent,
    AboutPageComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
  ],
})

export class MainSectionModule { }
