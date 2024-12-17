// 선택 상품 생성 DTO
export class SelectProductResponseDTO {
    name: string;
    price: number;
    description: string;
    
    constructor(selectProduct: ISelectProduct) {
        this.name = selectProduct.name;
        this.price = selectProduct.price;
        this.description = selectProduct.description;
    }
}