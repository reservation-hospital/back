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
  name: string;
  address: string;
  latitude: string;
  longitude: string;
  businessNumber: string;
  status: "active" | "inactive";
  role?: role;
  order?: IOrder[];
  // product: IProduct[];
};