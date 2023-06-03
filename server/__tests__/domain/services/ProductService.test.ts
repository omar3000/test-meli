import { ProductService } from "../../../src/domain/services/ProductService";

import { MeliRepository } from "../../../src/infrastructure/external/MeliRepository";

describe("ProductService", () => {
  let productService: ProductService;
  let meliRepository: MeliRepository;

  beforeEach(() => {
    meliRepository = new MeliRepository();
    productService = new ProductService(meliRepository);
  });

  describe("getProducts", () => {

    it("Search query iphone with 4 items results in service", async () => {
  
      const response = await productService.getProducts("iphone");
  
      expect(response.statusCode).toEqual(200);
      expect(response.body.response).toHaveProperty("author");
      expect(response.body.response.author).toHaveProperty("name");
      expect(response.body.response.author).toHaveProperty("lastname");
      expect(response.body.response).toHaveProperty("categories");
      expect(response.body.response).toHaveProperty("items");

      for (let i = 0; i < 4; i++) {
        expect(response.body.response.items[i]).toHaveProperty("id");
        expect(response.body.response.items[i]).toHaveProperty("title");
        expect(response.body.response.items[i]).toHaveProperty("price");
        expect(response.body.response.items[i].price).toHaveProperty("currency");
        expect(response.body.response.items[i].price).toHaveProperty("amount");
        expect(response.body.response.items[i].price).toHaveProperty("decimals");
        expect(response.body.response.items[i]).toHaveProperty("picture");
        expect(response.body.response.items[i]).toHaveProperty("condition");
        expect(response.body.response.items[i]).toHaveProperty("free_shipping");
      }

    });

    it("Search query dfdffd with 0 items results in service", async () => {
  
      const response = await productService.getProducts("dfdffd");
    
      expect(response.statusCode).toEqual(200);
      expect(response.body.response).toHaveProperty("author");
      expect(response.body.response.author).toHaveProperty("name");
      expect(response.body.response.author).toHaveProperty("lastname");
      expect(response.body.response).toHaveProperty("categories");
      expect(response.body.response).toHaveProperty("items");
  
      expect(response.body.response.items).toHaveLength(0);
  
    });

  });
});
