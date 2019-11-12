import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  activePath: string;

  constructor(public route: ActivatedRoute) {
    this.route.url.subscribe(params => {
      this.activePath = params[0].path;
      console.log("this.activePath: >>>", this.activePath);
    })
   }

  ngOnInit() {
  }



}
