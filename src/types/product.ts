
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  ingredients?: string[];
}

export interface CartItem extends Product {
  quantity: number;
}
