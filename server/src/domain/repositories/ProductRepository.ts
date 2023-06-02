import { Product } from "../models/Product";

export interface ProductRepository {
  getProducts(query: string): Promise<Product | null>;
}
