export interface Product {
  id?: string,
  name: string,
  normalPrice: number,
  reducedPrice?: number,
  img: string,
  inWishlist?: boolean,
  inCart?: boolean
}
