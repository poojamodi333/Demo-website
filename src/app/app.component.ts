import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  [x: string]: any;


  // isNavActive: any;
  // index : number;

    constructor() {
      this.list = [
         'Home',
         'About',
         'Contact',
      ];
    }

  title = 'Demo-website';

  Home: 'Home';
  About: 'About';
  Contact: 'Contact';


  status = false;

    list: any;
    selected: any;

  setActive(tabName) {
    if (tabName === this.Home || tabName === this.About ||
      tabName === this.Contact) {
      this.headerActive = tabName;
    }
  }
  
    select(item) {
        this.selected = item;
    }

    isActive(item) {
        return this.selected === item;
    }

}
