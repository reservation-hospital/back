interface IProduct {
    /** ID */
    id?: string;
    /** 상품 이름 */
    name: string;
    /** 상품 가격 */
    price: number;
    /** 상품 설명 */
    description: string;
    /** 선택 상품 */
    selective?: string[];
    /** 병원 ID */
    hospitalId: string;
}
