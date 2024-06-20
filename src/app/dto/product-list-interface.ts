export interface ProductListInterface {
  id: string;
  name: string;
  description: string;

  price: number;
  currency: string;
  inStock: boolean;
  rating: number;
  reviewsCount: number;

  images: any[];

  category: string;
  brand: string;

  tags: any[];
  colors: any[];
}
