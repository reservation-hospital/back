type role = "admin" | "hospital";

interface IHospital {
  /** 이름 */
  hospitalName?: string;
  /** 주소 */
  address?: {
    zipcode: string;
    basic: string;
    detail: string;
  };
  /** 위도 */
  latitude?: string;
  /** 경도 */
  longitude?: string;
  /** 전화번호 */
  businessNumber?: string;
  /** 상태 */
  status: "active" | "inactive";
  /** 상품 목록 */
  products?: IProduct[];
  /** 예약 목록(해당 병원 예약 목록) */
  orders?: IOrder[];
}
