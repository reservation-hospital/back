import { Product } from "../models/product.model";

export interface ProductRepository {
  save(product: Product): Promise<Product>;
  findAll(): Promise<Product[]>;
  findById(productId: string): Promise<Product | null>;
  update(productId: string, params: Omit<IProduct, "id">): Promise<void>;
  delete(productId: string): Promise<void>;
}
