import { Product } from "../models/product.model";

export interface ProductRepository {
  createProduct(product: Product): Promise<Product>;
  getProducts(): Promise<Product[]>;
  getProductById(productId: string): Promise<Product | null>;
  updateProduct(productId: string, params: Omit<IProduct, "id">): Promise<void>;
  deleteProduct(productId: string): Promise<void>;
}
