import { ProductResponseDTO } from "../dto/productResponse.dto";

export interface ProductService {
  createProduct(product: ProductResponseDTO): Promise<ProductResponseDTO>;
  getProducts(): Promise<ProductResponseDTO[]>;
  getProductById(productId: string): Promise<ProductResponseDTO>;
  updateProduct(productId: string, product: ProductResponseDTO): Promise<void>;
  deleteProduct(productId: string): Promise<void>;
}
