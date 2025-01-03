import { SelectProductRepository } from "@/api/selectProduct/repository/selectProduct.repository";
import { MongooseSelectProduct } from '@/api/selectProduct/model/selectProduct.schema';

export class MongooseSelectProductRepository implements SelectProductRepository {
    async createSelectProduct(selectProduct: Omit<ISelectProduct, "_id">): Promise<ISelectProduct> {
        const newSelectProduct = new MongooseSelectProduct(selectProduct);

        await newSelectProduct.save();

        return newSelectProduct;
    }

    async findAll(): Promise<ISelectProduct[]> {
        const values = await MongooseSelectProduct.find().exec();

        return values;
    }

    async findById(selectProductId: string): Promise<ISelectProduct | null> {
        return MongooseSelectProduct.findById(selectProductId);
    }

    async updateSelectProduct(selectProductId: string, updateSelectProductInfo: Partial<ISelectProduct>): Promise<void> {
        await MongooseSelectProduct.findByIdAndUpdate(selectProductId, updateSelectProductInfo);

        return;
    }

    async deleteSelectProduct(selectProductId: string): Promise<void> {
        await MongooseSelectProduct.findByIdAndDelete(selectProductId);

        return;
    }
}