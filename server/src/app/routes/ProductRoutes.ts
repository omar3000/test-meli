import express from "express";
import { ProductController } from "../../app/controllers/ProductController";
import { ProductService } from "../../domain/services/ProductService";
import { ProductRepository } from "../../domain/repositories/ProductRepository";
import { MeliRepository } from "../../infrastructure/external/MeliRepository";

const router = express.Router();
const productRepository: ProductRepository = new MeliRepository();
const productService: ProductService = new ProductService(productRepository);
const productController: ProductController = new ProductController(productService);

router.get(
  "/",
  productController.getProductsValidationRules(),
  productController.getProducts.bind(productController)
);


export default router;
