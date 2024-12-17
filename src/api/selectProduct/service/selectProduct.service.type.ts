import { SelectProductResponseDTO } from '@/api/selectProduct/dto/selectProductResponse.dto';
import { GetSelectProductResponseDTO } from '@/api/selectProduct/dto/getSelectProductResponse.dto';
import { GetSelectProductsResponseDTO } from '@/api/selectProduct/dto/getSelectProductsResponse.dto';

export interface SelectProductService {
    createSelectProduct(params: Omit<ISelectProduct, "id">): Promise<SelectProductResponseDTO>;
    
    getSelectProducts(): Promise<GetSelectProductsResponseDTO[]>;
    
    getSelectProduct(selectProductId: string): Promise<GetSelectProductResponseDTO | null>;
    
    updateSelectProduct(
        selectProductId: string,
        params: Partial<Omit<ISelectProduct, "id">>
    ): Promise<void>;
    
    deleteSelectProduct(selectProductId: string): Promise<void>;
}