import { Product } from './product.model'
import productsJson from '../../assets/products.json'

export class ProductsService {
  availableProducts: Product[] = [];
  numberOfCartProducts: number;
  numberOfWishlistProducts: number;

  // Return an array with specific products from all departments
  getProductsData(productKey) {
    return [...productsJson.productsData.map(department => department.products.filter(product => product[productKey]))];
  }

  // Concatenate every array from previousArray into newArray
  concatenateArray(previousArray, newArray) {
    previousArray.map(array => newArray = newArray.concat(array))
    return newArray;
  }

  getSalesProducts() {
    let salesProducts = [];
    let salesArrays = this.getProductsData("reducedPrice")
    return this.availableProducts = this.concatenateArray(salesArrays, salesProducts)
  }

  getUserProducts(productsDepartment) {
    let userProducts = [];
    let userArrays = [];

    productsDepartment === "wishlist"
      ? userArrays = this.getProductsData("inWishlist")
      : userArrays = this.getProductsData("inCart")

    return this.availableProducts = this.concatenateArray(userArrays, userProducts)
  }

  getNumberOfProducts() {
    this.numberOfCartProducts = this.getUserProducts("cart").length;
    this.numberOfWishlistProducts = this.getUserProducts("wishlist").length;
  }

  getProducts(productsDepartment) {
    // Display specific products depending on activeRoute
    if (productsDepartment === "sale") {
      return this.getSalesProducts()
    } else if (productsDepartment === "wishlist" || productsDepartment === "cart") {
      return this.getUserProducts(productsDepartment)
    } else {
      return this.availableProducts = [...productsJson.productsData.filter(department => {
        return department.department === productsDepartment
      })[0].products]
    }
  }
}
