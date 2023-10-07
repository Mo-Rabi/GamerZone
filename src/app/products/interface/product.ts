export interface Product {
  _id: string,
  title: string,
  description:  string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  brand: string ,
  category:string,
  thumbnail: string,
  images: string[],
  watchlistStatus: boolean,
  quantity?:any,
}

  