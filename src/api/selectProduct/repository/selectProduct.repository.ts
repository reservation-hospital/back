export interface SelectProductRepository {
    // 선택 상품 생성은 id를 제외한 타입을 받고 ISelectProduct 타입을 반환
    save(selectProduct: Omit<ISelectProduct, "id">): Promise<ISelectProduct>;
    // 선택 상품 목록 조회
    findAll(): Promise<ISelectProduct[]>;
    // 선택 상품 ID로 선택 상품 찾기 -> ISelectProduct 타입을 반환하거나 없으면 null 반환
    findById(selectProductId: string): Promise<ISelectProduct | null>;
    // 선택 상품 ID로 찾고 정보 업데이트 -> 반환할 것이 없기 때문에 void
    update(selectProductId: string, updateSelectProductInfo: Partial<ISelectProduct>): Promise<void>;
    // 선택 상품 ID로 선택 상품 삭제 -> 반환할 것이 없기 때문에 void
    delete(selectProductId: string): Promise<void>;
}