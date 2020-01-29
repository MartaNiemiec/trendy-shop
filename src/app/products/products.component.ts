import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import productsJson from '../../assets/products.json'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  activeRoute: string;
  currentProducts: object;
  salesArrays = [];
  salesProducts = [];

  constructor(public route: ActivatedRoute) {
    this.route.url.subscribe(params => {
      this.activeRoute = params[0].path;
    })

    // An array with reduced-price products from all departments
    this.salesArrays = productsJson.productsData.map(department => department.products.filter(product => product.reducedPrice))

    // Concatenate every array from salesArrays into salesProducts array
    this.salesArrays.map(array => {
      this.salesProducts = this.salesProducts.concat(array)
    })

    // Display specific products depending on activeRoute
    this.activeRoute === "sale"
      ? this.currentProducts = this.salesProducts
      : this.currentProducts = [...productsJson.productsData.filter(dep => {
        return dep.department === this.activeRoute
      })[0].products]
  }

  ngOnInit() {
  }

}
