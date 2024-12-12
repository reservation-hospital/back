import { ProductRepository } from "./product.repository";
import mongooseProduct from "../models/product.schema";
import { Product } from "../models/product.model";

export class MongooseProductRepository implements ProductRepository {
  async createProduct(params: Omit<IProduct, "id">): Promise<Product> {
    const newProduct = await new mongooseProduct(params);
    const product = newProduct.save();
    return product;
  }

  async getProducts(): Promise<Product[]> {
    const products = await mongooseProduct.find();
    return products;
  }

  async getProductById(productId: string): Promise<Product | null> {
    const product = mongooseProduct.findById(productId);
    return product || null;
  }

  async updateProduct(
    productId: string,
    params: Omit<IProduct, "id">
  ): Promise<void> {
    const findProduct = await mongooseProduct.findById(productId);
    if (!findProduct) {
      await mongooseProduct.findByIdAndUpdate(productId, params);
    }
    return;
  }
  async deleteProduct(productId: string): Promise<void> {
    const findProduct = await mongooseProduct.findById(productId);
    if (findProduct) {
      await mongooseProduct.findByIdAndDelete(productId);
      return;
    }
  }
}
