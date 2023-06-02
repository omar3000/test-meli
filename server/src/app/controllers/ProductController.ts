import { Request, Response } from "express";
import { ProductService } from "../../domain/services/ProductService";
import { Validation } from "../../infrastructure/validation/Validation";
import { body } from "express-validator";

export class ProductController {
  private adnService: ProductService;

  constructor(adnService: ProductService) {
    this.adnService = adnService;
  }

  public getProductsValidationRules() {
    return [
      body("search").notEmpty().withMessage("search is neccesary"),
    ];
  }



  async getProducts(req: Request, res: Response) {
    try {

      const errors  = Validation.validate(req);

      if (errors) {
        res.status(422).send({errors: errors});
        return;
      }
  
      const adn = await this.adnService.getProducts(req.body.search);
      res.status(adn.statusCode).json(adn.body ?? adn.error);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error});
    }
  }
  
}
