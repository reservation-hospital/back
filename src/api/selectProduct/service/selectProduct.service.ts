import HttpException from '@/api/common/exceptions/http.exception';
import mongoose from "mongoose";
import { SelectProductRepository } from '@/api/selectProduct/repository/selectProduct.repository';
import { SelectProductService } from '@/api/selectProduct/service/selectProduct.service.type';
import { SelectProductResponseDTO } from '@/api/selectProduct/dto/selectProductResponse.dto';
import { GetSelectProductResponseDTO } from '@/api/selectProduct/dto/getSelectProductResponse.dto';
import { GetSelectProductsResponseDTO } from '@/api/selectProduct/dto/getSelectProductsResponse.dto';

export class SelectProductServiceImpl implements SelectProductService {
    constructor(
        private readonly _selectProductRepository: SelectProductRepository
    ) {}

    async createSelectProduct(params: Omit<ISelectProduct, "_id">): Promise<SelectProductResponseDTO> {
        try {
            const selectProduct = await this._selectProductRepository.createSelectProduct(params);
            return new SelectProductResponseDTO(selectProduct);
        } catch (error) {
            throw new HttpException(400, "선택 상품 생성 실패");
        }
    }    

    async getSelectProducts(): Promise<GetSelectProductsResponseDTO[]> {
        const selectProducts = await this._selectProductRepository.findAll();

        const newList = await Promise.all(
            selectProducts.map((selectProduct)=>new GetSelectProductsResponseDTO(selectProduct))
        );

        return newList;
    }

    async getSelectProduct(selectProductId: string): Promise<GetSelectProductResponseDTO | null> {
        const selectProduct = await this._selectProductRepository.findById(selectProductId);

        if(!selectProduct) {
            throw new HttpException(404, "선택 상품 정보 조회 실패");
        }

        const selectProductList = await new GetSelectProductResponseDTO(selectProduct);

        return selectProductList;
    }

    async updateSelectProduct(selectProductId: string, params: Partial<Omit<ISelectProduct, "_id">>): Promise<void> {
        const findSelectProduct = await this._selectProductRepository.findById(selectProductId);
        
        if(!findSelectProduct) {
            throw new HttpException(404, "선택 상품 정보 조회 실패");
        }
        
        await this._selectProductRepository.updateSelectProduct(selectProductId, params);

        return;
    }

    async deleteSelectProduct(selectProductId: string): Promise<void> {
        await this._selectProductRepository.deleteSelectProduct(selectProductId);
    }
}