import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  array = [
    {
      name: 'Home',
    },
    {
      name: 'About',
    },
    {
      name: 'FAQ',
    },
    {
      name: 'Get Started',
    },
    {
      name: 'Contact',
    },
  ];

  array1 = [
    {
      name: 'Home 1',
    },
    {
      name: 'About 1',
    },
    {
      name: 'FAQ 1',
    },
    {
      name: 'Get Started 1',
    },
    {
      name: 'Contact 1',
    },
  ];

  array2 = [
    {
      name: 'Home 2',
    },
    {
      name: 'About 2',
    },
    {
      name: 'FAQ 2',
    },
    {
      name: 'Get Started 2',
    },
    {
      name: 'Contact 2',
    },
  ];

  trackElement(index: number, element: any) {
    return element ? element.guid : null
  }

  constructor() { }

  ngOnInit(): void {
  }

}
