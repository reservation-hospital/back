import { Request, Response, NextFunction } from "express";

export default class ProductController {
  async createProduct(req: Request, res: Response, next: NextFunction) {
    res.send("createProduct");
  }
  async getProducts(req: Request, res: Response, next: NextFunction) {
    res.send("getProducts");
  }
  async getProduct(req: Request, res: Response, next: NextFunction) {
    const { productId } = req.params;
  }
  async updateProduct(req: Request, res: Response, next: NextFunction) {
    res.send("updateProduct");
  }
  async deleteProduct(req: Request, res: Response, next: NextFunction) {
    res.send("deleteProduct");
  }
}
