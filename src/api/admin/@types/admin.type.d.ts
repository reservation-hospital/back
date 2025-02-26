type role = "admin" | "hospital";

interface IAdmin {
  /** ID */
  id: string;
  /** 아이디 */
  email: string;
  /** 비밀번호 */
  password: string;
  /** 이름 */
  name: string;
  /** 권한 */
  role?: role;
  /** 병원 */
  hospital?: IHospital;
  /** 상품 목록 */
  products?: IProduct[];
  /** 예약 목록(모든 병원 예약 목록) */
  orders?: IOrder[];
  /** 선택 상품 목록 */
  selectProducts?: ISelectProduct[];
}
