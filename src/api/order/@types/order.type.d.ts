interface IOrder {
  /** 예약 ID */
  id: string;
  /** 예약자 이름 */
  user_name: string;
  /** 예약자 전화번호 */
  user_tell: string;
  /** 예약자 생년월일 */
  user_birth: string;
  /** 예약자 주소 */
  user_address: {
    zipcode: string;
    basic: string;
    detail: string;
  };
  /** 예약자 성별 */
  user_gender: string;
  /** 예약자 이메일 */
  user_email: string;
  /** 예약 총 가격 */
  total_price: number;
  /** 예약 메모 */
  memo?: string;
  /** 예약 날짜 */
  reservation_date: Date;
  /** 예약 시간 */
  reservation_time: string;
  /** 예약 상태 */
  status?: "pending" | "success" | "cancel";

  /** 예약 상품 */
  productId: string;
  /** 예약 병원 ID */
  hospitalId: string;
  /** 예약 선택 상품 정보 */
  select_product?: string[];
  // /** 예약 병원 정보 */
  // hospital: IHospital;
}
