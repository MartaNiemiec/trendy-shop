import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  items = [
    {
      id: 1,
      title: 'ladies',
      image: 'ladies.jpg'
    },
    {
      id: 2,
      title: 'men',
      image: 'men.jpg'
    },
    {
      id: 3,
      title: 'kids',
      image: 'kids.jpg'
    },
    {
      id: 4,
      title: 'home',
      image: 'home.jpg'
    },
    {
      id: 5,
      title: 'sale',
      image: 'sale.jpg'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
