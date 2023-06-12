import { Results, ProductDetail } from "../models/Results";

export interface ProductRepository {
  getProducts(query: string): Promise<Results | null>;
  getProductDetail(id: string): Promise<ProductDetail | null>;
}
