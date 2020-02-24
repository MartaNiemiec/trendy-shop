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

  getwishlistProducts(productsDepartment) {
    let wishlistProducts = [];
    let wishlistArrays = [];

    productsDepartment === "wishlist"
      // An array with reduced-price products from all departments
      ? wishlistArrays = [...productsJson.productsData.map(department => department.products.filter(product => product.inWishlist === true))]
      : wishlistArrays = [...productsJson.productsData.map(department => department.products.filter(product => product.inCart === true))]

    // Concatenate every array from salesArrays into salesProducts array
    wishlistArrays.map(array => {
      wishlistProducts = wishlistProducts.concat(array)
    })
    return this.availableProducts = wishlistProducts
  }

  getProducts(productsDepartment) {
    // Display specific products depending on activeRoute
    if (productsDepartment === "sale") {
      return this.getSalesProducts()
    } else if (productsDepartment === "wishlist" || productsDepartment === "cart") {
      return this.getwishlistProducts(productsDepartment)
    } else {
      return this.availableProducts = [...productsJson.productsData.filter(department => {
        return department.department === productsDepartment
      })[0].products]
    }
  }
}
