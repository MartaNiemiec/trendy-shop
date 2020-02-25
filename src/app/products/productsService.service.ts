import { Product } from './product.model'
import productsJson from '../../assets/products.json'

export class ProductsService {
  availableProducts: Product[] = [];
  numberOfCartProducts: number;
  numberOfWishlistProducts: number;

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
      // An array with in wishlist products
      ? wishlistArrays = [...productsJson.productsData.map(department => department.products.filter(product => product.inWishlist === true))]
      // An array with in cart products
      : wishlistArrays = [...productsJson.productsData.map(department => department.products.filter(product => product.inCart === true))]

    // Concatenate every array from products Arrays into new productsArray
    wishlistArrays.map(array => {
      wishlistProducts = wishlistProducts.concat(array)
    })
    return this.availableProducts = wishlistProducts
  }

  getNumberOfProducts() {
    this.numberOfCartProducts = this.getwishlistProducts("cart").length;
    this.numberOfWishlistProducts = this.getwishlistProducts("wishlist").length;
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
