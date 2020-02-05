import { Product } from './product.model'
import productsJson from '../../assets/products.json'

export class ProductsService {
  availableProducts: Product[] = [];

  getSalesProducts() {
    let salesProducts = [];

    // An array with reduced-price products from all departments
    let salesArrays = [...productsJson.productsData.map(department => department.products.filter(product => product.reducedPrice))]

    // Concatenate every array from salesArrays into salesProducts array
    salesArrays.map(array => {
      salesProducts = salesProducts.concat(array)
    })

    return this.availableProducts = salesProducts
  }

  getProducts(productsDepartment) {
    // Display specific products depending on activeRoute
    return productsDepartment === "sale"
      ? this.getSalesProducts()
      : this.availableProducts = [...productsJson.productsData.filter(dep => {
        return dep.department === productsDepartment
        })[0].products]
  }
}
