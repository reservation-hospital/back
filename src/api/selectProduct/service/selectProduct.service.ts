import HttpException from '@/api/common/exceptions/http.exception';
import mongoose from "mongoose";
import { SelectProductRepository } from '@/api/selectProduct/repository/selectProduct.repository';
import { AdminRepository } from '@/api/admin/repository/admin.repository';
import { SelectProductService } from '@/api/selectProduct/service/selectProduct.service.type';
import { ObjectId } from 'mongodb';
// import { SelectProductResponseDTO } from '@/api/selectProduct/dto/selectProductResponse.dto';
// import { GetSelectProductResponseDTO } from '@/api/selectProduct/dto/getSelectProductResponse.dto';
// import { GetSelectProductsResponseDTO } from '@/api/selectProduct/dto/getSelectProductsResponse.dto';

export class SelectProductServiceImpl implements SelectProductService {
    constructor(
        private readonly _selectProductRepository: SelectProductRepository,
        private readonly _adminRepository: AdminRepository,
    ) {}

    async createSelectProduct(
        product: Omit<ISelectProduct, "id">
      ): Promise<ISelectProduct> {
        const newProduct: ISelectProduct = {
          name: product.name,
          price: product.price,
          description: product.description,
        };
      
        const savedProduct = await this._selectProductRepository.save(newProduct);
      
        const allAdmins = await this._adminRepository.findAll();
      
        await Promise.all(
          allAdmins.map(async (admin) => {
            const updatedSelectProducts = admin.selectProducts
              ? admin.selectProducts.concat(savedProduct)
              : [savedProduct];
      
            await this._adminRepository.update(admin.id, { selectProducts: updatedSelectProducts });
          })
        );
      
        return savedProduct;
      }

    async getSelectProducts(): Promise<ISelectProduct[]> {
        const selectProducts = await this._selectProductRepository.findAll();

        // const newList = await Promise.all(
        //     selectProducts.map((selectProduct)=>new GetSelectProductsResponseDTO(selectProduct))
        // );

        return selectProducts;
    }

    async getSelectProduct(selectProductId: string): Promise<ISelectProduct | null> {
        const selectProduct = await this._selectProductRepository.findById(selectProductId);

        if(!selectProduct) {
            throw new HttpException(404, "선택 상품 정보 조회 실패");
        }

        // const selectProductList = await new GetSelectProductResponseDTO(selectProduct);

        return selectProduct;
    }

    async updateSelectProduct(selectProductId: string, params: Partial<Omit<ISelectProduct, "_id">>): Promise<void> {
        const findSelectProduct = await this._selectProductRepository.findById(selectProductId);
        
        if(!findSelectProduct) {
            throw new HttpException(404, "선택 상품 정보 조회 실패");
        }
        
        await this._selectProductRepository.update(selectProductId, params);

        return;
    }

    async deleteSelectProduct(selectProductId: string): Promise<void> {
        // 1. 선택 상품 삭제
        await this._selectProductRepository.delete(selectProductId);
      
        // 2. 모든 관리자 가져오기
        const allAdmins = await this._adminRepository.findAll();
      
        // 3. 모든 관리자에서 선택 상품 목록 업데이트
        await Promise.all(
          allAdmins.map(async (admin) => {
            const updatedSelectProducts = (admin.selectProducts || []).filter(
              (p) => {
                return new ObjectId(p.id).toString() !== new ObjectId(selectProductId).toString();
              }
            );
      
            // 관리자의 선택 상품 목록 업데이트
            await this._adminRepository.update(admin.id, { selectProducts: updatedSelectProducts });
          })
        );
      }

}