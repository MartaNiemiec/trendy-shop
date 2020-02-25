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

  constructor(public route: ActivatedRoute, private productsService: ProductsService) {
    this.route.url.subscribe(params => {
      this.activeRoute = params[0].path;
    })
  }

  ngOnInit() {
    this.currentProducts = [...this.productsService.getProducts(this.activeRoute)]
  }

  onToggleProduct() {
    return this.currentProducts = [...this.productsService.getProducts(this.activeRoute)]
  }
}
