// import { SelectProductResponseDTO } from '@/api/selectProduct/dto/selectProductResponse.dto';
// import { GetSelectProductResponseDTO } from '@/api/selectProduct/dto/getSelectProductResponse.dto';
// import { GetSelectProductsResponseDTO } from '@/api/selectProduct/dto/getSelectProductsResponse.dto';

export interface SelectProductService {
    createSelectProduct(params: Omit<ISelectProduct, "id">): Promise<ISelectProduct>;
    
    getSelectProducts(): Promise<ISelectProduct[]>;
    
    getSelectProduct(selectProductId: string): Promise<ISelectProduct | null>;
    
    updateSelectProduct(
        selectProductId: string,
        params: Partial<Omit<ISelectProduct, "id">>
    ): Promise<void>;
    
    deleteSelectProduct(selectProductId: string): Promise<void>;
}