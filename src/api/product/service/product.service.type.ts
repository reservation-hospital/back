import { ProductResponseDTO } from "../dto/productResponse.dto";

export interface IProductService {
  createProduct(product: ProductResponseDTO): Promise<ProductResponseDTO>;
  getProducts(): Promise<ProductResponseDTO[]>;
  getProductById(productId: string): Promise<ProductResponseDTO>;
  updateProduct(
    productId: string,
    product: ProductResponseDTO
  ): Promise<ProductResponseDTO>;
  deleteProduct(productId: string): Promise<void>;
}
