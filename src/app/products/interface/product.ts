export interface Product {
    id: string;
    title: string;
    description: string;
    genre: string;
    released: string;
    ageRating: string;
    price: number;
    discountedPrice: number;
    onSale: boolean;
    image: string;
    tags: string[];
    favorite: boolean;
    quantity?:any
  }
  