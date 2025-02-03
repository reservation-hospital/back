type role = "admin" | "hospital";

interface IAdmin {
  /** ID */
  id: string;
  /** 아이디 */
  email: string;
  /** 비밀번호 */
  password: string;
  /** 권한 */
  role?: role;
  /** 이름 */
  hospitalName: string;
  /** 주소 */
  address?: {
    zipcode: string;
    basic: string;
    detail: string;
  };
  /** 전화번호 */
  businessNumber?: string;
  /** 병원 */
  hospital?: IHospital;
  /** 상품 목록 */
  products?: IProduct[];
  /** 예약 목록(모든 병원 예약 목록) */
  orders?: IOrder[];
  /** 선택 상품 목록 */
  selectProducts?: ISelectProduct[];
}
