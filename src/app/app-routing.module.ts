import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './main-section/home-page/home-page.component';
import { AboutPageComponent } from './main-section/about-page/about-page.component';
import { ContactPageComponent } from './main-section/contact-page/contact-page.component';


const routes: Routes = [
  { path: 'Home', component: HomePageComponent },
  { path: 'About', component: AboutPageComponent },
  { path: 'Contact', component: ContactPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
