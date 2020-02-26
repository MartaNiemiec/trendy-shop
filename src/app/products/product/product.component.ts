import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() productObject;
  @Output() toggleProduct = new EventEmitter<object>();
  productName: string;
  productNormalPrice: number;
  productReducedPrice?: number;
  productImage: string;

  constructor() { }

  ngOnInit() {
    this.productName = this.productObject.name.charAt(0).toUpperCase() + this.productObject.name.slice(1)
    this.productNormalPrice = this.productObject.normalPrice
    this.productReducedPrice = this.productObject.reducedPrice
  }

  onToggleProduct(productKey) {
    this.productObject[productKey] = !this.productObject[productKey]
    this.toggleProduct.emit(this.productObject);
  }
}
