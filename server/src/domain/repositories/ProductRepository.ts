import { Results } from "../models/Results";

export interface ProductRepository {
  getProducts(query: string): Promise<Results | null>;
}
