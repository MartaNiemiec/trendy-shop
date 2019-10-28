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
      image: '../../assets/images/ladies.jpg'
    },
    {
      id: 2,
      title: 'men',
      image: '../../assets/images/men.jpg'
    },
    {
      id: 3,
      title: 'kids',
      image: '../../assets/images/kids.jpg'
    },
    {
      id: 4,
      title: 'home',
      image: '../../assets/images/home.jpg'
    },
    {
      id: 5,
      title: 'sale',
      image: '../../assets/images/sale.jpg'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
