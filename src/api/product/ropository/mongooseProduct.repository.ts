import { ProductRepository } from "./product.repository";
import mongooseProduct from "../models/product.schema";
import { Product } from "../models/product.model";
import { Http2ServerRequest } from "http2";
import HttpException from "@/api/common/exceptions/http.exception";

export class MongooseProductRepository implements ProductRepository {
  async createProduct(params: Omit<IProduct, "id">): Promise<Product> {
    console.log("repository", params);
    const newProduct = await new mongooseProduct(params);
    const product = newProduct.save();
    return product;
  }

  async getProducts(): Promise<Product[]> {
    const products = await mongooseProduct.find();
    if (!products) throw new HttpException(404, "상품을 찾을 수 없습니다.");
    return products;
  }

  async getProductById(productId: string): Promise<Product | null> {
    const product = mongooseProduct.findById(productId);
    if (!product) throw new HttpException(404, "상품을 찾을 수 없습니다.");
    return product;
  }

  async updateProduct(
    productId: string,
    params: Omit<IProduct, "id">
  ): Promise<void> {
    const findProduct = await mongooseProduct.findById(productId);
    if (!findProduct) {
      throw new HttpException(404, "상품을 찾을 수 없습니다.");
    }
    await mongooseProduct.findByIdAndUpdate(productId, params);
    return;
  }
  async deleteProduct(productId: string): Promise<void> {
    const findProduct = await mongooseProduct.findById(productId);
    if (!findProduct) {
      throw new HttpException(404, "상품을 찾을 수 없습니다.");
    }
    await mongooseProduct.findByIdAndDelete(productId);
    return;
  }
}
