import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import productsJson from '../../assets/products.json'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  activePath: string;
  currentProducts : object;

  constructor(public route: ActivatedRoute) {
    this.route.url.subscribe(params => {
      this.activePath = params[0].path;
    })
    this.currentProducts = [...productsJson.productsData.filter(dep => {
      return dep.department === this.activePath
    })[0].products]
  }

  ngOnInit() {
  }



}
