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
  name: string;
  /** 병원 */
  hospital?: IHospital[];
  /** 예약 */
  order?: IOrder[];
  /** 선택 상품 */
  // selectProduct?: ISelectProduct[];
}

interface IHospital {
  /** ID */
  id: string;
  /** 이메일 */
  email: string;
  /** 비밀번호 */
  password: string;
  /** 이름 */
  name: string;
  /** 주소 */
  address: string;
  /** 위도 */
  latitude: string;
  /** 경도 */
  longitude: string;
  /** 전화번호 */
  businessNumber: string;
  /** 상태 */
  status: "active" | "inactive";
  /** 권한 */
  role?: role;
  /** 예약 */
  order?: IOrder[];
  // product: IProduct[];
};