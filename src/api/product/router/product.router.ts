import express from "express";

import ProductController from "../controller/product.controller";
import { extractPath } from "@/utils/path.util";
import { ROUTES_INDEX } from "@/api";
import { ProductServiceImpl } from "../service/product.service";
import { MongooseProductRepository } from "../ropository/mongooseProduct.repository";
const prodcutRouter = express.Router();

const productController = new ProductController(
  new ProductServiceImpl(new MongooseProductRepository())
);

const PRODUCT_ROUTES = {
  GET_PRODUCTS: "/api/product",
  GET_PRODUCT: "/api/product/:productId",
  CREATE_PRODUCT: "/api/product",
  UPDATE_PRODUCT: "/api/product/:productId",
  DELETE_PRODUCT: "/api/product/:productId",
};

prodcutRouter.get(
  extractPath(PRODUCT_ROUTES.GET_PRODUCTS, ROUTES_INDEX.PRODUCT_API),
  productController.getProducts
);
prodcutRouter.get(
  extractPath(PRODUCT_ROUTES.GET_PRODUCT, ROUTES_INDEX.PRODUCT_API),
  productController.getProduct
);
prodcutRouter.post(
  extractPath(PRODUCT_ROUTES.CREATE_PRODUCT, ROUTES_INDEX.PRODUCT_API),
  productController.createProduct
);
prodcutRouter.put(
  extractPath(PRODUCT_ROUTES.UPDATE_PRODUCT, ROUTES_INDEX.PRODUCT_API),
  productController.updateProduct
);
prodcutRouter.delete(
  extractPath(PRODUCT_ROUTES.DELETE_PRODUCT, ROUTES_INDEX.PRODUCT_API),
  productController.deleteProduct
);

export default prodcutRouter;
