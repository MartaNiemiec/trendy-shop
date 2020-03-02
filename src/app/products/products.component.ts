import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductsService } from './productsService.service';
import { Product } from './product.model'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  activeRoute: string;
  currentProducts: Product[] = [];
  areNoProducts: boolean;

  constructor(public route: ActivatedRoute, private productsService: ProductsService) {
    this.route.url.subscribe(params => {
      this.activeRoute = params[0].path;
    })
  }

  ngOnInit() {
    this.currentProducts = this.updateCurrentProducts()
    this.checkAreNoProducts();
    // return this.activeRoute;
  }

  checkAreNoProducts() {
    this.currentProducts.length === 0
      ? this.areNoProducts = true
      : this.areNoProducts = false;
  }

  updateCurrentProducts() {
    return [...this.productsService.getProducts(this.activeRoute)]
  }

  onToggleProduct() {
    return this.currentProducts = this.updateCurrentProducts(),
      this.productsService.getNumberOfProducts(),
      this.checkAreNoProducts();
  }
}
