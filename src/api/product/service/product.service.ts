import HttpException from "@/api/common/exceptions/http.exception";
import { ProductResponseDTO } from "../dto/productResponse.dto";
import { ProductRepository } from "../ropository/product.repository";
import { ProductService } from "./product.service.type";

export class ProductServiceImpl implements ProductService {
  private readonly _productRepository: ProductRepository;
  constructor(productRepository: ProductRepository) {
    this._productRepository = productRepository;
  }

  async createProduct(
    product: Omit<IProduct, "id">
  ): Promise<ProductResponseDTO> {
    console.log("service", product);
    const newProduct = await this._productRepository.createProduct(product);
    return newProduct;
  }
  async getProducts(): Promise<ProductResponseDTO[]> {
    const products = await this._productRepository.getProducts();
    return products;
  }
  async getProductById(productId: string): Promise<ProductResponseDTO> {
    const product = await this._productRepository.getProductById(productId);
    if (!product) {
      throw new HttpException(404, "상품을 찾을 수 없습니다.");
    }
    return new ProductResponseDTO(product);
  }
  async updateProduct(
    productId: string,
    product: ProductResponseDTO
  ): Promise<void> {
    const productToUpdate: Omit<IProduct, "id"> = await {
      ...product,
      description: product.description || "",
    };
    await this._productRepository.updateProduct(productId, productToUpdate);

    return;
  }
  async deleteProduct(productId: string): Promise<void> {
    const product = await this._productRepository.getProductById(productId);
    if (!product) {
      throw new HttpException(404, "상품을 찾을 수 없습니다.");
    }
    await this._productRepository.deleteProduct(productId);
  }
}
