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

  checkAreNoProducts() {
    this.currentProducts.length === 0 ? this.areNoProducts = true : this.areNoProducts = false;
  }

  ngOnInit() {
    this.currentProducts = [...this.productsService.getProducts(this.activeRoute)]
    this.checkAreNoProducts();
  }

  onToggleProduct() {
    return this.currentProducts = [...this.productsService.getProducts(this.activeRoute)],
      this.productsService.getNumberOfProducts(),
      this.checkAreNoProducts();
  }
}
