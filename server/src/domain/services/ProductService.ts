import { HttpResponse } from "../../app/interfaces/HttpResponse";
import { ProductRepository } from "../repositories/ProductRepository";

export class ProductService {
  private productRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  async getProducts(query:string): Promise<HttpResponse> {

    const response = await this.productRepository.getProducts(query);
    return {statusCode: 200, body: { response }};
  }

  async getProductDetail(id:string): Promise<HttpResponse> {

    const response = await this.productRepository.getProductDetail(id);
    return {statusCode: 200, body: { response }};
  }
}