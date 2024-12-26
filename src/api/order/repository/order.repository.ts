export interface OrderRepository {
    // 예약 생성은 id를 제외한 타입을 받고 IOrder 타입을 반환
    createOrder(order: Omit<IOrder, "id">): Promise<IOrder>;
    // 예약 목록 조회
    findAll(): Promise<IOrder[]>;
    // 예약 ID로 예약 찾기 -> IOrder 타입을 반환하거나 없으면 null 반환
    findById(orderId: string): Promise<IOrder | null>;
    // 예약 ID로 찾고 정보 업데이트 -> 반환할 것이 없기 때문에 void
    updateOrder(orderId: string, updateOrderInfo: Partial<IOrder>): Promise<IOrder>;
    // 예약 ID로 예약 삭제 -> 반환할 것이 없기 때문에 void
    deleteOrder(orderId: string): Promise<void>;
}