import { ProductRepository } from "./product.repository";
import { MongooseProduct } from "../models/product.schema";
import { MongooseAdmin } from "@/api/admin/model/admin.schema";
import HttpException from "@/api/common/exceptions/http.exception";

export class MongooseProductRepository implements ProductRepository {
  async save(
    hospitalId: string,
    params: Omit<IProduct, "id">
  ): Promise<IProduct> {
    const admin = await MongooseAdmin.findById(hospitalId);
    if (!admin) {
      throw new HttpException(404, "병원을 찾을 수 없습니다.");
    }
    const newProduct = await new MongooseProduct({
      ...params,
      hospitalId: hospitalId,
    });
    const product = newProduct.save();
    return product;
  }

  async findAll(): Promise<IProduct[]> {
    const products = await MongooseProduct.find()
      .populate({
        path: "selective",
        select: "name price",
      })
      .populate({
        path: "hospitalId",
        select: "_id hospitalName address",
      })
      .exec();
    if (!products) throw new HttpException(404, "상품을 찾을 수 없습니다.");
    return products;
  }

  async findById(productId: string): Promise<IProduct | null> {
    const product = MongooseProduct.findById(productId)
      .populate({
        path: "selective",
        select: "name price",
      })
      .populate({
        path: "hospitalId",
        select: "hospitalName address",
      })
      .exec();
    if (!product) throw new HttpException(404, "상품을 찾을 수 없습니다.");
    return product;
  }

  async update(productId: string, params: Omit<IProduct, "id">): Promise<void> {
    const findProduct = await MongooseProduct.findById(productId);
    if (!findProduct) {
      throw new HttpException(404, "상품을 찾을 수 없습니다.");
    }
    await MongooseProduct.findByIdAndUpdate(productId, params);
    return;
  }
  async delete(productId: string): Promise<void> {
    await MongooseProduct.deleteOne({ _id: productId });
    return;
  }
}
