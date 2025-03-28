export interface OrderRepository {
  // 예약 생성은 id를 제외한 타입을 받고 IOrder 타입을 반환
  save(order: Omit<IOrder, "id">): Promise<IOrder>;
  // 예약 목록 조회
  findAll(): Promise<IOrder[]>;
  // 예약 ID로 예약 찾기 -> IOrder 타입을 반환하거나 없으면 null 반환
  findById(orderId: string): Promise<IOrder | null>;
  // 전화번호로 예약 찾기 -> IOrder 타입을 반환하거나 없으면 null 반환
  findByTell(user_tell: string): Promise<IOrder[]>;
  // 이메일로 예약 찾기 -> IOrder 타입을 반환하거나 없으면 null 반환
  findByEmail(email: string): Promise<IOrder[]>;
  // 예약 ID로 찾고 정보 업데이트 -> 반환할 것이 없기 때문에 void
  update(orderId: string, updateOrderInfo: Omit<IOrder, "id">): Promise<void>;
  // 예약 ID로 예약 삭제 -> 반환할 것이 없기 때문에 void
  delete(orderId: string): Promise<void>;
}
