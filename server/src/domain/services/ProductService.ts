import { HttpResponse } from "../../app/interfaces/HttpResponse";
import { ProductRepository } from "../repositories/ProductRepository";

export class ProductService {
  private productRepository: ProductRepository;

  constructor(adnRepository: ProductRepository) {
    this.productRepository = adnRepository;
  }


  async getProducts(query:string): Promise<HttpResponse> {

    const products = await this.productRepository.getProducts(query);

    return {statusCode: 200, body: { "results": products }};
  }

}