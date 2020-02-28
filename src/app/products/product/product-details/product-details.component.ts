import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductsService } from '../../productsService.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  @Output() toggleProduct = new EventEmitter<object>();
  productName: string;


  constructor(@Inject(MAT_DIALOG_DATA) public passedData: any,  private productsService: ProductsService) { }

  ngOnInit() {
    this.productName = this.passedData.name.charAt(0).toUpperCase() + this.passedData.name.slice(1)
  }

  onToggleProduct(productKey) {
    this.passedData[productKey] = !this.passedData[productKey]
    this.toggleProduct.emit(this.passedData);
    this.productsService.getNumberOfProducts();
  }
}
