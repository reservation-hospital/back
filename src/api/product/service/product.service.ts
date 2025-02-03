import HttpException from "@/api/common/exceptions/http.exception";
import { ProductRepository } from "../repository/product.repository";
import { AdminRepository } from "@/api/admin/repository/admin.repository";
import { ProductService } from "./product.service.type";
import { ObjectId } from 'mongodb';

export class ProductServiceImpl implements ProductService {
  private readonly _productRepository: ProductRepository;
  private readonly _adminRepository: AdminRepository;
  constructor(productRepository: ProductRepository, adminRepository: AdminRepository) {
    this._productRepository = productRepository;
    this._adminRepository = adminRepository;
  }

  async createProduct(
    hospitalId: string,
    product: Omit<IProduct, "id">
  ): Promise<IProduct> {
    
    const findAdmin = await this._adminRepository.findById(hospitalId);

    if (!findAdmin) {
      throw new HttpException(409, "존재하지 않는 병원입니다.");
    }

    const newProduct: IProduct = {
      name: product.name,
      price: product.price,
      description: product.description,
      selective: product.selective,
      hospitalId: hospitalId,
    }

    const savedProduct = await this._productRepository.save(hospitalId, newProduct);

    const updateProducts = findAdmin.products
    ? findAdmin.products.concat(savedProduct)
    : [savedProduct];
  
    await this._adminRepository.update(hospitalId, { products: updateProducts });
  
    return newProduct;
  }
  async getProducts(): Promise<IProduct[]> {
    const products = await this._productRepository.findAll();
    return products;
  }
  async getProductById(productId: string): Promise<IProduct> {
    const product = await this._productRepository.findById(productId);
    if (!product) {
      throw new HttpException(404, "상품을 찾을 수 없습니다.");
    }
    return product;
  }
  async updateProduct(
    productId: string,
    product: IProduct
  ): Promise<void> {
    const productToUpdate: Omit<IProduct, "id"> = {
      ...product,
      description: product.description || "",
    };
    await this._productRepository.update(productId, productToUpdate);

    return;
  }
  async deleteProduct(hospitalId: string, productId: string): Promise<void> {
    const findAdmin = await this._adminRepository.findById(hospitalId);
    if (!findAdmin) {
      throw new HttpException(409, "존재하지 않는 병원입니다.");
    }
  
    const product = await this._productRepository.findById(productId);
    if (!product) {
      throw new HttpException(404, "상품을 찾을 수 없습니다.");
    }
    
    const updatedProducts = (findAdmin.products || []).filter((p) => {
      return new ObjectId(p.id).toString() !== new ObjectId(productId).toString();
    });

    await this._adminRepository.update(hospitalId, { products: updatedProducts });

    await this._productRepository.delete(productId);
  
  }
}