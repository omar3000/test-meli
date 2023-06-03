import { Response } from "express";
import { ProductService } from "../../domain/services/ProductService";
import { Validation } from "../../infrastructure/validation/Validation";
import { query } from "express-validator";

export class ProductController {
  private productService: ProductService;

  constructor(productService: ProductService) {
    this.productService = productService;
  }

  public getProductsValidationRules() {
    return [
      query("search").notEmpty().withMessage("search is neccesary"),
    ];
  }



  async getProducts(req, res: Response) {
    try {

      const errors  = Validation.validate(req);

      if (errors) {
        res.status(422).send({errors: errors});
        return;
      }
  
      const result = await this.productService.getProducts(req.query.search);
      res.status(result.statusCode).json(result.body.response ?? result.error);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error});
    }
  }
  
}
