import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-landing-page-item',
  templateUrl: './landing-page-item.component.html',
  styleUrls: ['./landing-page-item.component.scss']
})
export class LandingPageItemComponent implements OnInit {
  @Input() itemTitle: string;

  constructor() {}

  ngOnInit() {}
}
